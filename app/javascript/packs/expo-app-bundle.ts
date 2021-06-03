import ReactOnRails from 'react-on-rails'

import ExpoAppWithoutNavigation from '../bundles/expo-without-navigation/App'
import ExpoAppWithNavigation from '../bundles/expo-with-react-navigation/App'
import ExpoAppWithHelmetAndNavigation from '../bundles/expo-with-react-helmet-and-react-navigation/App'

// This is how react_on_rails can see the Expo Apps in the browser.
ReactOnRails.register({
  ExpoAppWithoutNavigation,
  ExpoAppWithNavigation,
  ExpoAppWithHelmetAndNavigation
})
