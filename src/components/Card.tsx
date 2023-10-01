'use client'

import toast from 'react-hot-toast'
import { Copy, Trash } from '@phosphor-icons/react'

interface CardProps {
  title: string
  content: string
  handleRemove: () => void
}

export const Card = ({ title, content, handleRemove }: CardProps) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast('Texto copiado', {
      duration: 2000,
      icon: '📋',
    })
  }

  return (
    <div className="neumorphism-light flex h-64 w-64 flex-col gap-2 rounded-lg p-8 dark:bg-secondary-color dark:text-white">
      <header className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-2">
          <div
            onClick={() => handleCopy(content)}
            className="cursor-pointer rounded-lg p-1 transition-colors hover:bg-zinc-400/20"
          >
            <Copy size={'1.6rem'} />
          </div>
          <div
            onClick={() => handleRemove()}
            className="cursor-pointer rounded-lg p-1 transition-colors hover:bg-zinc-400/20"
          >
            <Trash size={'1.6rem'} />
          </div>
        </div>
      </header>
      <p className="no-scrollbar lg:scrollbar h-full w-full overflow-y-auto text-zinc-600 dark:text-zinc-400">
        {content}
      </p>
    </div>
  )
}
