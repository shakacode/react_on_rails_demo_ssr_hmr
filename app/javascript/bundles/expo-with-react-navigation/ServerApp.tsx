import * as React from 'react'
import { renderToString } from 'react-dom/server'
import ClientApp from './App'
import { ServerContainer } from '@react-navigation/native'

type context = { pathname: string; search: string }

// export default function App(props: any, context: context) {
//   const componentHtml = renderToString(
//     <ServerNavigation context={context}>
//       <ClientApp {...props} />
//     </ServerNavigation>
//   )
//
//   const document = `
//     <!DOCTYPE html>
//     <html style="height: 100%">
//     <meta charset="utf-8">
//     <meta httpEquiv="X-UA-Compatible" content="IE=edge">
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
//     >
//     <body style="min-height: 100%">
//     <div id="root" style="display: flex; min-height: 100vh">
//     ${componentHtml}
//     </div>
// `
//
//   return {
//     document: document
//   }
// }

// export default (
//   props: any,
//   railsContext: { pathname: string; search: string }
// ) => {
//   const ref = React.createRef()
//
//   const componentHtml = renderToString(
//     <ServerContainer
//       // @ts-ignore
//       ref={ref}
//       location={{
//         pathname: railsContext.pathname,
//         search: railsContext.search
//       }}
//     >
//       <ClientApp />
//     </ServerContainer>
//   )
//
//   const document = `
//     <!DOCTYPE html>
//     <html style="height: 100%">
//     <meta charset="utf-8">
//     <meta httpEquiv="X-UA-Compatible" content="IE=edge">
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
//     >
//     <body style="min-height: 100%">
//     <div id="root" style="display: flex; min-height: 100vh">
//     ${componentHtml}
//     </div>
//     </body>
//     </html>
// `
//   // @ts-ignore
//   const options = ref.current.getCurrentOptions()
//
//   const css = `
//     html {
//       height: 100%;
//     }
//     body {
//       min-height: 100%
//     }
//   `
//
//   const renderedHtml = {
//     componentHtml: document,
//     css,
//     title: 'Some Title'
//   }
//
//   // Note that this function returns an Object for server rendering.
//   return { renderedHtml }
// }

export default (
  props: any,
  railsContext: {
    url: string
    pathname: any
    search: any
  }
) => {
  return () => {
    return (
      <ServerContainer
        // @ts-ignore
        location={{
          pathname: railsContext.pathname,
          search: railsContext.search
        }}
      >
        <ClientApp />
      </ServerContainer>
    )
  }
}
