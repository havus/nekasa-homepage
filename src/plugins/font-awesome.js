// For Nuxt 3
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faPeopleRoof,
  faBoltLightning,
  faRoad,
  faQuoteRight,
  faHeart,
  faLaptopCode,
  faArrowCircleRight,
  faCircleCheck,
  faCircleNotch,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb,
  faHandPeace,
  faCircle,
} from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faBars,
  faPeopleRoof,
  faBoltLightning,
  faRoad,
  faLightbulb,
  faQuoteRight,
  faHeart,
  faLaptopCode,
  faHandPeace,
  faArrowCircleRight,
  faCircleCheck,
  faCircleNotch,
  faCircle,
  faChevronRight,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
