//無名関数でコンポーネントを定義し、Textという変数に代入する
//子コンポーネントTextは親コンポーネントMessageから'content'というデータを受け取る
const Text = (props: { content: string }) => {
  //propsからcontentをいう値を取り出す
  const { content } = props
  //propsで渡されたデータを表示する
  return <p className="text">{ content }</p>
}

//無名関数でコンポーネントを定義し、Messageという変数に代入する
//Messageは親コンポーネント
const Message = (props: {}) => {
  const content1 = 'This is parent component'
  const content2 = 'Message uses Text component'
  return (
    <div>
      {/* contentというキーで子コンポーネントにデータを渡す */}
      <Text content={ content1 } />
      {/* 違うデータを渡すと、違う内容が表示される */}
      <Text content={ content2 } />
    </div>
  )
}
//Messageコンポーネントをデフォルトエクスポートする
export default Message