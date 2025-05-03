import { motion } from 'framer-motion'

const ScaleIn = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  scale = 0.8,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ scale, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
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

export default ScaleIn 