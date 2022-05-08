import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@ValidatorConstraint({ async: true })
@Injectable()
export class EntityExistsConstrains implements ValidatorConstraintInterface {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async validate(text: string, validationArguments: ValidationArguments) {
    const [model, field] = validationArguments.constraints;

    const entity = await this.connection
      .collection(`${model.name}s`.toLowerCase())
      .findOne({ [field ? field : validationArguments.property]: text });

    return !!!entity;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} already exists`;
  }
}

export function EntityExists<T>(
  Entity: T extends new () => any ? T : never,
  field?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [Entity, field],
      validator: EntityExistsConstrains,
    });
  };
}
