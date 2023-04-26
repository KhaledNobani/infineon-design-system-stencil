import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defineCustomElements } from "@infineon/dds-components-stencil/loader";

createApp(App).mount('#app')
defineCustomElements(window);
