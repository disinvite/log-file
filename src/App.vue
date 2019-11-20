<template>
  <div id="app">
    <h1>hello</h1>
    <div v-for="(msg, index) in msgs" v-bind:key="index">
      <MessageView v-bind:message="msg"/>
    </div>
  </div>
</template>

<script>
import MessageView from './components/MessageView.vue'

/*
4D 00 00 00 02 00 00 00 00 00 00 00 00 00

3B 01 43 61 63 68 65 20 4F 62 6A 65 63 74
73 20 56 65 72 73 69 6F 6E 20 32 30 31 37
2E 33 2E 30 2E 35 35 35 20 43 61 63 68 65
20 78 44 42 43 20 53 65 72 76 65 72 20 38
2E 30 31 03 04 01 03 04 01 03 04 23 07 01
31 34 34 38 34 02 04                     
*/

function getMsg() {
  return {
    header: {
      size: 0x4d,
      seqno: 0x02,
      cursor: 0x00,
      function: 0x00
    },
    data: [
      ';\u0001Cache Objects Version 2017.3.0.555 Cache xDBC Server 8.01',
      '\u0003\u0004\u0001',
      '\u0003\u0004\u0001',
      '\u0003\u0004\u0023',
      '\u0003\u0004\u0023',
      '\u0007\u0001\u0031\u0034\u0034\u0038\u0034\u0002\u0004'
    ]
  }
}

export default {
  name: 'app',
  components: {
    MessageView
  },
  data: function() {
    return {
      msgs: [...Array(100)].fill(0).map(x => getMsg(x))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
