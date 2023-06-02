//TODO:FizzBuzzコンポーネントの実行結果をコンソールで確認すると、console.logが2回表示されている
//なぜかわからないがひとまずこのままにする
//->src/index.tsx の<React.StrictMode>を外すと解決することがわかった
import React, { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean
}
//Fizzは通常の関数コンポーネント
//isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
//isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizzが再描画されました, isFizz=${ isFizz }`)
  return <span>{ isFizz ? 'Fizz' : '' }</span>
}

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}
//Buzzはメモ化した関数コンポーネント
//isBuzzがtrueの場合Buzzと表示し、それ以外は何も表示しない
//メモ化されているため、親コンポーネントが再描画されても、isBuzzが変化しない限りBuzzは再描画しないが
//onClickされるため再描画が発生してしまう
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log(`Buzzが再描画されました, izBuzz=${ isBuzz }`)
  return(
      <span onClick={ onClick }>
        { isBuzz ? 'Buzz' : '' }
      </span>
    )  
})

//この形式でexportしたときはimport { FizzBuzz } from ... で読み込む
export const FizzBuzz02 = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0
  const onBuzzClick = () => {
    console.log(`Buzzがクリックされました isBuzz=${ isBuzz }`)    
  }
  //debugger
  console.log(`Parentが再描画されました, count=${ count }`)
  return (
    <div>
      <button onClick={ () => setCount((c) => c+1)}>+1</button>
      <p>{`現在のカウント： ${ count }`}</p>
      <p>
        <Fizz isFizz={ isFizz } />
        <Buzz isBuzz={ isBuzz } onClick={ onBuzzClick } />
      </p>
    </div>
  )
}