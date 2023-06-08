// Libs
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

// Router
import Routing from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<RecoilRoot>
		<Routing />
	</RecoilRoot>
)