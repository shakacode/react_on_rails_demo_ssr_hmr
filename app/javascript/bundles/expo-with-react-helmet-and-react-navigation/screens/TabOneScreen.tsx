import * as React from 'react'
import { Platform, StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { Helmet } from 'react-helmet'

export default function TabOneScreen() {
  const isWeb = Platform.OS === 'web'

  return (
    <View style={styles.container}>
      {isWeb && (
        <Helmet>
          <meta
            name="description"
            content={'Tab One Description Using Helmet'}
          />
        </Helmet>
      )}
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
