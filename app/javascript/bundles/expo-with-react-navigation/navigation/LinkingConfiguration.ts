/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

export default {
  prefixes: [],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: {
                path: '/expo/one',
                exact: true
              }
            }
          },
          TabTwo: {
            screens: {
              TabTwoScreen: {
                path: '/expo/two',
                exact: true
              }
            }
          }
        }
      },
      NotFound: {
        path: 'expo/*'
      }
    }
  }
}
