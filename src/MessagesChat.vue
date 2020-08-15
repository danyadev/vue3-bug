<template>
My chat (id{{ id }})
</template>

<script>
import router from './router';

export default {
  setup() {
    return {
      id: +router.currentRoute.value.params.id
    };
  }
};
</script>
