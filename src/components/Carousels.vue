<template>
  <v-carousel cycle
    hide-delimiter-background
    show-arrows-on-hover>
     <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
     <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3" style="color:white">GET YOUR AWESOME GLASSES</div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.pixabay.com/photo/2016/03/27/19/33/sunset-1283872_1280.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097_1280.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg',
          }
        ],
        colors: [
          'green',
          'orange',
          'red'
        ]
      }
  }
}
</script>