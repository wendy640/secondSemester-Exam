import React from 'react'
import msg from '../asset/404.png'


const NoPage = () => {
	
	return (
		<>
			<div
				style={{
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 500
				}}
			>
				<img src={msg} alt="404" />
				<h3
					style={{
						display: 'flex',
						justifyContent: 'center',
						color: '#333333',
						fontSize: 27
					}}
				>
					Ooops!! Page not found
				</h3>
				
			</div>
		</>
	)
}

export default NoPage
