'use client'

import { useContext, useState } from 'react'
import { Plus } from '@phosphor-icons/react'
import { signOut } from 'next-auth/react'

import { UserContext } from '@/context/UserContext'
import useInscribeValue from '@/hooks/useInscribeValue'
import { removeValue } from '@/utils/removeValue'
import { CardsType } from '@/types/Cards'
import { Card } from '@/components/Card'
import { Modal } from '@/components/Modal'

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { user } = useContext(UserContext)

  const name = user?.name ?? ''
  const email = user?.email ?? ''
  const token = `${email.replace(/[.#$[\]]/g, '')}-${
    email &&
    email
      .split('')
      .reduce((soma: number, char: string) => soma + char.charCodeAt(0), 0)
  }`

  const { state: listCards } = useInscribeValue<CardsType>(`profiles/${token}/`)

  const getFirstName = (name: string) => {
    return name.split(' ')[0]
  }

  const handleExit = () => {
    signOut()
  }

  return (
    <main className="h-screen w-screen bg-white px-6 py-8 transition-colors dark:bg-primary-color lg:px-28 lg:py-20">
      <p className="w-full text-center text-4xl text-text-white dark:text-text-black">
        <span className="font-bold">Olá </span>
        <span className="font-light">{getFirstName(name)}</span>
      </p>
      <section className="no-scrollbar lg:scrollbar mt-4 flex h-3/4 w-full flex-wrap items-center justify-center gap-8 overflow-auto p-4 lg:h-5/6">
        {listCards && Object.keys(listCards).length > 0 ? (
          Object.keys(listCards).map((key) => {
            return (
              <Card
                key={key}
                title={listCards[key].title}
                content={listCards[key].content}
                handleRemove={() =>
                  removeValue(`profiles/${token}/cards/${key}`)
                }
              />
            )
          })
        ) : (
          <></>
        )}
      </section>
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
        path={`profiles/${token}/cards`}
      />
      <a
        onClick={handleExit}
        className="absolute bottom-4 left-4 z-10 cursor-pointer select-none text-lg font-bold text-text-white hover:underline dark:text-text-black"
      >
        Sair
      </a>
    </main>
  )
}
