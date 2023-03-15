
<template>
  <div class="text-gray-blue-700">
    <div
      class="flex items-center mb-4 cursor-pointer"
      @click="() => { showChild = !showChild; }"
    >
      <font-awesome-icon
        :icon="['fas', 'chevron-right']"
        :class="`mr-3 transition ease-in-out ${showChild ? 'rotate-90' : ''}`"
      />

      <h1 class="text-xl font-semibold mr-2">
        {{ title }}
      </h1>

      <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
        {{ badgeCounter }}
      </span>

      <div class="flex-1 h-0.5 bg-gray-200 rounded-full" />
    </div>

    <!-- Contents -->
    <div :class="showChild ? 'collapse-show' : 'collapse-hide'">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseComponent',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    badgeCounter: {
      type: [String, Number],
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      showChild: false,
    };
  },
};
</script>

<style scoped>
</style>