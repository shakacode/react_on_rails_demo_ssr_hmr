import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { RootStackParamList } from '../types'
import { Helmet } from 'react-helmet'

export default function NotFoundScreen({
  navigation
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const isWeb = Platform.OS === 'web'

  return (
    <View style={styles.container}>
      {isWeb && (
        <Helmet>
          <meta name="description" content={'404 Description Using Helmet'} />
        </Helmet>
      )}
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})
