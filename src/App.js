
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import Counter from './components/Counter'
import './index.css'

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
            </div>
        </Provider>
    )
}

export default App
