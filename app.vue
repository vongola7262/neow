<!-- <template>
  <div>
    <button @click="toggleDark()">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
      <p class="ml-2 font-display">{{ isDark ? 'Dark' : '喵立名' }}</p>
    </button>
    <NuxtWelcome />
  </div>
</template> -->
<template>
  <NuxtPage />
</template>

<!-- <script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script> -->
<script setup>
useHeadSafe({
  htmlAttrs: {
    lang: 'zh-Hant-TW'
  }
})
useSeoMeta({
    title: '首頁',
    keywords: 'Nuxt 3 ProductList',
    description: 'Nuxt 3 Blog',
    ogTitle: 'Nuxt 3 Blog',
    ogDescription: 'Nuxt 3 Blog',
    ogImage: ''
});
</script>
