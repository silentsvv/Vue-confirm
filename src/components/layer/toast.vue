<template>
  <transition name="fade">
    <div id="z-toast" v-show="show">
      <div class="z-toast">
        <span class="z-toast__content">测试测试</span>
      </div>
    </div>
  </transition> 
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style lang="scss">
  #z-toast {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .z-toast {
      font-size: 16px;

      .z-toast__content {
        padding: 4px 10px;
        color: #fff;
        background: #333;
        border-radius: 8px;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>


