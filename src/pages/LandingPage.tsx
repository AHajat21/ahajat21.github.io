// Animate background of TITLE SECTION to change color
// Add arrow to scroll down
// Ripple background color effect in Project Section

import { useState, useRef } from 'react'
import { motion } from "motion/react"
import emailjs from '@emailjs/browser'

import styles from "../styles/landingPage.module.css"
import ProjectCard from '../components/ProjectCard'

const LandingPage = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isContactSuccess, setIsContactSuccess] = useState(true);

	const sendEmail = () => {
		if (!form.current) return;

    	emailjs.sendForm(
			'service_nn74uqw', 'template_sxlhopd', form.current, {publicKey: 'G_mnDtsBaHaS8wmGn'}
		)
      .then(
        () => setIsContactSuccess(true),
        (error) => {
          console.log('FAILED...', error);
        },
      );
	}

  	return (
		<div className={styles.landingPage}>

			<header className={styles.titleSection}>
				<p className={styles.eyebrow}>// PORTFOLIO</p>
				<h1 className={styles.name}>Ahmad <br /> Hajat</h1>
				<p className={styles.description}>
					Builder &amp; tinkerer. From games to 3D modelling to web apps - I make things and learn with projects.
				</p>
				
				<div className={styles.skills}>
					<span className={styles.skillCard}>React</span>
					<span className={styles.skillCard}>Typescript</span>
					<span className={styles.skillCard}>CSS</span>
				</div>

				<nav className={styles.navList}>
					<a href="#projects">PROJECTS</a>
					<a href="#contacts">CONTACT</a>
				</nav>

				<span className={styles.scrollHint}>↓ scroll</span>
			</header>

			<div className={styles.divider} />

			<motion.main id='projects' className={styles.projectSection}
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.7, ease: "easeInOut"}}
				viewport={{amount: 0.1}}
			>
				<p className={styles.sectionLabel}>Selected work</p>

				<div className={styles.projectGrid}>
					<ProjectCard
						title="TaskFlow"
						shortDesc="Canvas website with drag-and-drop and real-time sync via Supabase."
						longDesc="Login and manage your projects using customisable drag-and drop items."
						stack="React · Supabase"
						date="Dec 2025 - Feb 2026"
						link="https://task-flow-ecru-nine.vercel.app/"
					/>
					<ProjectCard
						title="Web Dev Projects"
						shortDesc= "A collection of vanilla JS projects — clocks, calculators, mini-games — that built the foundations I now use in React."
						longDesc="Learnt alot"
						stack="HTML · CSS · Javascript"
						date="Aug - Oct 2025"
						link=''
					/>
					<ProjectCard
						title="Unity Game"
						shortDesc="3D game built in Unity"
						longDesc="During our A Level Computer Science course, we developed a game as part of our NEA coursework. Across 4 months I developed and documented the development of another 2d top-down tank shooter game, this time using the Unity game engine and the scripting language C#.
									We also learnt the basics of HTML, CSS and JavaScript.
									This sparked the passion in me once again, and as of recently I have further developed my skills in these languages. (All the project files from below are accessible from my Github)"
						stack="C# · Unity"
						date="Jan - Mar 2025"
						link='https://github.com/AHajat21/NEA_Project'
					/>
					<ProjectCard
						title="Blender 3D animation"
						shortDesc="Animating and rendering a 3D model"
						longDesc="Taught myself 3D modelling, rigging, and rendering from scratch — expanded how I think about spatial design."
						stack="Blender"
						date="Jul 2023"
						link=""
					/>
					<ProjectCard
						title="Godot Game"
						shortDesc="2D game in Godot engine"
						longDesc="As my first developer experience, it's where I found the enjoyment in learning and implementing new concepts in exciting projects."
						stack="GDScript · Godot"
						date="Apr - Jun 2023"
						link="https://ahajat21.itch.io/"
					/>
				</div>
			</motion.main>

			<div className={styles.divider} />

			<footer id='contacts' className={styles.contactSection} >
				<form className={styles.contactBox} ref={form} onSubmit={sendEmail}>
					<p className={styles.sectionLabel}>Reach out</p>
					<h2 className={styles.contactBoxTitle}>Let's talk</h2>
					<p className={styles.contactBoxSubtitle}>
						Have a project, a question, or just want to say hi? :)
					</p>

					<div className={styles.inputWrap}>
						<label className={styles.inputLabel}>NAME</label>
						<input className={styles.formInput} type="text" name="user_name" placeholder="Your name" />
					</div>
					<div className={styles.inputWrap}>
						<label className={styles.inputLabel}>EMAIL</label>
						<input className={styles.formInput} type="text" name="user_email" placeholder="your@email.com" />
					</div>
					<div className={styles.inputWrap}>
						<label className={styles.inputLabel}>MESSAGE</label>
						<textarea className={`${styles.formInput} ${styles.messageInput}`} name="message" placeholder="What's on your mind..." />
					</div>

					<motion.input className={styles.sendButton}
						type="submit"
						value="Send message →"
						whileHover={{scale: 1.02}}
						whileTap={{scale: 0.98}}
					/>

					{/* IF MESSAGE HAS BEEN SENT */}
					{isContactSuccess && (
						<motion.div className={styles.contactSuccessBox}
							animate={{transform: "translateX(0)"}}
							transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}
						>
							<button onClick={() => setIsContactSuccess(false)}><b>✘</b></button>
							<span><b>✓</b></span>
							<p>Thank you!</p>
						</motion.div>
					)}
				</form>

				<nav className={styles.contactLinks}>
					<a target="_blank" href="https://github.com/AHajat21">
						<img src="/Github-Logo.png" width="36" height="35" />
					</a>

					<a target="_blank" href="https://www.linkedin.com/in/ahmad-hajat-1a8466292">
						<img src="/Li-Logo.png" width="79" height="20" />
					</a>

					<a target="_blank" href="mailto: ahajat60@gmail.com">ahajat60@gmail.com</a>
				</nav>
			</footer>
			
		</div>
	)
}

export default LandingPage