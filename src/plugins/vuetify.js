import Vue from "vue";
import Vuetify from "vuetify/lib";

// import colors from 'vuetify/lib/util/colors'

new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#005969", //Dark Petrol
        secondary: "#993062", //Dark Red
        font: "#000000",
        "toolbar-font": "#FFFFFF",
        filters: "#f2f2f2",
        petrol: "#00a0a6", //Petrol
        red: "#ea4278", //Red
        "light-pretrol": "#c7e4e2" //Light Petrol
      }
    }
  }
});

Vue.use(Vuetify);

export default new Vuetify({});
