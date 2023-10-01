import { ref, remove } from 'firebase/database'
import { db } from '../services/firebase'

export const removeValue = async (path: string) => {
  const cardsRef = ref(db, path)
  await remove(cardsRef)
}
