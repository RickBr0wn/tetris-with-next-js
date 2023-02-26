import { FC } from 'react'
import styles from '@/styles/menu.module.css'

type Props = {
	onClick: () => void
}

const Menu: FC<Props> = ({ onClick }): JSX.Element => (
	<div className={styles.menu}>
		<button className={styles.button} onClick={onClick}>
			Play Tetris
		</button>
	</div>
)

export default Menu

// Path: pages/components/menu.tsx
// Created at: 23:54:39 - 21/02/2023
// Language: Typescript
// Framework: React/Next.js
