<template>
  <div class="p-12 w-full flex flex-col justify-center items-center">
    <div class="text-center max-w-112 text-gray-700 flex flex-col items-center">
      <font-awesome-icon :icon="['fas', 'laptop-code']" size="3x" class="m-5" />
      <span>
        This page is temporarily unavailable due to system maintenance, sorry about the inconvenience.
        <font-awesome-icon :icon="['far', 'hand-peace']" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaintenanceComponent',
};
</script>

<style>

</style>
