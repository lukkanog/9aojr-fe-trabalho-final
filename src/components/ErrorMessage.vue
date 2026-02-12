<script setup lang="ts">
defineProps<{
  message: string
}>()

const emit = defineEmits<{
  retry: []
}>()
</script>

<template>
  <div
    class="animate-fade-in-up mx-auto max-w-lg rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center sm:p-8"
  >
    <div
      class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-7 w-7 text-red-400"
      >
        <path
          fill-rule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <h3 class="mb-2 text-lg font-semibold text-red-300">
      Ops! Algo deu errado
    </h3>

    <p class="mb-6 text-sm leading-relaxed text-text-secondary">
      {{ message }}
    </p>

    <button
      id="retry-button"
      class="inline-flex items-center gap-2 rounded-xl border border-pink-accent/30 bg-pink-accent/10 px-5 py-2.5 text-sm font-semibold text-pink-light transition-all duration-200 hover:border-pink-accent/60 hover:bg-pink-accent/20 hover:shadow-lg hover:shadow-pink-accent/10 active:scale-95"
      @click="emit('retry')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-4 w-4"
      >
        <path
          fill-rule="evenodd"
          d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.034l.308.308A7 7 0 0016.752 11a.75.75 0 00-1.44-.424zM4.688 8.576a5.5 5.5 0 019.201-2.466l.312.311H11.77a.75.75 0 000 1.5h3.634a.75.75 0 00.75-.75V3.537a.75.75 0 00-1.5 0v2.034l-.308-.308A7 7 0 003.248 9a.75.75 0 001.44.424z"
          clip-rule="evenodd"
        />
      </svg>
      Tentar novamente
    </button>
  </div>
</template>
