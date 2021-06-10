import { defineClientAppEnhance } from '@vuepress/client'
import components from '../../src/index'

export default defineClientAppEnhance(({
     app, router, siteData
}) => {
  app.use(components);
})
