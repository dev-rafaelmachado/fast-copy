import { useState } from 'react'
import { push, ref, set } from 'firebase/database'
import { db } from '../services/firebase'

interface IUseSetValue<T> {
  isLoading: boolean
  setValue: (value: T) => Promise<void>
}

function useInscribeValue<T>(path: string): IUseSetValue<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const setValue = async (value: T) => {
    setIsLoading(true)
    const cardsRef = ref(db, path)
    const newCardsRef = push(cardsRef)
    await set(newCardsRef, value)
    setIsLoading(false)
  }

  return { isLoading, setValue }
}

export default useInscribeValue
