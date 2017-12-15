<template>
  <div id="toast" v-if="show">
    <div class="toast">
      <div class="toast__content">
        {{content}}
      </div>
      <div class="toast__btn">
        <span class="btn success" @click="sure">确定</span>
        <span class="btn cancel" @click="cancel">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: '默认',
        show: false
      }
    },
    
    methods: {
      sure() {
        this.show = false;
        console.log('确定')
      },

      cancel() {
        this.show = false;
        console.log('取消')
      }
    }
  }
</script>

<style lang="scss">
  #toast {
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.3);

    .toast {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 300px;
      height: 300px;
      background: #fff;
      border-radius: 5px;

      .toast__btn {
        display: flex;
        height: 60px;
        align-items: center;

        .btn {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
</style>
