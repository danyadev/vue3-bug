<template>
  <button @click="click">Toggle chat</button><br>

  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" :key="id" />
    </KeepAlive>
  </RouterView>
</template>

<script>
import { computed } from 'vue';
import router from './router';

export default {
  setup() {
    const id = computed(() => +router.currentRoute.value.params.id);
    const click = () => {
      if (!id.value) {
        router.replace(`/messages/1`);
      } else {
        router.replace({
          name: 'forward-to',
          params: {
            fromId: 1
          }
        })
      }
    }

    return {
      id,
      click
    };
  }
};
</script>
