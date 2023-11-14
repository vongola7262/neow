<template>
  <div>
    <button @click="toggleDark()">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
      <p class="ml-2 font-display">{{ isDark ? 'Dark' : '喵立名' }}</p>
    </button>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
