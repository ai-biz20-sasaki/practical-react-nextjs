//子コンポーネントContainerは親コンポーネントParentから'title'と'children'を受け取る
const Container = (props: { title: string; children: React.ReactElement }) => {
  const { title, children } = props

  return (
    <div style={{ backgroundColor: 'red' }}>
      <span>{ title }</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
      <div>{ children }</div>
    </div>
  )
}

const Parent = () => {
  return (
    //p要素が子コンポーネントの'children'として渡される
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  )
}

export default Parent