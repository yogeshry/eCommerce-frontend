<template>
  <v-app id="ecommerce">

    <v-toolbar
      app
      dense
    >
      <v-menu offset-y attach="#menu">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>

        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click=""
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <div id="menu"></div>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      title: 'Ecommerce App'
    }
  },
  name: 'App'
}
</script>
