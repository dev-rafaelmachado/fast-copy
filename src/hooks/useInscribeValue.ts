import { useState, useEffect } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../services/firebase'

function useInscribeValue<T>(path: string, password?: string | null) {
  const [state, setState] = useState<T | null>(null)
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const IRef = ref(db, `${path}/password`)
    onValue(IRef, (snapshot) => {
      const data = snapshot.val() as string
      if (!data) setIsLogged(true)
      else if (data === password) setIsLogged(true)
    })
  }, [path, password])

  useEffect(() => {
    if (isLogged) {
      const IRef = ref(db, `${path}/cards`)
      onValue(IRef, (snapshot) => {
        const data = snapshot.val() as T
        setState(data)
      })
    }
  }, [path, isLogged])

  return { isLogged, state }
}

export default useInscribeValue
