// Note: Using an Alias in Webpack
import 'styles/index.scss';

// Import Vue
import Vue from 'vue';
import iframeResize from 'iframe-resizer/js/iframeResizer';
import App from './components/App.vue';

new Vue({
    el: '#app',
    render: h => h(App),
});