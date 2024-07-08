// Example from https://beta.reactjs.org/learn

import { useMemo, useState } from 'react'
import styles from './counters.module.css'
import metaJson from '../pages/question/_meta.json'

function MyButton() {
  const [count, setCount] = useState(0)
  const array = useMemo(() => {
    const res = []
    Object.values(metaJson).forEach((item) => {
      res.push(item)
    })
    return res
  }, [metaJson])

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h2 style={{fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '24px'}}>
        最新面试题👇
      </h2>
      {Object.entries(metaJson).map((item, index) => {
        return <p style={{margin: '12px'}} key={index}>
          <a style={{color: '#1678ff'}} href={'question/'+item[0]}>{item[1]}</a>
        </p>
      })}
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
