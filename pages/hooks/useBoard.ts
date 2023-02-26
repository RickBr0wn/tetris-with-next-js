import { useState } from 'react'

export const useBoard = () => {
	const [board, setBoard] = useState([])
	return { useBoard: [[]] }
}
