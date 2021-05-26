import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import ClientApp from './App'
import { ServerContainer } from '@react-navigation/native'

export default (
  props: any,
  railsContext: { pathname: string; search: string }
) => {
  const componentHtml = renderToString(
    <ServerContainer
      location={{
        pathname: railsContext.pathname,
        search: railsContext.search || ''
      }}
    >
      <ClientApp />
    </ServerContainer>
  )

  const document = `
    <div id="root" style="display: flex; min-height: 100vh">
    ${componentHtml}
    </div>
`

  const helmet = Helmet.renderStatic()

  const renderedHtml = {
    componentHtml: document,
    title: helmet.title.toString(),
    meta: helmet.meta.toString()
  }

  // Note that this function returns an Object for server rendering.
  return { renderedHtml }
}
