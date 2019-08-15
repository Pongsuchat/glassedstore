<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>GLASSES</span>
        <span class="font-weight-light">STORE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="gotologin" target="_blank">
        <span class="mr-2">LOGIN</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Carousels/>
    </v-content>
    <v-container grid-list-xs>
      <v-content>
          <p style="text-align:center" headline>OUR PRODUCT</p>
      </v-content>
      <GridItems/>
      <div class="text-center">
        <v-btn @click="gotoproduct" class="white--text" color="red">VIEW ALL</v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import Carousels from '../components/Carousels'
import GridItems from '../components/GridItems'


export default {
  name: 'App',
  methods: {
    gotoproduct () {
      this.$router.push('/product')
    },
    gotologin () {
      this.$router.push('/login')
    }
  },
  components: {
    Carousels,
    GridItems
  }
}
</script>