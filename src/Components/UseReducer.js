import React,{useReducer} from 'react'

import '../index.css'
const Counter = () => {
  const initialState = {
		firstCounter: 0
 }
 const reducer = (state, action) => {
		switch (action.type) {
			case 'increment':
				return { state, firstCounter: state.firstCounter + action.value }
			case 'decrement':
				return { state, firstCounter: state.firstCounter - action.value }
			case 'reset':
				return initialState

			default:
				return state
		}
 }

 const[count,dispatch]= useReducer(reducer,initialState)
 
  return (
		<div className="app">
			<h2>Counter App</h2>
			<div className="counter-value">
				<strong>{count.firstCounter}</strong>
			</div>
			<div className="buttons">
				<div>
					<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
						Increment
					</button>
				</div>
				<div>
					<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
						Decrement
					</button>
				</div>
				<div>
					<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
				</div>
			</div>
		</div>
	)
}

export default Counter