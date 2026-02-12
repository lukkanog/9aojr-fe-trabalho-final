import { ref } from 'vue'
import type { Word } from '@/types'
import { fetchWords } from '@/services/api'

export function useWords() {
    const words = ref<Word[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function loadWords() {
        loading.value = true
        error.value = null

        try {
            const data = await fetchWords()
            words.value = data
        } catch (e) {
            const message =
                e instanceof Error
                    ? e.message
                    : 'Ocorreu um erro inesperado ao buscar as palavras.'
            error.value = message
            words.value = []
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
        loadWords,
        clearError,
    }
}
