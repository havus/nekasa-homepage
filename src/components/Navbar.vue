<!-- Please remove this file from your project -->
<template>
  <header id="navbar" class="bg-nekasa-900 fixed z-50 w-full text-gray-400">
    <div class="container py-3 flex items-center justify-between flex-wrap">
      <img :src="nekasaLogo" class="max-h-9 mr-9" alt="Nekasa logo">

      <div class="block md:hidden">
        <button class="flex items-center px-3 py-2 border rounded border-gray-400" @click="toggle">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>

      <div :class="`${open ? 'collapse-show': 'collapse-hide'} w-full flex-grow md:flex md:items-center md:w-auto`">
        <div class="text-sm md:flex-grow first:mt-3 md:first:mt-0 md:flex justify-center">
          <NuxtLink
            v-for="(link, i) in links" :key="i"
            :to="link.path"
            :class="`text-gray-100 block p-2 pl-0 pr-9 md:inline-block font-bold underline-offset-8
            ${link.path == $route.path ? 'md:underline' : 'no-underline'}`"
            @click="toggle"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import nekasaLogo from '@/assets/images/nekasa_64.png';

export default {
  name: 'NavBar',
  data() {
    return {
      nekasaLogo,
      open: false,
      links: [
        { path: '/', text: 'Home' },
        { path: '/projects', text: 'Projects' },
        { path: '/contributors', text: 'Contributors' },
      ],
    };
  },
  mounted() {
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
