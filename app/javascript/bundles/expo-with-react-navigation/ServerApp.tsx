import * as React from 'react'
import { renderToString } from 'react-dom/server'
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

  const componentWithWrapper = `
    <div id="root" style="display: flex; min-height: 100vh">
    ${componentHtml}
    </div>
`

  const renderedHtml = {
    componentHtml: componentWithWrapper
  }

  return { renderedHtml }
}
