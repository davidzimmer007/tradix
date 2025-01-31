import bcrypt from 'bcryptjs'
import type { RegisterForm } from './types.server'
import { prisma } from './prisma.server'


export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10)
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      
        
      
    },
  })
  return { id: newUser.id, email: user.email }
}




export const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: +userId,
    },
    
  })
}


export const updateUser = async (userId: string, profile: Partial<Profile>) => {
  await prisma.user.update({
    where: {
      id: +userId,
    },
    data: {
      profile: {
        update: profile,
      },
    },
  });
};

export const deleteUser = async (userId: string) => {
  await prisma.user.delete({ where: { id: +userId } });
};