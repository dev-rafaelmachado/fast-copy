'use client'

import { useState } from 'react'
import { CaretLeft, Plus } from '@phosphor-icons/react'
import { useParams, useRouter } from 'next/navigation'

import useInscribeValue from '@/hooks/useInscribeValue'
import { removeValue } from '@/utils/removeValue'
import { CardsType } from '@/types/Cards'
import { Card } from '@/components/Card'
import { Modal } from '@/components/Modal'
import { Config } from '@/components/Config'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function App() {
  const router = useRouter()
  const { code } = useParams()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [password, setPassword] = useState<string | null>(null)

  const { state: listCards, isLogged } = useInscribeValue<CardsType>(
    `rooms/${code}`,
    password,
  )
  const handleReturn = () => {
    router.push('/')
  }

  return (
    <main
      suppressHydrationWarning
      className="h-screen w-screen bg-slate-100 px-6 py-8 transition-colors dark:bg-zinc-950 lg:px-28 lg:py-20"
    >
      <CaretLeft
        onClick={handleReturn}
        size={32}
        className="dark:text-text-black absolute top-9 cursor-pointer lg:top-20"
      />
      {isLogged && (
        <div className="absolute right-5 top-5">
          <Config path={`rooms/${code}/password`} />
        </div>
      )}
      <p className="text-text-white dark:text-text-black w-full text-center text-4xl">
        <span className="font-bold">Room: </span>
        <span className="font-light">{code}</span>
      </p>
      <section
        suppressHydrationWarning
        className="no-scrollbar lg:scrollbar mt-4 flex h-3/4 w-full flex-wrap items-center justify-center gap-8 overflow-auto p-4 lg:h-5/6"
      >
        {!isLogged && (
          <div className="text-text-white dark:text-text-black mt-8 flex w-full items-center justify-center">
            <Input
              // className="neumorphism dark:bg-secondary-color w-52 rounded-lg px-4 py-2 outline-none"
              className="w-52 dark:border-white/40"
              type="password"
              placeholder="Senha"
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
        )}
        {listCards &&
          isLogged &&
          Object.keys(listCards).map((key) => {
            return (
              <Card
                key={key}
                title={listCards[key].title}
                content={listCards[key].content}
                handleRemove={() => removeValue(`rooms/${code}/cards/${key}`)}
              />
            )
          })}
      </section>
      {isLogged && (
        <div suppressHydrationWarning>
          <div className="text-text-white dark:text-text-black mt-4 flex w-full items-center justify-center lg:mt-8">
            <Button
              variant="outline"
              onClick={() => setIsOpen(true)}
              className="flex gap-2 border-none bg-white px-12 py-3 dark:bg-zinc-900 dark:hover:bg-zinc-950"
            >
              <Plus size={'1.2rem'} />
              <span className=" text-xl font-medium">Add</span>
            </Button>
          </div>

          <Modal
            isOpen={isOpen}
            handleClose={() => setIsOpen(false)}
            path={`rooms/${code}/cards`}
          />
        </div>
      )}
    </main>
  )
}
