<template>
  <div class="chatGPT">
    <div class="chatBox"></div>
    <form action="" class="inputBox"></form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>
