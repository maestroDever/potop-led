<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-toolbar app color="primary lighten-1">
      <v-toolbar-side-icon>
        <v-avatar :size="30">
          <img src="./assets/GL.png" alt="Logo">
        </v-avatar>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        Title
      </v-toolbar-title>
      <v-spacer>
        
      </v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          color="white"
          flat
          round
          :to="item.link"
        >
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      height="auto"
      color="primary lighten-1"
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          color="white"
          flat
          round
          :to="item.link"
        >
          {{ item.title }}
        </v-btn>
        <v-flex
          primary
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;{{ new Date().getFullYear() }} — <strong>POTOP</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuItems: [
        { icon: 'home', title: 'Home', link: '/'},
        { icon: 'person', title: 'About Us', link: '/aboutus'},
        { icon: 'highlights', title: 'Products', link: '/products'},
        { icon: 'location_city', title: 'Services', link: '/services'},
        { icon: 'web', title: 'Blog', link: '/blog'},
        { icon: 'face', title: 'Contact Us', link: '/contactus'},
      ],
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
