<template>
  <header
    class="flex justify-center shadow-lg fixed top-0 left-0 w-full bg-white z-50"
  >
    <nav class="flex justify-between py-5 w-[90%] items-center">
      <h1>
        <nuxt-img src="Logo.png" height="55" densities="x2 x1" alt="喵立翰" />
      </h1>
      <div
        class="
          flex 
          fixed
          top-0
          right-0
          w-full 
          h-0
          sm:relative
          sm:w-auto
          sm:h-auto
          sm:before:hidden
          before:block
          before:-z-50
          before:h-screen
          before:w-full
          before:backdrop-blur-sm
          before:duration-300
          before:opacity-0
          before:pointer-events-none
        "
        :class="{'before:opacity-100': menuState, 'before:pointer-events-auto': menuState}"
      >
        <ul class="
            flex 
            flex-col 
            items-center 
            absolute
            top-0
            -right-[40%]
            h-screen
            w-2/5
            bg-white
            shadow-2xl
            py-[80px]
            sm:relative
            sm:flex-row
            sm:w-full
            sm:h-auto
            sm:shadow-none
            sm:py-0
            sm:right-0
          "
          :class="{ 'animate-menuOpen' : menuState}"
        >
          <li v-for="(item, index) in items" :key="index" 
            class="mx-5 mb-7 sm:mb-0 sm:last:mr-0"
          >
            <a href="#">
              <p class="text-[#8E806A] text-xl font-bold">{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <button 
        type="button" 
        class="
          flex 
          flex-col 
          justify-between 
          h-[25px] 
          absolute 
          right-[5%] 
          top-[50%] 
          -translate-y-2/4
          overflow-hidden
          sm:hidden
        " 
        @click.prevent="menuStateChange"
        
      >
        <span 
          class="bg-[#8E806A] w-[30px] h-[4px] rounded-[40px] origin-top-left duration-300"
          :class="{'rotate-45': menuState, 'translate-x-1': menuState}"
        >
        </span>
        <span 
          class="bg-[#8E806A] w-[30px] h-[4px] rounded-[40px] duration-300"
          :class="{'-translate-x-[40px]': menuState}"
        >
        </span>
        <span 
          class="bg-[#8E806A] w-[30px] h-[4px] rounded-[40px] origin-top-left duration-300"
          :class="{'-rotate-45': menuState}"
        >
        </span>
      </button>
    </nav>
  </header>
</template>

<script setup>
  import { useWindowSize } from '@vueuse/core';

  const items = reactive([
    {
      name: "最新活動",
    },
    {
      name: "三大政策",
    },
    {
      name: "小額捐款",
    },
    {
      name: "服務信箱",
    },
  ]);

  let menuState = ref(false);
  const { width } = useWindowSize();
  watch(width, nwidth => {
     if(nwidth >= 640) {
      menuState.value = false;
     };
  });
  const menuStateChange = () => {
    menuState.value = !menuState.value;
  };

  onMounted(() => {
    watch(menuState, n => {
      if(n){
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      };
    });
  });

</script>
