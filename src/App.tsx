import { type Component, For } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

import styles from './App.module.scss'

type GameItem = 0 | 1

const ShowBoxRow: Component<{ col: GameItem[] }> = (props) => (
  <div class="showBox__row">
    <For each={props.col}>
      {(item) => <div class={item ? `active gameItem` : `gameItem`} />}
    </For>
  </div>
)

const createInitialItemList = (x: number, y: number) =>
  Array(y)
    .fill(0)
    .map(() => Array(x).fill(0)) as GameItem[][]

const initialItemList = createInitialItemList(40, 60)

const [itemList, setITemList] = createStore(initialItemList)

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    setITemList(produce((list) => (list[0][0] = list[0][0] ? 0 : 1)))
  }
})

const App: Component = () => {
  const handleClick = () => {
    // setITemList(produce((list) => (list[0][0] = list[0][0] ? 0 : 1)))
  }
  return (
    <div class={styles.gameBox}>
      <div class="showBox">
        <div class="showBox__title">俄罗斯方块</div>
        <div class="showBox__content">
          <For each={itemList}>{(item) => <ShowBoxRow col={item} />}</For>
        </div>
      </div>
      <div class="doBox">
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  )
}

export default App
