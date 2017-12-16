<template>
  <transition name="fade">
    <div id="z-alert" v-show="show">
      <div class="z-alert" :style="{width: widthValue}">
        <div class="z-alert__title">
          <span class="title">alert</span>
          <span class="close"  @click="sure"></span>
        </div>
        <div class="z-alert__content">
          alert内容alert内容alert内容alert内容alert内容alert内容
        </div>
        <div class="z-alert__btn">
          <span class="sure" @click="sure">确认</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        widthValue: '250px',
        show: false
      }
    },
    methods: {
      sure() {
        this.show = false;
      }
    }
  }
</script>

<style lang="scss">
  #z-alert {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0, 0.3);

    .z-alert {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      padding: 0 10px;
      background: #fff;
      box-sizing: border-box;

      .z-alert__title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #eee;

        .close {
          display: inline-block;
          width: 24px;
          height: 24px;
          background: url('data:image/png;base64,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');
          background-size: 100%;
        }
      }

      .z-alert__content {
        padding: 16px 0;
      }

      .z-alert__btn {
        text-align: right;
        height: 40px;
        line-height: 40px;

        .sure {
          padding: 4px 12px;
          font-size: 14px;
          color: #20bde2;
          border: 1px solid #ccc;
          border-radius: 4px;
          // box-shadow: 1px 1px 6px 0px #c7c3c3;
        }
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

