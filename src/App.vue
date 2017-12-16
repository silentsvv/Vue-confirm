<template>
  <div id="app">
    <span @click="showAlert">alert</span>
    <span @click="showToast">toast</span>
    <span>confirm</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  
  methods: {
    showToast() {
      this.$toast();
    },
    showAlert() {
      this.$alert().then((res) => {
        alert(res)
      })
    }
  }
}
</script>

<style>
</style>
