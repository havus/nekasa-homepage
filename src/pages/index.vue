<template>
  <div>
    <div id="hero" class="bg-nekasa-900 py-12">
      <div class="container py-10 mx-auto flex flex-wrap flex-col justify-center lg:flex-row lg:justify-between lg:items-center lg:pt-32 lg:pb-24">
        <div id="main-title" class="text-white max-w-lg">
          <h3 class="text-2xl">
            <span class="font-bold">Nekasa</span> -
            Playground for creative ideas.
          </h3>

          <div class="mt-6 w-1/3 h-1 bg-orange-500 rounded-full" />

          <div class="mt-3 text-gray-100 font-extralight animate-scoll-fade-in-out">
            <p>
              We embracing people in all fields by providing a platform for them to make their ideas happen.
              Help realize ideas without take their copyright.
            </p>
          </div>
        </div>

        <img :src="nekasaChipset" class="mt-10 p-5 sm:p-0 max-h-96 mx-auto my-7 lg:my-0 lg:mr-0 lg:max-h-96 order-first lg:order-last animate-pulse" alt="Wadaw chipset">
      </div>
    </div>
  </div>
</template>

<script>
import nekasaChipset from '@/assets/images/nekasa-chipset.png';

export default {
  data() {
    return {
      nekasaChipset,
    }
  },
};
</script>

<style>

</style>