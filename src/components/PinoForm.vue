<template>
  <form>
    <label>Pino: </label>
    <input type="text" v-model="pino">
    <label>Comida: </label>
    <ComidaDropdown v-bind:seleccionado="comida" v-on:comidaSeleccionada="comidaSeleccionada"/>
    <input type="button" v-on:click="agregarPedido">
  </form>
</template>

<script>
  import ComidaDropdown from "./ComidaDropdown";

  export default {
    name: "PinoForm",
    data() {
      return {
        pino: '',
        comida: '',
        id: 1,
      }
    },
    components: {ComidaDropdown},
    methods: {
      agregarPedido() {
        this.$emit('nuevoPedido',{pino: this.pino, comida: this.comida, id: this.id, coste: 150})
        this. id += 1
      },
      comidaSeleccionada(comida) {
        this.comida = comida
      }
    }
  }
</script>

<style scoped>

</style>