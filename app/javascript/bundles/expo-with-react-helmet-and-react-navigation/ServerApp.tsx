import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import ClientApp from './App'
import { ServerContainer } from '@react-navigation/native'

export default (
  props: any,
  railsContext: { pathname: string; search: string }
) => {
  const ref = React.createRef()

  const componentHtml = renderToString(
    <ServerContainer
      // @ts-ignore
      ref={ref}
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

  // @ts-ignore
  const options = ref.current?.getCurrentOptions()
  const helmet = Helmet.renderStatic()

  const renderedHtml = {
    componentHtml: document,
    meta: helmet.meta.toString(),
    title: `<title>${options?.title}</title>`
  }

  // Note that this function returns an Object for server rendering.
  return { renderedHtml }
}
