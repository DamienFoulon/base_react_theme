import React from 'react'
import { useRecoilValue } from 'recoil'

// Stylesheet
import './VisitChrono.scss'

// Atoms
import { visitingTime } from '../../atoms/basic'

export default function VisitChrono() {
	const visitingTimeState = useRecoilValue(visitingTime)
	return (
		<div>Durée de votre visite : {visitingTimeState}</div>
	)
}