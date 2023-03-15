<template>
  <div>
    <div id="hero" class="bg-nekasa-900 py-12">
      <div class="container py-10 mx-auto flex flex-wrap flex-col justify-center lg:flex-row lg:justify-between lg:items-center lg:pt-32 lg:pb-24">
        <div id="main-title" class="text-white max-w-lg">
          <h3 class="text-2xl">
            <span class="font-bold">Nekasa</span> -
            Closer Step To Be Better.
          </h3>

          <div class="mt-6 w-1/3 h-1 bg-orange-500 rounded-full" />

          <div class="mt-3 text-gray-100 font-light animate-scoll-fade-in-out">
            <p>
              Build whatever we want, make our business faster and work efficiently.
              We hope this can be our playground for creative ideas.
              <span class="font-bold">Let our dream happen!</span>
            </p>
          </div>
        </div>

        <img :src="nekasaChipset" class="mt-10 p-5 sm:p-0 max-h-96 mx-auto my-7 lg:my-0 lg:mr-0 lg:max-h-96 order-first lg:order-last animate-pulse" alt="Nekasa chipset">
      </div>
    </div>

    <!-- Gain More Experience with Us -->
    <div class="bg-white py-28">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-5 justify-items-center gap-7">
          <div class="col-span-3 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 w-full order-2 lg:order-1">
            <!-- v-scollanimation -->
            <div
              v-for="(experience, i) in experiences" :key="i"
              class="flex flex-col rounded border-1 border-nekasa-300 p-5 w-full items-center lg:items-start"
            >
              <div class="w-12 h-12 bg-nekasa-orange-100 rounded-full flex justify-center items-center">
                <div class="text-3xl text-nekasa-orange-300">
                  <font-awesome-icon :icon="experience.icon" size="xs" />
                </div>
              </div>

              <h1 class="text-xl font-semibold text-nekasa-900 mt-2 text-center lg:text-left">
                {{ experience.title }}
              </h1>

              <p class="font-extralight mt-2 max-w-48 text-nekasa-700 text-center lg:text-left">
                {{ experience.text }}
              </p>
            </div>
          </div>

          <div class="col-span-2 flex flex-col justify-center mb-20 p-10 order-1 lg:order-2">
            <h1 class="text-3xl font-semibold">
              <span class="text-nekasa-orange-300 font-bold underline underline-offset-8">We</span>
              make a good shit!
            </h1>

            <p class="font-light mt-5">
              Sometimes we need to think outside the box,
              to find out anti-mainstream way to solve a problem.
              Creative and critical thinking bring us to think different.
              Deep dive and discover The Real Problem,
              what customer needs. Gathering a list of ideas
              then brainstorming.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Build whatever from your creative ideas -->
    <div class="bg-nekasa-900 py-20 mx-auto">
      <div class="container mx-auto flex flex-col">
        <img :src="arrow" class="max-h-28 mx-auto animate-pulse">

        <h1 class="text-white mt-5 text-4xl font-bold mx-auto text-center tracking-wide">
          Build whatever<br>from your <span class="text-nekasa-orange-300">creative</span> ideas
        </h1>

        <p class="text-gray-200 mt-9 mx-auto text-center leading-7 tracking-wide" style="max-width: 37rem;">
          Turning a creative Idea to a business. Figure out what problem is being solved. Find your market. Find your support, have you ever noticed how many creative ideas are growing to be even bigger now? Brave to start something, use failure as a way to discover your strength.
          <br>Be a <span class="text-nekasa-orange-300 font-bold">Risk-Taker!</span>
        </p>
      </div>
    </div>

    <!-- Quotes - start -->
    <div class="bg-nekasa-50 bg-gradient-to-b from-white pt-20 pb-36">
      <div class="container p-8 lg:px-32 mx-auto flex flex-wrap">
        <!-- v-scollanimation -->
        <div
          v-for="(quote, i) in quotes" :key="i"
          class="w-full lg:w-1/2 xl:w-1/3 mx-auto mb-12 lg:p-4"
        >
          <div class="bg-white px-14 pt-7 pb-5 rounded-md relative filter drop-shadow-lg flex flex-col justify-between">
            <div
              class="bg-green-300 rounded-full h-12 w-12 text-xl
              flex items-center justify-center text-white
              absolute -top-7 left-1/2 transform -translate-x-1/2"
            >
              <font-awesome-icon :icon="['fas', 'quote-right']" />
            </div>

            <p class="text-xl whitespace-pre-line italic text-center text-gray-400 font-playfair-display">
              {{ quote.text }}
            </p>

            <p class="uppercase font-semibold text-center text-gray-500 mt-8">
              {{ quote.quotee }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nekasaChipset from '@/assets/images/nekasa-chipset.png';
import arrow from '@/assets/images/arrow.png';

export default {
  data() {
    return {
      nekasaChipset,
      arrow,
      experiences: [
        {
          icon: ['far', 'lightbulb'],
          title: 'Start Your Idea',
          text: "It's never too late to start something. And even though it's late, better late than never.",
        },
        {
          icon: ['fas', 'people-roof'],
          title: 'Open Discuss',
          text: 'Criticizing idea and gather creative problem solving. And develop SMART goals.',
        },
        {
          icon: ['fas', 'bolt-lightning'],
          title: 'Execute The Plan',
          text: "Is an easy concept to talk about, but it's a hard one to well... Execute!",
        },
        {
          icon: ['fas', 'road'],
          title: 'Keep on track',
          text: 'Assign tasks. Establish regular communication. Track our progress. Evaluate performance.',
        },
      ],
      quotes: [
        {
          quotee: 'Albert Einstein',
          text: `Creativity is
            intelligence having fun.`,
        },
        {
          quotee: 'Edward de Bono',
          text: 'Creativity involves breaking out of expected patterns in order to look at things in a different way.',
        },
        {
          quotee: 'Edwin Land',
          text: 'An essential aspect of creativity is not being afraid to fail.',
        },
      ],
    }
  },
};
</script>

<style>

</style>