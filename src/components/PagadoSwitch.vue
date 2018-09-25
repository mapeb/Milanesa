<template>
  <switches/>
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
        enabled: false
      }
    }
  }
</script>

<style scoped>

</style>