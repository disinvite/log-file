<template>
  <div id="hex-container">
    <span v-for="(hex, index) in data"
      v-bind:key="index"
      v-bind:class="{ focus: index === focus,
        c0: (index % 5) === 0,
        c1: (index % 5) === 1,
        c2: (index % 5) === 2,
        c3: (index % 5) === 3,
        c4: (index % 5) === 4}"
      v-on:mouseover="$emit('focusChange', index)"
      v-on:mouseout="$emit('focusChange', -1)">{{ hex }}</span>
  </div>
</template>

<script>

export default {
  name: 'HexView',
  props: {
    header: Object,
    data: Array,
    focus: Number
  }
}
</script>

<style scoped>
.c0 { color: #a0c1b9; }
.c1 { color: #abe1fd; }
.c2 { color: #fed1be; }
.c3 { color: #f0e0a2; }
.c4 { color: #fdfdf8; }

#hex-container {
  width: 470px;
  line-break: anywhere;
}
span.focus {
  background-color: #444;
}
</style>
