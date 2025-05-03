const Button = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  variant = 'primary' 
}) => {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button 