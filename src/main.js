import Vue from 'vue'
import App from './App.vue'

//Global Filter which counts the length of each word in the string
Vue.filter('addWordLen', function(str) {
    if ( !str.trim() ) return "";
    return str.replace( /([^.,?!\s]+)/g,
                        function( val ) {
                          return val + ' (' + val.length + ')';
                        }
                      );
});

new Vue({
  el: '#app',
  render: h => h(App)
})
