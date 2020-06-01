<template>
  <div id="message">
    <OffsetView
      v-bind:max="dataAscii.join('').length"/>
    <HexView
      v-bind:header="message.header"
      v-bind:data="dataHex"
      v-bind:focus="focus"
      v-on:focusChange="focus = $event"/>
    <AsciiView
      v-bind:header="message.header"
      v-bind:data="dataAscii"
      v-bind:focus="focus"
      v-on:focusChange="focus = $event"/>
  </div>
</template>

<script>
import OffsetView from './OffsetView.vue'
import HexView from './HexView.vue'
import AsciiView from './AsciiView.vue'
import { separate3ascii, separate3hex } from '../shared/utils';

export default {
  name: 'MessageView',
  components: {
    OffsetView,
    HexView,
    AsciiView
  },
  props: {
    message: Object
  },
  data: function() {
    return {
      dataAscii: separate3ascii(this.message.data),
      dataHex: separate3hex(this.message.data),
      focus: -1
    }
  }
}
</script>

<style scoped>
div#message {
  margin-bottom: 1.0em;
  display: flex;
  text-align: left;
  font-size: 16px;
  font-family: 'League Mono', monospace;
}

div#offset-container {
  margin-right: 20px;
}

div#hex-container {
  margin-right: 100px;
}
</style>
