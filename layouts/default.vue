<template>
<v-app dark>
  <v-content>
    <v-toolbar color="dark">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
        <nuxt />
    <nuxt />
    <v-footer color="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-4">
              Sistem Informasi Cafe Malang
              <v-icon class="red--text">mdi-heart</v-icon>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Cafe Malang'
    }
  }
}
</script>
