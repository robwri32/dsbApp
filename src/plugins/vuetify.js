import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    directives: {
        Ripple
    }
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#e70033',
                secondary: '#63666a',
                accent: '#2978A0',
                error: '#4F5D75',
            },
        },
    },
});
