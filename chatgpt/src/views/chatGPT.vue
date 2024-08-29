<template>
  <div class="chatGPT">
    <div class="chatBox"></div>
    <form action="" class="inputBox">
      <div class="selection">
        <select name="model" id="model">
          <option value="gpt-4o-mini">4o-mini</option>
          <option value="gpt-3.5-turbo-0125">3.5-turbo-0125</option>
          <option value="gpt-3.5-turbo-1106">3.5-turbo-1106</option>
          <option value="gpt-3.5-turbo">3.5-turbo</option>
          <option value="gpt-3.5-turbo-16k">3.5-turbo-16k</option>
          <option value="net-gpt-3.5-turbo">net-3.5-turbo(可連網-穩定性較差)</option>
          <option value="whisper-1">Whisper</option>
        </select>
      </div>
      <textarea type="text" v-model="inputValue"></textarea>
      <button type="button">輸入</button>
    </form>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component'
import { Vue } from 'vue-class-component'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

// @Options({
//   components: {
//     HelloWorld
//   }
// })
export default class chatGPT extends Vue {
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style scoped lang="scss">
.chatGPT {
  width: 100%;
  position: relative;
  height: calc(100% - 82px);

  .chatBox {
    margin: 0px 20px;
    border: 1px solid rgb(229, 229, 229);
    border-radius: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 120px);
    overflow: hidden;
  }

  .inputBox {
    margin: 20px 20px 10px;
    margin-top: 20px;
    height: 90px;
    position: relative;

    textarea {
      padding: 25px;
      width: calc(100% - 50px);
      border-radius: 20px 0 0 20px;
      height: 80px;
      border: 1px solid rgb(229, 229, 229);
      resize: none;
      display: block;
      &:focus {
        outline: unset;
      }
    }

    button {
      position: absolute;
      top: 0;
      width: 50px;
      color: white;
      font-size: 14px;
      letter-spacing: 5px;
      right: 0;
      height: 80px;
      background: darkorange;
      border-radius: 0px 20px 20px 0;
      border: 0px;
      writing-mode: vertical-lr;
    }

    .selection {
      top: -10px;
      left: 20px;
      background: darkorange;
      padding: 0 15px;
      position: absolute;
      border-radius: 20px;

      select {
        padding: 5px 15px 5px 0px;
        border: 0px;
        background: darkorange;
        color: white;
        outline: unset !important;
      }
    }
  }
}
</style>
