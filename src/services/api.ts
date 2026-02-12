import type { Word, ApiError } from '@/types'

const API_URL = 'https://fiap-bff-9aojr.onrender.com/ask'

export async function fetchWords(): Promise<Word[]> {
    const response = await fetch(API_URL)

    if (!response.ok) {
        try {
            const errorData: ApiError = await response.json()
            throw new Error(errorData.error || `Erro HTTP ${response.status}`)
        } catch (e) {
            if (e instanceof Error && e.message !== `Erro HTTP ${response.status}`) {
                throw e
            }
            throw new Error(`Erro ao buscar palavras (HTTP ${response.status})`)
        }
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
        throw new Error('Resposta inesperada da API')
    }

    return data as Word[]
}
