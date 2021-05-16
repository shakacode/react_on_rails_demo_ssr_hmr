import ReactOnRails from 'react-on-rails'

import HelloWorld from '../bundles/HelloWorld/components/HelloWorldServer'
import ExpoAppWithoutNavigation from '../bundles/expo-without-navigation/App'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  ExpoAppWithoutNavigation
})
