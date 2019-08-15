<template>
  <v-app>
    <Table/>
    <Dialog/>
  </v-app>
</template>

<script>
import Dialog from '../components/Dialog'
import AddItem from '../components/AddItem'
import Table from '../components/Table'
export default {
  components: {
    Table,
    Dialog,
    AddItem
  }
}
</script>