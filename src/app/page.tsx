'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { Separator } from '@/components/ui/Separator'

export default function Home() {
  const router = useRouter()

  return (
    <main className="grid h-screen w-screen place-items-center bg-white transition-colors dark:bg-primary-color">
      <div className="flex w-fit flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn('google')}
          className="neumorphism flex h-8 items-center justify-center gap-2 rounded-lg  px-6 py-5 font-medium transition-colors hover:bg-zinc-300/30 dark:bg-secondary-color"
        >
          <Image src={'/google.png'} alt="Google logo" width={24} height={24} />
          <span className="dark:text-white">Continuar com Google</span>
        </button>

        <div className="flex gap-1">
          <Separator className="mt-[14px] h-[1px] w-24 bg-black dark:bg-white" />
          <span className="dark:text-white">ou</span>
          <Separator className="mt-[14px] h-[1px] w-24 bg-black dark:bg-white" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="px-6 text-center dark:text-white">
            Entre com um código
          </span>
          <input
            className="neumorphism outline-non w-60  rounded-lg px-4 py-2 outline-none dark:bg-secondary-color dark:text-white"
            type="text"
            placeholder="Ex.: 1234"
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return
              router.push(`/app/${e.currentTarget.value}`)
            }}
          />
        </div>
      </div>
    </main>
  )
}
