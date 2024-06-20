import { removeValue } from '@/utils/removeValue'
import { setData } from '@/utils/setData'
import { Gear } from '@phosphor-icons/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover'
import { useRef, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import toast from 'react-hot-toast'

export const Config = ({ path }: { path: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    setData(path, password?.current?.value || '')
    setIsOpen(false)
    toast('Password added/changed', {
      icon: '🔒',
      duration: 2000,
    })
  }

  const handleRemovePassword = () => {
    removeValue(path)
    setIsOpen(false)
    toast('Password removed', {
      icon: '🔓',
      duration: 2000,
    })
  }

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <div
          onClick={() => setIsOpen(!isOpen)}
          // className="bg-gray-950"
          className="neumorphism grid h-10 w-10 cursor-pointer place-items-center rounded-xl transition-colors hover:bg-slate-600/10"
        >
          <Gear className="dark:text-white" size={'1.6rem'} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mr-6 w-52 rounded-lg bg-slate-600/10 px-4 py-6">
        <label
          className="text-text-white dark:text-text-black text-md w-20"
          htmlFor="title"
        >
          Add/change password
        </label>
        <Input
          // className="neumorphism dark:bg-secondary-color mt-2 w-full rounded-lg px-4 py-2 outline-none dark:text-white"
          className="mt-4 dark:border-white/40"
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
        <Button
          onClick={handleRemovePassword}
          variant="destructive"
          className="mt-3 w-full"
        >
          <span className="text-sm font-medium text-white">
            Remove password
          </span>
        </Button>
      </PopoverContent>
    </Popover>
  )
}
