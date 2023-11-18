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
    title: '喵立翰 - 立委候選人',
    keywords: '立委 喵立翰 喵的明天 2023 F2E',
    description: '台灣的明天喵先鋪路，2023 The F2E 立委候選人',
    ogTitle: '立委候選人-喵立翰',
    ogDescription: '立委 喵立翰 喵的明天 2023 F2E',
    ogImage: ''
});
</script>
