import HelloWorld from '@/components/HelloWorld'

import Vue from 'vue'
import Router from 'vue-router'
import IncidentList from '@/components/IncidentList'
import ShowIncident from '@/components/ShowIncident'
import CreateIncident from '@/components/CreateIncident'
import mainView from '@/components/mainView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainView',
      component: mainView
    },
    {
      path:'/IncidentList',
      name:'IncidentList',
      component: IncidentList
    },
    {
      path:'/show-incident/:id',
      name:'ShowIncident',
      component: ShowIncident
    },
    {
      path:'/add-incident',
      name:'CreateIncident',
      component: CreateIncident
    }
  ]
})
