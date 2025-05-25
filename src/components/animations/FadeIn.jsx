import { motion, useInView, useScroll } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = ''
}) => {
  const ref = useRef(null)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const isInView = useInView(ref, {
    amount: 0.9,
    margin: "0px 0px -5% 0px",
    once: false
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={isInView 
        ? { opacity: 1, transform: 'translateY(0)' } 
        : { 
            opacity: 0, 
            transform: scrollDirection === 'up' 
              ? 'translateY(-20px)' 
              : 'translateY(20px)'
          }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn 