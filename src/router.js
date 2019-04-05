import VueRouter from 'vue-router'

import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Products from './views/Products'
import Services from './views/Services'
import Blog from './views/Blog'
import ContactUs from './views/ContactUs'

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
