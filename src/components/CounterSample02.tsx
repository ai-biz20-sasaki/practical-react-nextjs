import { useReducer } from "react";

//reducerが受け取るactionの型を定義する
type Action = 'INCREMENT' | 'DECREMENT' | 'DOUBLE' | 'RESET'

//現在の状態とactionも基づいて次の状態を返す
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

type CounterProps = {
  initialValue: number
}

const Counter02 = (props: CounterProps) => {
  const { initialValue } = props
  //戻り値の配列の1番目のcountは状態、2番目はdispatch関数
  //dispatch関数にactionを渡すことで、状態を更新する
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <p>Count: { count }</p>
      {/* dispatch関数にactionを渡して状態を更新する */}
      <button onClick={ () => dispatch('INCREMENT') }>+</button>
      <button onClick={ () => dispatch('DECREMENT') }>-</button>
      <button onClick={ () => dispatch('DOUBLE') }>×2</button>
      <button onClick={ () => dispatch('RESET') }>Reset</button>
    </div>
  )
}

export default Counter02