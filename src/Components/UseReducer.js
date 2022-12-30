import React,{useReducer,useState,useEffect} from 'react'
import vacuum from '../asset/vacuum.png'
import '../index.css'

const Counter = () => {
	const [id, setid] = useState(548896)
	const [vat, setvat] = useState(879)
	const [nok, setnok] = useState(4395)
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
 useEffect(() => {
		console.log(setid)
		console.log(setnok)
		console.log(setvat)
 }, [])
  return (
		<div className="app">
			<div className="container">
				<div className="title">
					<h2>Your shopping cart</h2>
					<p>ID:{id}</p>
				</div>
				<div>
					<img src={vacuum} alt="vacuum" />

					<p className="display">
						Ecovacs Deebot OZMO N8 + robot <br /> vacuum cleaner W125978483
					</p>

					<button className="stock">In stock</button>

					<div className="buttons">
						<button
							className="negative"
							onClick={() => dispatch({ type: 'decrement', value: 1 })}
						>
							-
						</button>

						<button className="value">{count.firstCounter}</button>
						<button
							className="positive"
							onClick={() => dispatch({ type: 'increment', value: 1 })}
						>
							+
						</button>

						<button
							className="reset"
							onClick={() => dispatch({ type: 'reset' })}
						>
							Reset
						</button>
					</div>
					<hr />

					<div className="row">
						<div className="column">
							<p>Standard package</p>
							<p>Total VAT</p>
							<p>Total NOK</p>
						</div>
						<div className="column">
							<h3>Free</h3>
							<h3>{vat},-</h3>
							<h3>{nok},-</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Counter