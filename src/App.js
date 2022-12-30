import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'

import { Routes, Route } from 'react-router-dom'
// import { TextError } from './Components/TextError';
import './App.css'
import Counter from './Components/UseReducer'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './Components/Fallback'
import CustomHook from './Components/CustomHook'
import Navbar from './Components/Navbar'
import NoPage from './Components/NoPage'
export const ThemeContext = createContext(null)

function App() {
	const [theme, setTheme] = useState('dark')

	const toggleTheme = () => {
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
	}
	// const person={
	//   firstname:'joy',
	//   lastname:'ben'
	// }
	const errorHandler = (error, errorInfo) => {
		console.log(error, errorInfo)
	}
	return (
		<>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<div className="App" id={theme}>
					<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
						<Navbar />
						<Routes>
							<Route path="/" element={<Counter />} />
							<Route path="hook" element={<CustomHook />} />
							<Route path="*" element={<NoPage />} />
							{/* uncomment to text for error 
				<TextError figure={{}} /> */}
						</Routes>
						<div className="switch">
							<label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
							<ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
						</div>
					</ErrorBoundary>
				</div>
			</ThemeContext.Provider>
		</>
	)
}

export default App
