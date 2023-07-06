import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)
  const [size] = useState('large'); // default is 'middle'

  return (
    <>
      <div>
        <a href="###" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="###" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Game管理后台系统</h1>
      <Button type="primary" size={size}>点击登录</Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          点个赞吧 {count}
        </button>
        <p>
          Vue太难 <code className='jiayou'>给我加个油</code> 还是用React吧
        </p>
      </div>
      <p className="read-the-docs">
        点击登录按钮进入game管理后台登录页面
      </p>
    </>
  )
}

export default App


