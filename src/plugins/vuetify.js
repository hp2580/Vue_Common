// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import '@/assets/scss/_main.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  display: {
    thresholds: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 1100,
      xl: 1280,
    },
  },
})
