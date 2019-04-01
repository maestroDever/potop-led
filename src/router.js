import VueRouter from 'vue-router'

import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Services from './components/Services'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
