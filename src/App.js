import { Routes,Route } from 'react-router-dom';
// import { TextError } from './Components/TextError';
import './App.css';
import Counter from './Components/UseReducer';
import { ErrorBoundary } from 'react-error-boundary'
import  Fallback  from './Components/Fallback';
import  CustomHook from './Components/CustomHook';
import Navbar from './Components/Navbar';
import NoPage from './Components/NoPage';

function App() {
  // const person={
  //   firstname:'joy',
  //   lastname:'ben'
  // }
  const errorHandler=(error,errorInfo)=>{
    console.log(error,errorInfo)
  }
  return (
		<>
			<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Counter />} />
					<Route path="hook" element={<CustomHook />} />
					<Route path="*" element={<NoPage />} />
					{/* uncomment to text for error 
				<TextError figure={{}} /> */}
				</Routes>
			</ErrorBoundary>
		</>
	)
}

export default App;
