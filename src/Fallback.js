import wrg from './asset/error.png'
import { Link } from 'react-router-dom'
 const Fallback = () => {
	return (
		<div
			style={{
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto',
				width: 500
			}}
		>
			<img src={wrg} alt="error" />
			<h3
				style={{
					display: 'flex',
					justifyContent: 'center',
					color: '#333333',
					fontSize: 27
				}}
			>
				Ooops!! Something went wrong
			</h3>
		
		
		</div>
	)
}
export default Fallback