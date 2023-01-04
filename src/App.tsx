import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react'
import Counter from './Counter'

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <div className="App">
      <h1 style={{ color: "skyblue" }}>UseState:</h1>
      <h1>{count}</h1>
      <h1 style={{ color: "skyblue" }}>UseCallback:</h1>
      <button onClick={addTwo}>Add</button>
      <h1 style={{ color: "skyblue" }}>UseMemo:</h1>
      <h2>{result}</h2>
      <h1 style={{ color: "skyblue" }}>UseRef:</h1>
      <input ref={inputRef} type="text" />
      <h1 style={{ color: "skyblue" }}>UseReducer:</h1>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </div>
  )
}

export default App
