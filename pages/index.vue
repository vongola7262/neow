<template>
  <layoutHeader />
  <main class="bg-white">
    <section class="min-h-screen bg-[#FFCC70] rounded-br-bannerlg flex items-end">
      <div class="w-11/12 relative h-full mx-auto">
        <div class="flex h-full -mx-4 flex-wrap">
          <div class="w-5/12 flex-none px-4 flex justify-items-start items-end relative">
            <div class="absolute -right-[5%] top-0">
              <nuxt-img src="number.png" height="328" densities="x2" alt="1號" />
            </div>
            <div class="relative z-2">
              <nuxt-img src="banner.png" height="640" densities="x2" alt="喵立翰"/>
            </div>
          </div>
          <div class="w-7/12 flex-none px-4 flex items-center flex-col">
            <div class="pt-[20px]">
              <nuxt-img src="bannerLogo.png" height="125" densities="x2" alt="1號" class="mx-auto" />
            </div>
            <h3 class="font-display text-[#8E806A] text-5xl text-center my-[30px]">Miao Li-Han</h3>
            <h2 class="text-[#666666] text-[140px] font-display leading-none">台灣的明天<br>喵先鋪路</h2>
            <h3 class="font-display text-5xl text-white mb-[102px] mt-[60px]">2023 The F2E 立委候選人</h3>

          </div>
        </div>
        <div class="absolute rotate-12 bottom-[182px] right-0">
          <nuxt-img src="bannerDc.png" height="125" densities="x2" alt="喵立翰"/>
        </div>
      </div>
    </section>
    <section class="py-[300px]">
      <div class="container mx-auto">
        <div class="max-w-[1200px] mx-auto mb-[100px] w-full">
          <h3 class="text-5xl text-[#404040] font-bold">
            我堅信，藉由推動更完善的貓咪福利和相關政策，<br>更是間接地投資於台灣的未來。
          </h3>
        </div>
        <h3 class="text-[28px] text-[#404040] font-bold max-w-[1200px] mx-auto w-full tracking-[2.8px]">
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br><br>因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。<br><br>讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </h3>
      </div>
    </section>
  </main>
  <layoutFooter />
</template>

<script setup>
</script>
