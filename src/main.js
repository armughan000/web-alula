import { createApp } from "vue";
import { createPinia } from "pinia";
import 'aos/dist/aos.css'
import App from "./App.vue";
import router from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useCmsStore } from './stores/useCmsStore.js';
import {data} from './utils/mockedData.js';

AOS.init();
 

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const app = createApp(App);

app.use(createPinia());

// Fetch your API data here and update the Pinia store
// fetch('your_api_endpoint')
//   .then((response) => response.json())
//   .then((data) => {
//     const cmsStore = useCmsStore();
//     cmsStore.setApiData(data);
//   })
//   .catch((error) => {
//     console.error('Error fetching API data:', error);
//   });


// For mocked data use this as a test later on will replace with above commented code
const cmsStore = useCmsStore();
cmsStore.setApiData(data);


app.use(router);


app.mount("#app");
