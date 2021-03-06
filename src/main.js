import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSelect,
  QToggle,
  QField,
  QCard,
  QCardSection,
  QCardActions,
  QBar,
  QSpace,
  QScrollArea,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  QResizeObserver,
  QTabs,
  QTab,
  QTabPanels,
  QTabPanel,
  QSeparator,
  QTable,
  QTh,
  QTr,
  QTd,
  QDialog,
  ClosePopup
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSelect,
    QToggle,
    QField,
    QCard,
    QCardSection,
    QCardActions,
    QBar,
    QSpace,
    QScrollArea,
    QCarousel,
    QCarouselControl,
    QCarouselSlide,
    QResizeObserver,
    QTabs,
    QTab,
    QTabPanels,
    QTabPanel,
    QSeparator,
    QTable,
    QTh,
    QTr,
    QTd,
    QDialog
  },
  directives: {
    ClosePopup
  },
  plugins: {
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
