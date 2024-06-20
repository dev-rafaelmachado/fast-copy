'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Separator } from '@/components/ui/Separator'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

export default function Home() {
  const router = useRouter()

  return (
    <main className="grid h-screen w-screen place-items-center bg-slate-100 transition-colors dark:bg-zinc-950">
      <div className="flex w-fit flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn('google')}
          className="neumorphism dark:bg-secondary-color flex h-8 items-center justify-center gap-2  rounded-lg px-6 py-5 font-medium transition-colors hover:bg-zinc-300/30"
        >
          <Image src={'/google.png'} alt="Google logo" width={24} height={24} />
          <span className="dark:text-white">Sign in with Google</span>
        </button>

        <div className="flex gap-1">
          <Separator className="mt-[14px] h-[1px] w-24 bg-black dark:bg-white" />
          <span className="dark:text-white">or</span>
          <Separator className="mt-[14px] h-[1px] w-24 bg-black dark:bg-white" />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-center" htmlFor="code">
            Enter a code
          </Label>
          <Input
            id="code"
            className="w-52 bg-zinc-50 px-4 dark:border-white/40 dark:bg-zinc-800 dark:text-white dark:placeholder:text-white/40"
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
