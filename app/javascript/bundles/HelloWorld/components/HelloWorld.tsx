import * as React from 'react'
import { useState, FunctionComponent } from 'react'

import style from './HelloWorld.module.css'

export interface Props {
  name: string
}

// Note, you need to declare the `FunctionComponent` type so that it complies
// with `ReactOnRails.register` type.
const HelloWorld: FunctionComponent<Props> = (props: Props) => {
  const [name, setName] = useState(props.name)

  return (
    <div>
      <h3>Hello, {name === '' ? 'World' : name}!</h3>
      <hr />
      <form>
        <label className={style.bright} htmlFor="name">
          Say hello to:{' '}
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default HelloWorld
