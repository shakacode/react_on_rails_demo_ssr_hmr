import * as React from 'react'
import { useState, FunctionComponent } from 'react'
// @ts-ignore
import style from './HelloWorld.module.css'

export interface Props {
  name: string
}

// Note,  you need to declare the type so that ReactOnRails.register has the
// proper type.
const HelloWorld: FunctionComponent<Props> = (props: Props) => {
  const [name, setName] = useState(props.name)

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <hr />
      <form>
        <label className={style.bright} htmlFor="name">
          Say hello to:
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
