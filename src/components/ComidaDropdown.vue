<template>
  <dropdown :options="foods" :selected="comidaSeleccionada" v-on:updateOption="methodToRunOnSelect"/>
</template>

<script>
  import dropdown from 'vue-dropdowns';

  export default {
    name: "ComidaDropdown",
    components: {
      dropdown
    },
    data() {
      return {
        foods: [{name: 'milanesa'}, {name: 'pastel de papa'}],
        comidaSeleccionada: {name: "alguno"}
      }
    },
    methods: {
      methodToRunOnSelect: function (comida) {
        this.$emit('comidaSeleccionada',comida.name)
      },
    }
  }
</script>

<style scoped>

</style>