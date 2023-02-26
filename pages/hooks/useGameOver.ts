import { useCallback, useState } from 'react'

const useGameOver = () => {
	const [gameOver, setGameOver] = useState<boolean>(false)

	const resetGameOver = useCallback(() => {
		setGameOver(false)
	}, [])

	return { gameOver, setGameOver, resetGameOver }
}

export default useGameOver

// Path: pages/hooks/useGameOver.tsx
// Created at: 00:11:16 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
