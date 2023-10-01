import { User } from '@/types/User'
import { useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import React, { ReactNode, createContext, useEffect } from 'react'

type UserContextType = {
  user: User | null
}

const UserContext = createContext<UserContextType>({
  user: null,
})

type UserContextProviderProps = {
  children: ReactNode
}

function UserContextProvider({ children }: UserContextProviderProps) {
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  const user: User | null = session
    ? {
        name: session?.user?.name ?? '',
        email: session?.user?.email ?? '',
        profileImgUrl: session?.user?.image ?? '',
      }
    : null

  useEffect(() => {
    if (user && pathname === '/') {
      router.push('/dashboard')
    } else if (!user && pathname === '/dashboard') {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export { UserContextProvider, UserContext }
