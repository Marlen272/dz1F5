import { createStore } from 'redux';

const PLUS = 'PLUS', MINUS = 'MINUS', PLUS_10 = 'PLUS_10', MINUS_10 = 'MINUS_10', RESET = 'RESET'

const plus = () => ({ type: PLUS }),
    minus = () => ({ type: MINUS }),
    plus10 = () => ({ type: PLUS_10 }),
    minus10 = () => ({ type: MINUS_10 }),
    reset = () => ({ type: RESET })

const initialState = 0

const actionHandlers = {
    [PLUS]: state => state + 1,
    [MINUS]: state => Math.max(state - 1, 0),
    [PLUS_10]: state => state + 10,
    [MINUS_10]: state => Math.max(state - 10, 0),
    [RESET]: () => initialState,
}

const counterReducer = (state = initialState, action) => actionHandlers[action.type]?.(state) ?? state

const store = createStore(counterReducer)

export { store, plus, minus, plus10, minus10, reset }
