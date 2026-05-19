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
	const [isContactSuccess, setIsContactSuccess] = useState(false);

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
						longDesc="Built a user-friendly project management tool where users can log in, create, and customize tasks using an intuitive drag-and-drop interface.
									Implemented real-time synchronization with Supabase to ensure seamless collaboration across devices.
									This project solidified my skills in React, state management, and backend integration."
						stack="React · Supabase"
						date="Dec 2025 - Feb 2026"
						link="https://task-flow-ecru-nine.vercel.app/"
					/>
					<ProjectCard
						title="Web Dev Projects"
						shortDesc= "A collection of interactive vanilla JS projects — clocks, calculators, mini-games — that built the foundations I now use in React."
						longDesc="Developed a series of small but impactful projects (e.g., clocks, calculators, mini-games) using HTML, CSS, and vanilla JavaScript.
									These projects were instrumental in understanding core web development concepts, DOM manipulation, and event handling, which I now apply in my React work."
						stack="HTML · CSS · Javascript"
						date="Aug - Oct 2025"
						link=''
					/>
					<ProjectCard
						title="Unity Game"
						shortDesc="3D game built in Unity"
						longDesc="As part of my A Level Computer Science NEA, I designed and developed a 2D top-down tank shooter game using Unity and C#.
									This project introduced me to more advanced game mechanics, object-oriented programming in C#, and Unity.
									It reignited my passion for coding and set the stage for my journey into web development."
						stack="C# · Unity"
						date="Jan - Mar 2025"
						link='https://github.com/AHajat21/NEA_Project'
					/>
					<ProjectCard
						title="Blender 3D animation"
						shortDesc="Animating and rendering a 3D model"
						longDesc="Taught myself 3D modelling, and rendering from scratch — expanding how I think about spatial design."
						stack="Blender"
						date="Jul 2023"
						link=""
					/>
					<ProjectCard
						title="Godot Game"
						shortDesc="2D game in Godot engine"
						longDesc="As my first developer experience, this where I found the enjoyment in learning and implementing new concepts in exciting projects."
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