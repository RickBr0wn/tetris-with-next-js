import { defaultCell } from './defaultCell'

type BoardProps = {
	rows: number
	columns: number
}

export const buildBoard = ({ rows, columns }: BoardProps) => {
	const builtRows = Array.from({ length: rows }, () =>
		Array.from({ length: columns }, () => ({ ...defaultCell }))
	)

	return { rows: builtRows, size: { rows, columns } }
}
