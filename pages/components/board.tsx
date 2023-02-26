import { FC } from 'react'

type Props = {
	rows: number
	columns: number
}

const Board: FC<Props> = ({ rows, columns }): JSX.Element => {
	return <h1>Board</h1>
}

export default Board

// Path: pages/components/board.tsx
// Created at: 17:10:45 - 26/02/2023
// Language: Typescript
// Framework: React/Next.js
