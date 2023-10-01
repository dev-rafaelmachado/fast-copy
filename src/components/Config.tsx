import { removeValue } from '@/utils/removeValue'
import { setData } from '@/utils/setData'
import { Gear } from '@phosphor-icons/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover'
import { useRef, useState } from 'react'

export const Config = ({ path }: { path: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    setData(path, password?.current?.value || '')
    setIsOpen(false)
  }

  const handleRemovePassword = () => {
    removeValue(path)
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="neumorphism grid h-10 w-10 cursor-pointer place-items-center rounded-xl transition-colors hover:bg-slate-600/10"
        >
          <Gear className="dark:text-white" size={'1.6rem'} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="neumorphism mr-6 mt-2 w-60 rounded-lg border-none p-4 outline-none outline dark:bg-secondary-color">
        <label
          className="w-20 text-lg text-text-white dark:text-text-black"
          htmlFor="title"
        >
          Adicionar/alterar Senha
        </label>
        <input
          className="neumorphism mt-2 w-full rounded-lg px-4 py-2 outline-none dark:bg-secondary-color dark:text-white"
          type="text"
          name="title"
          id="title"
          placeholder="Senha"
          ref={password}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
        />
        <button
          onClick={handleRemovePassword}
          className="neumorphism mt-4 flex w-52 items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2 dark:bg-red-600 dark:text-white"
        >
          <span className="text-xl font-medium text-white">Remover Senha</span>
        </button>
      </PopoverContent>
    </Popover>
  )
}
