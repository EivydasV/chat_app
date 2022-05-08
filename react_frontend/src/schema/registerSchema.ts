import * as z from 'zod'

export const registerSchema = z
  .object({
    name: z.string().min(2).max(20),
    email: z.string().email().max(30),
    password: z
      .string()
      .min(8)
      .max(30)
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
      })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      }),
    password_confirmation: z.string().min(1),
  })
  .refine((inputs) => inputs.password === inputs.password_confirmation, {
    path: ['password_confirmation'],
    message: 'Password and password confirmation must match',
  })
