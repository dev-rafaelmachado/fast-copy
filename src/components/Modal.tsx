import { useRef } from 'react'
import { X } from '@phosphor-icons/react'

import useSetValue from '@/hooks/useSetValue'
import { CardType } from '@/types/Cards'

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
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div
            onClick={handleClose}
            className="fixed inset-0 z-20 bg-black/30 backdrop-blur"
          ></div>
          <div className="relative z-30 w-5/6 rounded-lg bg-white p-6 shadow-lg dark:bg-primary-color lg:w-2/5">
            <h1 className="text-2xl font-medium text-text-white dark:text-text-black">
              Adicionar um novo elemento
            </h1>
            <p className="text-lg font-light text-text-white/75 dark:text-text-black/75">
              Preencha os dados
            </p>
            <div className="mt-8 flex w-full flex-col items-start justify-end gap-4 lg:pl-12 lg:pr-4">
              <div className="flex w-full flex-col items-start justify-end gap-4 lg:flex-row lg:items-center">
                <label
                  className="w-20 text-xl text-text-white dark:text-text-black"
                  htmlFor="title"
                >
                  Título:
                </label>
                <input
                  className="neumorphism w-full rounded-lg px-4 py-2 outline-none dark:bg-secondary-color dark:text-white"
                  type="text"
                  name="title"
                  id="title"
                  ref={title}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-end gap-4 lg:flex-row">
                <label
                  className="w-20 text-xl text-text-white dark:text-text-black"
                  htmlFor="content"
                >
                  Texto:
                </label>
                <textarea
                  className="neumorphism w-full resize-none rounded-lg px-4 py-2 outline-none dark:bg-secondary-color dark:text-white"
                  name="content"
                  ref={content}
                  rows={5}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end lg:px-4">
              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className="neumorphism w-full resize-none rounded-lg px-8 py-2 outline-none dark:bg-secondary-color dark:text-white lg:w-min"
              >
                Salvar
              </button>
            </div>
            <X
              onClick={handleClose}
              size={'1.6rem'}
              className="absolute right-6 top-6 cursor-pointer text-text-white dark:text-text-black"
            />
          </div>
        </div>
      )}
    </>
  )
}
