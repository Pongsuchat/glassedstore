<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field @keyup.enter="save" v-model="editedItem.brand" label="brand"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field @keyup.enter="save" v-model="editedItem.title" label="title"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field @keyup.enter="save" v-model="editedItem.color" label="color"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field @keyup.enter="save" v-model="editedItem.price" label="price"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field @keyup.enter="save" v-model="editedItem.type" label="type"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field @keyup.enter="save" v-model="editedItem.url" label="url"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" @click="save">save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from '@/EventBus'
export default {
  data () {
    return {
      sizeObj: 0,
      dialog: false,
      formTitle: '',
      editedItem: {},
      action: ''
    }
  },
  mounted () {
    EventBus.$on('newItem', this.newItem)
    EventBus.$on('editItem', this.editItem)
  },
  methods: {
    close () {
      this.dialog = false
    },
    newItem (sizeObj) {
      this.formTitle = 'New Item'
      this.action = 'newItem'
      this.dialog = true
      this.editedItem = {}
      console.log(sizeObj)
      this.sizeObj = sizeObj
    },
    editItem (item) {
      this.dialog = true
      this.formTitle = 'Edit Item'
      this.action = 'editItem'
      this.editedItem = item
      //console.log(this.editedItem.id)
    },
    async save() {
      if(this.action === 'newItem') {
        try {
          var { data } = await this.axios.post('http://localhost:5000/', this.editedItem)
          EventBus.$emit('getData')
          this.dialog = false
        } catch (error) {
          console.log(error.message)
        }
      }
      else if(this.action === 'editItem') {
          try {
              var { data } = await this.axios.put('http://localhost:5000/', this.editedItem);
              EventBus.$emit('getData')
              this.dialog = false
             
          } catch (error) {
              console.log(error.message)
          }
      }
    }
  }
}
</script>
