<template>
<v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <div @click='gotohomepage'>
        <span>GLASSES</span>
        <span class="font-weight-light">STORE</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
<v-content style="padding-top:5%">
  <v-data-table :headers="headers" :items="datas" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.brand }}</td>
      <td>{{ props.item.title }}</td>
      <td>{{ props.item.color }}</td>
      <td>{{ props.item.price }}</td>
      <td>{{ props.item.type }}</td>
      <td>{{ props.item.url }}</td>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</v-content>
<v-content>
  <v-btn block color="primary" dark @click="newItem">New Item</v-btn>
</v-content>
</v-app>
</template>

<script>
import { EventBus } from '@/EventBus'

export default {
  created() {
    this.getData();
  },
  data() {
    return {
      sizeObj: 0,
      datas: [],
      headers: [
        { text: "Brand", align: "left", value: "brand" },
        { text: "Title", align: "left", value: "title" },
        { text: "Color", align: "left", value: "color" },
        { text: "Price", align: "left", value: "price" },
        { text: "Type", align: "left", value: "type" },
        { text: "Url", align: "left", value: "url" },
        { text: "Action", value: "action", sortable: false }
      ]
    }
  },
  mounted () {
    EventBus.$on('getData', this.getData)
  },
  methods: {
    async getData() {
      try {
        var arr = []
        var { data } = await this.axios.get("http://localhost:5000/");
        this.datas = data;
        //this.sizeObj = Object.keys(this.datas).length;
        var i = 0
        for(data in this.datas) {
            var val = Object.values(this.datas[data])
            var str ={id: `${i}`, brand: `${val[0]}`, color: `${val[1]}`, price: `${val[2]}`, title: `${val[3]}`, type: `${val[4]}`, url: `${val[5]}`}
            arr.push(str)
            i++
         }
        this.sizeObj = i;
        this.datas = arr
        //console.log(arr)
      } catch (error) {
        console.log(error.message);
      }
    },
    newItem () {
        EventBus.$emit('newItem', this.sizeObj)
     },
    editItem(item) {
      EventBus.$emit('editItem', item)
    },
    async deleteItem (item) {
      if (confirm('Are you sure you want to delete this item?')) {
        try {
            var { data } = await this.axios.delete(
              'http://localhost:5000/' + item.id)
            this.getData()
        } catch (error) {
          console.log(error.message)
           this.getData()
        }
      }
    },
    gotohomepage() {
      this.$router.push('/')
    }
  }
}
</script>