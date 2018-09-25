<template>
  <div style="margin: auto">
    <h1>Elige tu comida</h1>
    <table style="margin: auto">
      <tr>
        <th>Id</th>
        <th>Pino</th>
        <th>Comida</th>
        <th>Precio</th>
        <th>Pago</th>
      </tr>
      <tr v-for="pedido in pedidos">
        <td>{{pedido.id}}</td>
        <td>{{pedido.pino}}</td>
        <td>
          <ComidaDropdown/>
        </td>
        <td>{{pedido.coste}}</td>
        <td>
          <PagadoSwitch/>
        </td>
      </tr>
    </table>
      <PinoForm v-on:nuevoPedido="agregarPedido"/>
  </div>
</template>

<script>
  import ComidaDropdown from "./ComidaDropdown";
  import PagadoSwitch from "./PagadoSwitch";
  import PinoForm from "./PinoForm";

  export default {
    name: "HomePage",
    components: {
      PinoForm,
      'ComidaDropdown': ComidaDropdown,
      'PagadoSwitch': PagadoSwitch
    },
    data() {
      return {
        pedidos: []
      }
    },
    methods: {
      agregarPedido(pedido) {
        this.pedidos.push(pedido)
      }
    }
  }
</script>

<style scoped>

</style>