import { useState,useEffect } from 'react'
import '../index.css'
import vacuum from '../asset/vacuum.png'
export default function CustomHook() {
	const [value, setValue] = useState(0);
const [id, setid] = useState(548896);
const [vat, setvat] = useState(879);
const [nok, setnok] = useState(4395)

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
useEffect(() => {
	
	console.log(setid)
	console.log(setnok)
	console.log(setvat)
},[])
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
						<button className="negative" onClick={() => decrease()}>
							-
						</button>

						<button className="value">{value}</button>

						<button className="positive" onClick={() => increase()}>
							+
						</button>

						<button className="reset" onClick={() => reset()}>
							Reset
						</button>
					</div>
					<hr />

					<div className="row">
						<div className="column">
							<p className="type">Standard package</p>
							<p className="type">Total VAT</p>
							<p className="type">Total NOK</p>
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
