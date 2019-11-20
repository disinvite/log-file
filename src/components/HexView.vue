<template>
  <div id="hex-container">
    <div v-for="(split, xindex) in hexArr" v-bind:key="xindex">
      <span v-for="(hex, yindex) in split"
        v-bind:key="yindex"
        v-bind:class="{ focus: hex.sliceNumber === focus }"
        v-on:mouseover="$emit('focusChange', hex.sliceNumber)"
        v-on:mouseout="$emit('focusChange', -1)">{{ dataToHex(hex.data) }}</span>
    </div>
  </div>
</template>

<script>
// hacky
function dataToHex(data) {
  return data.split('')
    .map(x => x.charCodeAt(0)
      .toString(16)
      .padStart(2,'0')
      .toUpperCase()
    )
    .join(' ')
}

export default {
  name: 'HexView',
  props: {
    header: Object,
    data: Array,
    focus: Number
  },
  methods: {
    dataToHex
  },
  data: function() {
    return {
      hexArr: this.data
    }
  }
}
</script>

<style scoped>
#hex-container {
  display: inline-block;
  font-size: 16px;
  text-align: left;
  font-family: monospace;
  margin-right: 100px;
}
#hex-container > div > span::after {
  content: " ";
}
span.focus {
  background-color: #ddd;
}
</style>
