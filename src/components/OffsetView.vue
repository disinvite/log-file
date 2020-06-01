<template>
  <div id="offset-container">
    <span v-for="ofs in offsets" v-bind:key="ofs">{{ ofs }}<br/></span>
  </div>
</template>

<script>

export default {
  name: 'OffsetView',
  props: {
    max: Number,
    perLine: {
      type: Number,
      default: 16
    }
  },
  computed: {
    offsets: function() {
      const n = Math.ceil(this.max / this.perLine);
      return Array.from(Array(n).keys())
        .map(x => { 
          return (x * this.perLine)
            .toString(16)
            .padStart(4,'\xa0')
            .toUpperCase()
        });
    }
  }
}
</script>

<style scoped>
</style>
