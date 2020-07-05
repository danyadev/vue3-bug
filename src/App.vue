<template>
  <button @click="click">Click me</button>

  <KeepAlive>
    <Foo :key="key" />
  </KeepAlive>
</template>

<script>
import { ref } from 'vue'
import Foo from './Foo.vue';

export default {
  components: {
    Foo
  },

  setup() {
    const key = ref(0)
    const click = () => {
      key.value = key.value ? 0 : 1
    }

    return {
      click,
      key
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
