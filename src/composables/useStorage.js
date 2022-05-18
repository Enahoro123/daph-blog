import { ref } from 'vue'
import { projectStorage } from '../firebase/config'
import getUser from './getUser'

// getting the user
const { user } = getUser()

const useStorage = () => {
    const error = ref(null)
    const url   = ref(null)
    const filePath = ref(null)

    const uploadImage = async (file) => {
        // file path for where the file is to be save
        filePath.value = `covers/${user.value.uid}/${file.name}`
        // storage reference
        const storageRef = projectStorage.ref(filePath.value)

        try {
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
        } catch(err) {
            console.log(err.message)
            error.value = err.message
        }

    }

    return { url, filePath, error, uploadImage }
}

export default useStorage