<template>
  <span class="inline-flex items-center gap-1.5">
    <span class="relative flex h-[7px] w-[7px]">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss-500 opacity-60"></span>
      <span class="relative inline-flex rounded-full h-[7px] w-[7px] bg-moss-500"></span>
    </span>
    <slot />
  </span>
</template>

<script setup>
</script>

<style scoped>
@keyframes ping {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.15);
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
