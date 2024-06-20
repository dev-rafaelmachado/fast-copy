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
import { Button } from '@/components/ui/button'

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
    <main className="h-screen w-screen bg-slate-100 px-6 py-8 transition-colors dark:bg-zinc-950 lg:px-28 lg:py-20">
      <p className="text-text-white dark:text-text-black w-full text-center text-4xl">
        <span className="font-bold">Hello </span>
        <span className="font-light">{getFirstName(name)}</span>
      </p>
      <section className="mt-4 flex h-3/4 w-full flex-wrap items-start justify-start gap-8 overflow-auto p-4 lg:h-5/6">
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
      <div className="text-text-white dark:text-text-black mt-8 flex w-full items-center justify-center">
        <Button
          variant="outline"
          onClick={() => setIsOpen(true)}
          className="flex gap-2 border-none bg-white px-12 py-3 dark:bg-zinc-900 dark:hover:bg-zinc-950"
        >
          <Plus size={'1.6rem'} />
          <span className=" text-xl font-medium">Add</span>
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        path={`profiles/${token}/cards`}
      />
      <a
        onClick={handleExit}
        className="text-text-white dark:text-text-black absolute bottom-4 left-4 z-10 cursor-pointer select-none text-lg font-bold hover:underline"
      >
        Exit
      </a>
    </main>
  )
}
