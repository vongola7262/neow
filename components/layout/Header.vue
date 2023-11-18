<template>
  <header class="flex justify-center shadow-lg fixed top-0 left-0 w-full bg-white z-50">
    <nav class="flex justify-between py-5 w-11/12">
      <h1>
        <nuxt-img src="Logo.png" height="55" densities="x2 x1" alt="喵立翰" />
      </h1>
      <ul class="flex items-center">
        <li v-for="(item,index) in items" :key="index" class="mx-5">
          <a href="#">
            <p class="text-[#8E806A] text-xl font-bold">{{ item.name }}</p>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  const items = reactive([
    {
      name: '最新活動'
    },
    {
      name: '三大政策'
    },
    {
      name: '小額捐款'
    },
    {
      name: '服務信箱'
    }
  ])
</script>