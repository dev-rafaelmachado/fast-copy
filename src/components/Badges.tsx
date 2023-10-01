'use client'
import { GithubLogo, Moon, Sun } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

export const Badges = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  // Efeito para carregar o tema salvo no localStorage quando o componente for montado
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  return (
    <div className="absolute bottom-4 flex w-screen flex-row justify-center gap-4 px-4 lg:justify-end">
      <div className="neumorphism grid h-10 w-10 cursor-pointer place-items-center rounded-xl transition-colors hover:bg-slate-600/10">
        <GithubLogo className="dark:text-white" size={'1.6rem'} />
      </div>
      <div
        onClick={toggleTheme}
        className="neumorphism grid h-10 w-10 cursor-pointer place-items-center rounded-xl transition-colors hover:bg-slate-600/10"
      >
        {theme === 'light' ? (
          <Moon size={'1.6rem'} />
        ) : (
          <Sun color="#fff" size={'1.6rem'} />
        )}
      </div>
    </div>
  )
}
