<template>
  <footer class="bg-[#8E806A] py-[80px]">
    <div class="container mx-auto max-w-[786px]">
      <div>
        <nuxt-img src="footerLogo.png" height="55" densities="x2 x1" alt="喵立翰" class="mx-auto"/>
      </div>
      <ul class="grid grid-cols-2 gap-4 my-[30px] sm:grid-cols-4 sm:my-[52px]">
        <li v-for="(item,index) in items" :key="index" class="px-5 flex-1 border-r-2 last:border-0">
          <a href="#" class="btn-primary">
            <p class="text-white text-xl font-bold text-center">{{ item.name }}</p>
          </a>
        </li>
      </ul>
      <div class="max-w-[542px] mx-auto text-xl text-white tracking-[2px] mb-[52px]">
        <p>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</p>
        <p>電話：(02) 888-5678</p>
        <div class="flex">
          <p>電子郵件地址：</p>
          <a href="mailto:meowoffice@linmeow.tw">meowoffice@linmeow.tw</a>
        </div>
      </div>
      <p class="text-xl text-[#CCC] text-center font-bold">
        © 2023 [喵立翰] 版權所有。
      </p>
    </div>
  </footer>
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
