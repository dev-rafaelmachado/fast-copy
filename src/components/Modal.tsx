import { useRef } from 'react'
import { X } from '@phosphor-icons/react'

import useSetValue from '@/hooks/useSetValue'
import { CardType } from '@/types/Cards'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

interface ModalProps {
  isOpen: boolean
  handleClose: () => void
  path: string
}

export const Modal = ({ isOpen, handleClose, path }: ModalProps) => {
  const { isLoading, setValue: setNewValue } = useSetValue<CardType>(
    path as string,
  )
  const title = useRef<HTMLInputElement>(null)
  const content = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = () => {
    setNewValue({
      title: title?.current?.value || 'Sem título',
      content: content?.current?.value || 'Sem conteúdo',
    })
    handleClose()
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center border-none">
          <div
            onClick={handleClose}
            className="fixed inset-0 z-20 bg-black/30 backdrop-blur"
          ></div>
          <Card className="z-30 w-[350px] border-none dark:bg-zinc-900">
            <CardHeader>
              <CardTitle>Create Item</CardTitle>
              <CardDescription>
                Fill the fields below to create a new item.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Title</Label>
                    <Input
                      className="dark:border-white/40"
                      id="name"
                      placeholder="Enter the title"
                      ref={title}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Content</Label>
                    <Textarea
                      placeholder="Type your message here."
                      ref={content}
                      className="h-32 dark:border-white/40"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                onClick={handleClose}
                variant="outline"
                className="border-none bg-zinc-50 px-4 dark:bg-zinc-800 dark:text-white"
              >
                Cancel
              </Button>
              <Button disabled={isLoading} onClick={handleSubmit}>
                Save
              </Button>
            </CardFooter>
            <X
              onClick={handleClose}
              size={'1.6rem'}
              className="text-text-white dark:text-text-black absolute right-6 top-6 cursor-pointer"
            />
          </Card>
        </div>
      )}
    </>
  )
}
