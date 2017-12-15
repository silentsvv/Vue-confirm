<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$toast('hhh').then((res) => {
      if(res == 'sure') {
        this.$toast('再一次')
      }
    })
  }
}
</script>
