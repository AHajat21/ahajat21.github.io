import { motion } from 'motion/react'

import styles from "../styles/header.module.css"

const Header = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <header className={styles.header}>
      <motion.button
        className={styles.pageUpButton}
        onClick={scrollToTop}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        ⏏ TOP
      </motion.button>
    </header>
  )
}

export default Header