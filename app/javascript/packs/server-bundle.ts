import ReactOnRails from 'react-on-rails'

import HelloWorld from '../bundles/HelloWorld/components/HelloWorldServer'
import ExpoAppWithoutNavigation from '../bundles/expo-without-navigation/App'
import ExpoAppWithNavigation from '../bundles/expo-with-react-navigation/ServerApp'
import ExpoAppWithHelmetAndNavigation from '../bundles/expo-with-react-helmet-and-react-navigation/ServerApp'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  ExpoAppWithoutNavigation,
  ExpoAppWithNavigation,
  ExpoAppWithHelmetAndNavigation
})
