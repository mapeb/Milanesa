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
      <tr v-for="pedido in pedidosDeComida">
        <td>{{pedido.id}}</td>
        <td>{{pedido.pino}}</td>
        <td>{{pedido.comida}}</td>
         <!-- <ComidaDropdown/>
        </td-->
        <td>{{pedido.coste}}</td>
        <td>
          <PagadoSwitch/>
        </td>
      </tr>
    </table>
    <PedidoForm/>
  </div>
</template>

<script>
  import ComidaDropdown from "./ComidaDropdown";
  import PagadoSwitch from "./PagadoSwitch";
  import PedidoForm from "./PedidoForm";
  import store from '../store/index';
  import {mapState} from 'vuex';

  export default {
    name: "HomePage",
    components: {
      PedidoForm,
      'ComidaDropdown': ComidaDropdown,
      'PagadoSwitch': PagadoSwitch
    },
    computed:
      {
        pedidosDeComida() {
          return this.$store.state.pedidos
        }
      }
    // computed: mapState(['pedidos']),

  }
</script>

<style scoped>

</style>