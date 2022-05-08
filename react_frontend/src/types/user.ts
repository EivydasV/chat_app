enum Role {
  USER = 'user',
  ADMIN = 'admin',
}
export interface IUser {
  data?: {
    user?: {
      _id: string
      name: string
      email: string
      roles: Role[]
      createdAt: Date
      updatedAt: Date
    }
  }
}
