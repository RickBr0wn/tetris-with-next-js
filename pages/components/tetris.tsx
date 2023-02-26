import type { Dispatch, FC, SetStateAction } from 'react'
import styles from '@/styles/tetris.module.css'
import Board from './board'

type Props = {
	rows: number
	columns: number
	setGameOver: Dispatch<SetStateAction<boolean>>
}

const Tetris: FC<Props> = ({ rows, columns, setGameOver }): JSX.Element => {
	return <Board rows={rows} columns={columns} />
}

export default Tetris

// Path: pages/components/tetris.tsx
// Created at: 16:46:29 - 26/02/2023
// Language: Typescript
// Framework: React/Next.js
