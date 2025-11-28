'use client'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaRocket, FaFileDownload } from 'react-icons/fa'
import { FC, useState, useEffect } from 'react'
import { HiSparkles } from 'react-icons/hi'
import { NavbarButton } from '../ui/resizable-navbar'
import { TrackableContact } from '@/components/analytics/TrackableElement'
import { useAnalyticsContext } from '@/components/analytics/AnalyticsProvider'

const HeroContentWithAnalytics: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { trackClick } = useAnalyticsContext()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  function smoothScrollTo(element: HTMLElement, duration = 1000) {
    const start = window.scrollY
    const end = element.getBoundingClientRect().top + start
    const distance = end - start
    const startTime = performance.now()

    function scroll(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)

      window.scrollTo(0, start + distance * ease)

      if (elapsed < duration) {
        requestAnimationFrame(scroll)
      }
    }

    requestAnimationFrame(scroll)
  }

  const handleConnectClick = (e: React.MouseEvent<HTMLElement>) => {
    trackClick(e, 'hero-connect-button', 'Let\'s Connect')
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      smoothScrollTo(contactSection, 1500)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-4 sm:px-8 lg:px-16 w-full max-w-6xl mx-auto pt-20 sm:pt-24 lg:pt-28"
    >

      {/* Interactive Cursor */}
      <div
        className="fixed pointer-events-none z-0 w-6 h-6 bg-primary/20 rounded-full blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Main Hero Section */}
      <motion.div variants={itemVariants} className="space-y-6">
        
        {/* Name Section */}
        <div className="relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
              Venkat Maddula
            </span>
          </h1>
        </div>

        {/* Title */}
        <div className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent mb-3">
            DevOps & Cloud Engineer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* Professional Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          I design and automate scalable cloud infrastructure using AWS, Azure, Kubernetes, 
          Terraform, and CI/CD pipelines — improving reliability, performance & deployment speed.
        </motion.p>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center gap-4 mt-8 mb-16"
      >
        
        {/* Connect Button */}
        <NavbarButton
          variant="primary"
          className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-500 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-all"
          onClick={handleConnectClick}
        >
          <div className="flex items-center gap-3">
            <FaRocket className="w-5 h-5 group-hover:animate-bounce" />
            Let’s Connect
          </div>
        </NavbarButton>

        {/* Resume Button */}
        <a
          href="/Venkat-Maddula-Resume.pdf"
          download
          className="group bg-card/60 backdrop-blur-sm border-primary/40 px-6 py-4 rounded-xl shadow-md hover:scale-105 transition-all flex items-center gap-3"
        >
          <FaFileDownload className="w-5 h-5" />
          Download Resume
        </a>

        {/* GitHub & LinkedIn */}
        <div className="flex items-center gap-3">
          
          {/* FIXED GITHUB LINK */}
          <TrackableContact method="github">
            <NavbarButton
              variant="secondary"
              href="https://github.com/venkateswarlu429"
              className="group bg-card/60 backdrop-blur-sm border-primary/30 hover:border-primary/60 px-6 py-4 rounded-xl shadow-md hover:scale-105"
            >
              <FaGithub className="w-5 h-5 group-hover:rotate-12 transition" />
            </NavbarButton>
          </TrackableContact>

          {/* FIXED LINKEDIN LINK */}
          <TrackableContact method="linkedin">
            <NavbarButton
              variant="secondary"
              href="https://www.linkedin.com/in/venkatswarlu-maddula/"
              className="group bg-card/60 backdrop-blur-sm border-blue-500/30 hover:border-blue-500/60 px-6 py-4 rounded-xl shadow-md hover:scale-105"
            >
              <FaLinkedin className="w-5 h-5 group-hover:rotate-12 transition" />
            </NavbarButton>
          </TrackableContact>

        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeroContentWithAnalytics
