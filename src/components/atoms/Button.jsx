import { cva } from 'class-variance-authority'
import Link from 'next/link'

const button = cva(
  [
    'cursor-pointer select-none border',
    'transition duration-300',
    'flex items-center gap-2'
  ],
  {
    variants: {
      intent: {
        primary: [
          'border-primary bg-primary text-txt-white',
          'lg:hover:border-primary-light lg:hover:bg-primary-light lg:hover:text-primary',
          'lg:focus:border-primary-light lg:focus:bg-primary-light lg:focus:outline-none lg:focus:text-txt-white',
          'lg:active:border-primary-dark lg:active:bg-primary-dark lg:active:text-txt-white',
          'disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:text-white'
        ],
        dark: [
          'border-black bg-black text-white',
          'lg:hover:border-black lg:hover:bg-black',
          'lg:focus:border-black lg:focus:bg-black lg:focus:outline-none',
          'lg:active:border-black lg:active:bg-black',
          'disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:text-white'
        ],
        secondary: [
          'border-gray-900 bg-gray-900 text-txt-white',
          'lg:hover:border-primary lg:hover:text-primary',
          'focus:outline-primary lg:focus:border-primary lg:focus:text-primary lg:focus:outline',
          'lg:active:border-primary lg:active:bg-primary lg:active:text-white',
          'disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-transparent disabled:text-txt-super-light'
        ],
        link: [
          'border-none bg-transparent text-txt-super-light underline',
          'lg:hover:text-primary',
          'disabled:cursor-not-allowed disabled:text-txt-super-light'
        ],
        white: [
          'border-gray-800 bg-white text-gray-800',
          'lg:hover:border-primary lg:hover:bg-primary lg:hover:text-txt-dark',
          'lg:focus:border-primary lg:focus:bg-primary lg:focus:text-txt-dark lg:focus:outline lg:focus:outline-primary',
          'lg:active:border-primary lg:active:bg-primary lg:active:text-white',
          'disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:text-white'
        ]
      },
      size: {
        sm: ['text-zh-btn-sm max-h-[32px] px-3 py-1 md:px-4 md:py-2'],
        md: ['text-zh-btn-md max-h-[44px] px-5 py-2 md:px-10 lg:px-12 lg:py-3'],
        lg: ['text-zh-btn-lg max-h-[48px] px-7 py-3 md:px-10 lg:min-w-[200px] lg:px-12 lg:py-3'],
        link: ['text-zh-btn-md px-3 py-0.5']
      },
      position: {
        center: 'justify-center',
        start: 'justify-start',
        end: 'justify-end'
      },
      rounded: {
        lg: 'rounded-lg',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      position: 'center',
      rounded: 'lg'
    }
  }
)

const Button = ({
  children,
  intent = 'primary',
  size = 'md',
  position = 'center',
  disabled = false,
  text = 'Button',
  href,
  type = 'button',
  rounded = 'lg',
  onClick,
  className
}) => {
  const buttonClasses = button({ intent, size, position, rounded, className })

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={buttonClasses}
      >
        {children || text}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children || text}
    </button>
  )
}

export default Button 