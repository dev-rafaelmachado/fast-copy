'use client'

import toast from 'react-hot-toast'
import { Copy, Trash } from '@phosphor-icons/react'
import {
  Card as CardComponent,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from './ui/button'
interface CardProps {
  title: string
  content: string
  handleRemove: () => void
}

export const Card = ({ title, content, handleRemove }: CardProps) => {
  const handleCopy = (text: string) => {
    if (!navigator.clipboard || !window.isSecureContext)
      return toast('Clipboard not available', {
        icon: '🚫',
        duration: 2000,
      })
    navigator.clipboard.writeText(text)
    toast('Texto copiado', {
      duration: 2000,
      icon: '📋',
    })
  }

  return (
    <CardComponent className="w-80 rounded-lg border-none bg-white px-4 py-2 dark:bg-zinc-900 dark:text-white">
      <CardHeader>
        <CardTitle
          className="cursor-pointer text-2xl font-bold"
          onClick={() => handleCopy(content)}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent
        className="max-h-40 min-w-64 max-w-sm overflow-scroll text-sm text-gray-500"
        // onClick={() => handleCopy(content)}
      >
        {content}
      </CardContent>
      <CardFooter className="mt-4 flex flex-col justify-between gap-2">
        <Button
          variant="secondary"
          className="w-full  border-none dark:bg-zinc-950"
          onClick={() => handleCopy(content)}
        >
          <Copy className="mr-2 h-4 w-4" /> Copy
        </Button>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => handleRemove()}
        >
          <Trash className="mr-2 h-4 w-4" /> Remove
        </Button>
      </CardFooter>
    </CardComponent>
  )
}
