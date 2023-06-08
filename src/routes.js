// Libs
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue } from 'recoil'

// Atoms
import { visitingTime } from './atoms/basic'

// Helpers
import { history } from './helpers/history'

// Pages
import Index from './pages/Index/Index'

export default function Routing() {
	const setVisitingTimeState = useSetRecoilState(visitingTime)
	const visitingTimeState = useRecoilValue(visitingTime)

	// Set visiting time
	useEffect(() => {
		const interval = setInterval(() => {
			setVisitingTimeState(prevVisitingTime => prevVisitingTime + 1)
		}, 60000)

		return () => clearInterval(interval)
	})

	// Store visiting time in local storage on page refresh
	useEffect(() => {
		localStorage.setItem('visitingTime', visitingTimeState)
	}, [visitingTimeState])

	return (
		<Router history={history}>
			<Routes>
				{/* Homepage */}
				<Route path='/' element={<Index />} />
			</Routes>
		</Router>
	)
}