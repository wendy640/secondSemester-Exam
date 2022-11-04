import { TextError } from './TextError';
import './App.css';
import Counter from './Counter';
import { ErrorBoundary } from 'react-error-boundary'
import  Fallback  from './Fallback';


function App() {
  const person={
    firstname:'joy',
    lastname:'ben'
  }
  const errorHandler=(error,errorInfo)=>{
    console.log(error,errorInfo)
  }
  return (
		<div className="App">
			<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
				<Counter />
				{/* uncomment to text for error 
				<TextError figure={{}} /> */}
			</ErrorBoundary>
		</div>
	)
}

export default App;
