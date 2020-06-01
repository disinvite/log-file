<template>
  <div id="ascii-container">
    <div v-for="(split, xindex) in data" v-bind:key="xindex">
      <span v-for="(ascii, yindex) in split"
        v-bind:key="yindex"
        v-bind:class="{ focus: ascii.sliceNumber === focus }"
        v-on:mouseover="$emit('focusChange', ascii.sliceNumber)"
        v-on:mouseout="$emit('focusChange', -1)">{{ dataToAscii(ascii.data) }}</span>
    </div>
  </div>
</template>

<script>
function dataToAscii(data) {
  return data.replace(/[^\x20-\x7e]/g, '.');
}

export default {
  name: 'AsciiView',
  props: {
    header: Object,
    data: Array,
    focus: Number
  },
  methods: {
    dataToAscii
  }
}
</script>

<style scoped>
#ascii-container {
  width: 25%;
  font-size: 1.2em;
  text-align: left;
  font-family: monospace;
}
#ascii-container > span {  
}
span.focus {
  background-color: #ddd;
}
</style>
