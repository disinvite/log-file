<template>
  <div>
    <p>{{ focus }}</p>
    <HexView
      v-bind:header="message.header"
      v-bind:data="sliced"
      v-bind:focus="focus"
      v-on:focusChange="focus = $event"/>
    <AsciiView
      v-bind:header="message.header"
      v-bind:data="sliced"
      v-bind:focus="focus"
      v-on:focusChange="focus = $event"/>
  </div>
</template>

<script>
import HexView from './HexView.vue'
import AsciiView from './AsciiView.vue'
import { separate2 } from '../shared/utils';

export default {
  name: 'MessageView',
  components: {
    HexView,
    AsciiView
  },
  props: {
    message: Object
  },
  data: function() {
    return {
      sliced: separate2(this.message.data),
      focus: -1
    }
  }
}
</script>

<style scoped>
</style>
