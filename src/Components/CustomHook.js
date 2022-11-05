import { useState } from 'react'
import '../index.css'

export default function CustomHook() {
	const [value, setValue] = useState(0)

	const increase = () => {
		setValue(value + 1)
	}

	const decrease = () => {
		if (value === 0) {
			alert('Counter cannot go below zero!')
			return
		}
		setValue(value - 1)
	}

	const reset = () => {
		setValue(0)
	}

	return (
		<div className="app">
			<h2>Counter App</h2>
			<div className="counter-value">
				<strong>{value}</strong>
			</div>
			<div className="buttons">
				<div>
					<button onClick={() => increase()}>+</button>
				</div>
				<div>
					<button onClick={() => decrease()}>-</button>
				</div>
				<div>
					<button onClick={() => reset()}>0</button>
				</div>
			</div>
		</div>
	)
}
