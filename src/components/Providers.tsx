'use client'

import { UserContextProvider } from '@/context/UserContext'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </SessionProvider>
  )
}
