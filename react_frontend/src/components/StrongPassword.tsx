import React, { useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
import {
  PasswordInput,
  Progress,
  Text,
  Popover,
  Box,
  PasswordInputProps,
} from '@mantine/core'
import { MdClear } from 'react-icons/md'
import { GetInputPropsPayload } from '@mantine/form/lib/types'
import { UseFormReturnType } from '@mantine/form/lib/use-form'

interface IStrongPassword extends PasswordInputProps {
  registerForm: UseFormReturnType<any>
}

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean
  label: string
}) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size='sm'
    >
      {meets ? <IoCheckmarkSharp /> : <MdClear />} <Box ml={10}>{label}</Box>
    </Text>
  )
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
]

function getStrength(password: string) {
  let multiplier = password.length >= 8 ? 0 : 1

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
}

export default function StrongPassword({
  icon,
  label,
  placeholder,
  registerForm,
}: IStrongPassword) {
  const [popoverOpened, setPopoverOpened] = useState(false)
  const { password: value } = registerForm.values
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ))

  const strength = getStrength(value)
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'

  return (
    <Popover
      opened={popoverOpened}
      position='bottom'
      placement='start'
      withArrow
      styles={{ popover: { width: '100%' } }}
      trapFocus={false}
      transition='pop-top-left'
      onFocusCapture={() => setPopoverOpened(true)}
      onBlurCapture={() => setPopoverOpened(false)}
      target={
        <PasswordInput
          label={label}
          placeholder={placeholder}
          icon={icon}
          {...registerForm.getInputProps('password')}
        />
      }
    >
      <Progress
        color={color}
        value={strength}
        size={5}
        style={{ marginBottom: 10 }}
      />
      <PasswordRequirement
        label='Includes at least 8 characters'
        meets={value.length >= 8}
      />
      {checks}
    </Popover>
  )
}
