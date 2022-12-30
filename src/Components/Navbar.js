/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react'
import './Header.css'
import { CSSTransition } from 'react-transition-group'
import { Outlet, Link } from 'react-router-dom'
export default function Navbar() {
	const [isNavVisible, setNavVisibility] = useState(false)
	const [isSmallScreen, setIsSmallScreen] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 700px)')
		mediaQuery.addListener(handleMediaQueryChange)
		handleMediaQueryChange(mediaQuery)

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange)
		}
	}, [])

	const handleMediaQueryChange = (mediaQuery) => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true)
		} else {
			setIsSmallScreen(false)
		}
	}

	const toggleNav = () => {
		setNavVisibility(!isNavVisible)
	}

	return (
		<header className="Header">
			<img src={require('../asset/logo.png')} className="Logo" alt="logo" />
			<CSSTransition
				in={!isSmallScreen || isNavVisible}
				timeout={350}
				classNames="NavAnimation"
				unmountOnExit
			>
			

				<nav className="Nav">
					<Link to="/">Counter 1</Link>
					<Link to="/hook">Counter 2</Link>
				</nav>
			</CSSTransition>
			<button onClick={toggleNav} className="Burger">
				🍔
			</button>
			<Outlet />
		</header>
	)
}
