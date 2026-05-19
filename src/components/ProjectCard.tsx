// Animate changing colors
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"

import styles from "../styles/projectCard.module.css"

interface ProjectCardProps {
	title: string,
	shortDesc: string,
	longDesc: string,
	stack: string,
	date: string,
	link: string
}
const ProjectCard= ({title, shortDesc, longDesc, stack, date, link}: ProjectCardProps) => {
	const [open, setOpen] = useState(false)

	return (
		<motion.div className={styles.projectCard}
			onClick={() => setOpen(!open)}
			initial={{x: "100%"}}
			whileInView={{x: 0}}
			transition={{duration: 0.6, ease: "easeOut"}}
			viewport={{once: true}}
		>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.shortDesc}>{shortDesc}</p>
				<AnimatePresence>
					{open && (
						<motion.p className={styles.longDesc}
							initial={{opacity: 0, height: 0, marginBottom: 0}}
							animate={{opacity: 1, height: 'auto', marginBottom: '0.8rem'}}
							exit={{opacity: 0, height: 0, marginBottom: 0}}
							transition={{duration: 0.25, ease: 'easeInOut'}}
						>
							{longDesc}
						</motion.p>
					)}
				</AnimatePresence>

				<p className={styles.stackList}>{stack}</p>
			</div>


			<div className={styles.info}>
				<p className={styles.projectDate}>{date}</p>
				<a className={styles.arrow} href={link} target="_blank">→</a>
			</div>
		</motion.div>
	)
}

export default ProjectCard