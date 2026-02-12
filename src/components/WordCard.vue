<script setup lang="ts">
import type { Word } from '@/types'

defineProps<{
  word: Word
  index: number
}>()
</script>

<template>
  <article
    class="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-surface-600/50 bg-surface-800 p-5 transition-all duration-300 hover:border-pink-accent/40 hover:shadow-lg hover:shadow-pink-accent/10 sm:p-6"
    :style="{ animationDelay: `${index * 100}ms` }"
  >
    <div
      class="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-pink-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    ></div>

    <div class="mb-4 flex items-start gap-3">
      <span
        class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-accent/10 text-sm font-bold text-pink-accent"
      >
        {{ index + 1 }}
      </span>
      <h2
        class="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-pink-light sm:text-2xl"
      >
        {{ word.word }}
      </h2>
    </div>

    <div class="mb-4 pl-11">
      <div class="mb-1.5 flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-3.5 w-3.5 text-pink-accent/70"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">
          Descrição
        </span>
      </div>
      <p class="text-sm leading-relaxed text-text-secondary sm:text-base">
        {{ word.description }}
      </p>
    </div>

    <div class="pl-11">
      <div class="mb-1.5 flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-3.5 w-3.5 text-pink-accent/70"
        >
          <path
            fill-rule="evenodd"
            d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">
          Exemplo de uso
        </span>
      </div>
      <div
        class="rounded-lg border border-surface-600/40 bg-surface-700/50 px-4 py-3"
      >
        <p class="text-sm italic leading-relaxed text-pink-light/90 sm:text-base">
          "{{ word.useCase }}"
        </p>
      </div>
    </div>
  </article>
</template>
