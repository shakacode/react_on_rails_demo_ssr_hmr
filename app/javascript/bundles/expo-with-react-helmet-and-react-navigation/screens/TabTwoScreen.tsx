import * as React from 'react'
import { Platform, StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { Helmet } from 'react-helmet'

export default function TabTwoScreen() {
  const isWeb = Platform.OS === 'web'

  return (
    <View style={styles.container}>
      {isWeb && (
        <Helmet>
          <title>Tab Two Title Using Helmet</title>
          <meta
            name="description"
            content={'Tab Two Description Using Helmet'}
          />
        </Helmet>
      )}
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
