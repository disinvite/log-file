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
import msgs from '../trash/message.json'

export default {
  name: 'app',
  components: {
    MessageView
  },
  data: function() {
    return {
      msgs: msgs.slice(5,10)
    }
  }
}
</script>

<style>
body { 
  background-color: #080808;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 800px;
}
</style>
