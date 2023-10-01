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
      className="h-screen w-screen bg-white px-6 py-8 transition-colors dark:bg-primary-color lg:px-28 lg:py-20"
    >
      <CaretLeft
        onClick={handleReturn}
        size={32}
        className="absolute top-9 cursor-pointer dark:text-text-black lg:top-20"
      />
      {isLogged && (
        <div className="absolute right-5 top-5">
          <Config path={`rooms/${code}/password`} />
        </div>
      )}
      <p className="w-full text-center text-4xl text-text-white dark:text-text-black">
        <span className="font-bold">Sala: </span>
        <span className="font-light">{code}</span>
      </p>
      <section
        suppressHydrationWarning
        className="no-scrollbar lg:scrollbar mt-4 flex h-3/4 w-full flex-wrap items-center justify-center gap-8 overflow-auto p-4 lg:h-5/6"
      >
        {!isLogged && (
          <div className="mt-8 flex w-full items-center justify-center text-text-white dark:text-text-black">
            <input
              className="neumorphism w-52 rounded-lg px-4 py-2 outline-none dark:bg-secondary-color"
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
          <div className="mt-8 flex w-full items-center justify-center text-text-white dark:text-text-black">
            <button
              onClick={() => setIsOpen(true)}
              className="neumorphism flex w-52 items-center justify-center gap-2 rounded-lg px-4 py-2 dark:bg-secondary-color"
            >
              <Plus size={'1.6rem'} />
              <span className=" text-xl font-medium">Adicionar</span>
            </button>
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
