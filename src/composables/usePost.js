import { ref } from 'vue'
import { projectFirestore } from '../firebase/config' 

const useDocument = (collection, id) => {
    const error = ref(null)
    const isPending = ref(false)

    let docRef = projectFirestore.collection(collection).doc(id)

    const updateDoc = async (updates) => {
      error.value = null

      try {
      const res = await docRef.update(updates)
      return res

      } catch(err) {
          console.log(err.message)
          error.value = 'Omo this document stubborn oooo, e no wan update'
      }
  }

    // const deleteDoc = async () => {
    //     isPending.value = true
    //     error.value = null

    //     try {
    //     const res = await docRef.delete()
    //     isPending.value = false

    //     } catch(err) {
    //         console.log(err.message)
    //         isPending.value = false
    //         error.value = 'Omo this document stubborn oooo, e no wan delete'
    //     }
    // }


    return {error, isPending, updateDoc, updateDoc}
}

export default useDocument