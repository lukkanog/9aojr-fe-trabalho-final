<script setup lang="ts">
import { onMounted } from 'vue'
import { useWords } from '@/composables/useWords'
import WordCard from '@/components/WordCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const { words, loading, error, loadWords } = useWords()

onMounted(() => {
  loadWords()
})
</script>

<template>
  <main class="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
    <div class="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-lg font-bold text-white sm:text-xl">
          Vocabulário do dia
        </h2>
        <p class="mt-1 text-sm text-text-secondary">
          Explore novas palavras e expanda seu vocabulário
        </p>
      </div>

      <button
        id="fetch-words-button"
        :disabled="loading"
        class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-accent to-pink-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-accent/20 transition-all duration-200 hover:shadow-xl hover:shadow-pink-accent/30 hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-lg disabled:hover:brightness-100 sm:px-8"
        @click="loadWords"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-4 w-4"
          :class="{ 'animate-spin': loading }"
        >
          <path
            fill-rule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.034l.308.308A7 7 0 0016.752 11a.75.75 0 00-1.44-.424zM4.688 8.576a5.5 5.5 0 019.201-2.466l.312.311H11.77a.75.75 0 000 1.5h3.634a.75.75 0 00.75-.75V3.537a.75.75 0 00-1.5 0v2.034l-.308-.308A7 7 0 003.248 9a.75.75 0 001.44.424z"
            clip-rule="evenodd"
          />
        </svg>
        {{ loading ? 'Buscando...' : 'Buscar novas palavras' }}
      </button>
    </div>

    <LoadingSpinner v-if="loading" />

    <ErrorMessage
      v-else-if="error"
      :message="error"
      @retry="loadWords"
    />

    <div
      v-else-if="words.length === 0"
      class="animate-fade-in-up py-16 text-center"
    >
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-700/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-8 w-8 text-text-muted"
        >
          <path
            d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"
          />
        </svg>
      </div>
      <p class="text-text-secondary">
        Clique em <strong class="text-pink-light">"Buscar novas palavras"</strong> para começar
      </p>
    </div>

    <div v-else class="space-y-4 sm:space-y-6">
      <WordCard
        v-for="(word, index) in words"
        :key="`${word.word}-${index}`"
        :word="word"
        :index="index"
      />
    </div>

    <div
      v-if="words.length > 0 && !loading"
      class="mt-8 text-center"
    >
      <p class="text-xs text-text-muted">
        {{ words.length }} {{ words.length === 1 ? 'palavra encontrada' : 'palavras encontradas' }}
      </p>
    </div>
  </main>
</template>
