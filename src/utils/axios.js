// Libs
import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	withCredentials: true,
	timeout: 10000
})

export default instance