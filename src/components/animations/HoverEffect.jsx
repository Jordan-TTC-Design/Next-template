import { motion } from 'framer-motion'

const HoverEffect = ({ 
  children, 
  scale = 1.05,
  rotate = 0,
  className = ''
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale,
        rotate,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default HoverEffect 