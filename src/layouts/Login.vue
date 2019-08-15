<template>
  <v-app style="width:100%">
        <v-container>
            <v-layout align-center justify-center row fill-height style="padding-top:14%">
                <v-flex xs4>
                    <v-text-field
                        name="username"
                        label="username"
                        id="username"
                        v-model="username"
                        @keyup.enter="login">
                    </v-text-field>
                    <v-text-field
                        name="password"
                        label="password"
                        id="password"
                        type="password"
                        v-model="password"
                        @keyup.enter="login">
                    </v-text-field>
                    <v-btn @click="login" block depressed color="success">login</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === 'admin' && this.password === 'admin') {
        alert('login success')
        this.$router.push('/warehouse')
      } else {
        alert('login fail')
      }
    }
  }
}
</script>
