import { db } from '@/services/firebase'
import { set, ref } from 'firebase/database'

export const setData = (path: string, value: unknown) => {
  set(ref(db, path), value)
}
