<template>
    <main>
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
</template>

<script>
export default {
  name: 'MainApp',
};
</script>

