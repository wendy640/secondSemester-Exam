import { useReducer } from "react";
export const initialState = {
  firstCounter:0
}
export const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {state,firstCounter:state.firstCounter+action.value }
		case 'decrement':
			return {state,firstCounter:state.firstCounter-action.value }
		case 'reset':
			return initialState

		default:
			return state
	}
}
