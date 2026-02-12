import { ref } from 'vue'
import type { Word } from '@/types'
import { fetchWords } from '@/services/api'
import { fallbackWords } from '@/data/fallbackWords'

export function useWords() {
    const words = ref<Word[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)
    const isOffline = ref(false)

    async function loadWords() {
        loading.value = true
        error.value = null
        isOffline.value = false

        try {
            const data = await fetchWords()
            words.value = data
        } catch (e) {
            isOffline.value = true
            words.value = fallbackWords
        } finally {
            loading.value = false
        }
    }

    function clearError() {
        error.value = null
    }

    return {
        words,
        loading,
        error,
        isOffline,
        loadWords,
        clearError,
    }
}
