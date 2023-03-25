import { type ReactElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '@public/vite.svg'
import { useTranslation } from 'react-i18next'
const App = (): ReactElement => {
    const [Count, setCount] = useState(0)
    const { t, i18n } = useTranslation()
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
            <a
                href="#"
                className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
            >
                <div className="flex items-center space-x-3">
                    <svg
                        className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        Text
                    </svg>
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
                        New project
                    </h3>
                </div>
                <p className="text-sm text-slate-500 group-hover:text-white">
                    {t('Welcome to React')}
                </p>
            </a>
        </div>
    )
}

export default App
