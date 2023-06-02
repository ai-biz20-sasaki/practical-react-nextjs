import { title } from "process";
import React from "react";

//Contextを作成する
const TitleContext = React.createContext('')

const Title = () => {
  return (
    //Contextからデータを受けとる
    <TitleContext.Consumer>
      { (title) => {
        return <h1>{ title }</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  return (
    //Contextにデータを渡す
    <TitleContext.Provider value={ title }>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page