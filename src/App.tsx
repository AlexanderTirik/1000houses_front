import { type ReactElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '@public/vite.svg'
const App = (): ReactElement => {
    const [Count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <span className="bg-red-200 text-3xl font-bold underline">
                Vite + React
            </span>
            <div className="card">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="bg-white"
                >
                    count is {Count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
