<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center gap-8 py-12">
    <div class="relative">
      <div
        class="h-12 w-12 rounded-full border-[3px] border-surface-600 border-t-pink-accent animate-spin"
      ></div>
      <div
        class="absolute inset-0 h-12 w-12 rounded-full border-[3px] border-transparent border-b-pink-light/30 animate-spin"
        style="animation-direction: reverse; animation-duration: 1.5s"
      ></div>
    </div>

    <p class="text-sm text-text-secondary">Buscando palavras...</p>

    <div class="w-full max-w-2xl space-y-4 px-4">
      <div
        v-for="i in 3"
        :key="i"
        class="rounded-2xl border border-surface-600/30 bg-surface-800 p-6"
      >
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-8 rounded-lg animate-shimmer"></div>
          <div class="h-6 w-32 rounded-lg animate-shimmer"></div>
        </div>
        <div class="space-y-2 pl-11">
          <div class="h-4 w-full rounded animate-shimmer"></div>
          <div class="h-4 w-3/4 rounded animate-shimmer"></div>
          <div class="mt-4 h-16 w-full rounded-lg animate-shimmer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
