// import 'vuetify/styles'
import '@/assets/scss/_main.scss'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
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

export { vuetify }