<template>
  <switches color="red" v-model="enabled"/>
</template>

<script>
  import switches from 'vue-switches';

  export default {
    name: 'PagadoSwitch',
    components: {
      switches
    },
    data: function () {
      return {
        enabled: true
      }
    }
  }
</script>

<style scoped>

</style>