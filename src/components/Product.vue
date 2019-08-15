<template>
<v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline" >
          <a href="\" style="color:black;text-decoration:none">
        <span>GLASSES</span>
        <span class="font-weight-light">STORE</span>
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="gotologin" target="_blank">
        <span class="mr-2">LOGIN</span>
      </v-btn>
    </v-app-bar>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
        >
        <v-container fluid>
            <v-row>
            <v-col cols="12">
                <v-row
                :align="alignment"
                :justify="justify"
                class="grey lighten-5"
                >
                <v-card
                    v-for="(image, i) in this.datas"
                    :key="i"
                    class="ma-3 pa-6"
                    outlined
                    tile
                    @click.native="gotobuypage(n)"
                ><img v-bind:src=image.url width="200" height="120">
                    <div>{{image.brand}}      
                    <br>Price : {{image.price}}฿</div>
                </v-card>
                </v-row>
            </v-col>
            </v-row>
        </v-container>
        </v-row>
      </v-col>
    </v-row>
</v-app>
  
</template>

<script>
  export default {
    created() {
    this.getData();
    },
    data () {
      return {
        sizeObj: 0,
        datas: [],
        countGridItems : 0,
        alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        justify: 'center'
      }
    },
    methods: {
        gotobuypage(n) {
            alert('click item : ' + n)
        },
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
            console.log(this.datas)
          } catch (error) {
            console.log(error.message);
          }
        }
    }
  }
</script>