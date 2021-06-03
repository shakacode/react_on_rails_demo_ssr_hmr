import * as React from 'react'
import { Dimensions, View } from 'react-native'

type props = {
  children: React.ReactNode
}

const WebWrapper = ({ children }: props) => (
  <View
    // @ts-ignore: These Style are web specific & are not in React native Prop Types
    style={{
      minWidth: 500,
      minHeight: 600
    }}
  >
    {children}
  </View>
)

export default WebWrapper
