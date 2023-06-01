import React from "react";

//名前を入力するためのテキストボックスを返す
const Name = () => {
  //input要素のonchangeイベントに対するコールバック関数を定義する
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    //styleオブジェクトのキーはキャメルケースになる 2重中括弧{{}}で括る
    <div style={{padding: '16px', backgroundColor: 'gray'}}>
      {/* forのかわりにhtmlForを使う */}
      <label htmlFor="name">名前</label>
      {/* classの代わりにclassNameを使う、onchangeの代わりにonChange(キャメルケース)を使う */}
      <input id="name" className="input-name" type="text" onChange={onChange} />
    </div>
  )
}

export default Name