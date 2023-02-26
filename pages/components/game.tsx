import type { Dispatch, FC, SetStateAction } from 'react'
import log from './log'
import Menu from './menu'

import Tetris from './tetris'
import useGameOver from '../hooks/useGameOver'
// import styles from '@/styles/Game.module.css'

type Props = {
	columns: number
	rows: number
}

const Game: FC<Props> = ({ columns, rows }): JSX.Element => {
	const { gameOver, setGameOver, resetGameOver } = useGameOver()

	const start = () => {
		resetGameOver()
		log(`gameOver: ${gameOver}`)
	}

	return (
		<div>
			{gameOver ? (
				<Menu onClick={start} />
			) : (
				<Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
			)}
		</div>
	)
}

export default Game

// Path: pages/components/game.tsx
// Created at: 23:50:34 - 21/02/2023
// Language: Typescript
// Framework: React/Next.js
