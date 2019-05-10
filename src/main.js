import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGlassCheers,
  faCalendarAlt,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

library.add(faGlassCheers, faCalendarAlt, faMap);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
