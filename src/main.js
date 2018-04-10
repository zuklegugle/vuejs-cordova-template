import Vue from 'vue'
import App from './app.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Routes from './routes.js'

Vue.use( VueResource );
Vue.use( VueRouter );

const Router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

var app = {
  initialize: function() {
    this.bindEvents();
    this.setupVue();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  receivedEvent: function(id) {
    console.log('Received Event: ' + id);
  },
  setupVue: function() {
    new Vue({
      el: '#app',
      render: h => h(App),
      router: Router
    })
  }
};

app.initialize();
