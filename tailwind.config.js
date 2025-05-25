/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1680px',
      '3xl': '1920px'
    },
    fontFamily: {
      Noto: ['Noto Sans TC', 'sans-serif'],
      Expletus: ['Expletus Sans', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif']
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '32px',
        xl: '40px'
      },
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1680px',
        '3xl': '1920px'
      }
    },
    zIndex: {
      '-10': '-10',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto'
    },
    transitionTimingFunction: {
      easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
      easeOutQuint: 'cubic-bezier(0.33, 1, 0.68, 1)'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        pr: {
          light: '#A0BEFF',
          DEFAULT: '#110AFF',
          dark: '#285388'
        },
        sec: {
          light: '#FFE1C6',
          DEFAULT: '#F0923E',
          dark: '#8C4B1D'
        },
        success: {
          DEFAULT: '#ABE06D',
          dark: '#61A035'
        },
        alert: {
          light: '#F0923E',
          DEFAULT: '#E34E1F'
        },
        bgc: {
          paper: '#FCFCFC',
          DEFAULT: '#D9D9D9'
        },
        ad: {
          DEFAULT: '#5A78FF',
          light: '#8CD3F8'
        },
        gray: {
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#1D2939',
          800: '#101828'
        },
        txt: {
          'super-light': '#98A2B3',
          light: '#667085',
          DEFAULT: '#475467', // 預設文字顏色
          dark: '#101828',
          white: '#FFFFFF',
          black: '#000000'
        }
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
      },
      boxShadow: {
        btn: '0px 4px 25px rgba(46, 46, 46, 0.1)',
        card: '0px 4px 10px rgba(57, 87, 132, 0.2)',
        filter: '0px 4px 25px rgba(12, 12, 12, 0.1)'
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px'
      },
      fontSize: {
        'dt/zh/5xl': [
          '3rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'dt/zh/4xl': [
          '2rem',
          {
            lineHeight: '160%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'dt/zh/3xl': [
          '1.5rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'dt/zh/2xl': [
          '1.25rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'dt/zh/1xl': [
          '1rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'dt/zh/7xl': [
          '4rem',
          {
            lineHeight: '120%',
            letterSpacing: '1.28px',
            fontWeight: '500'
          }
        ],
        'dt/zh/6xl': [
          '3rem',
          {
            lineHeight: '120%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'dt/zh/base': [
          '1rem',
          {
            lineHeight: '150%',
            letterSpacing: '0.32px',
            fontWeight: '400'
          }
        ],
        'dt/zh/lg': [
          '1.125rem',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
            fontWeight: '400'
          }
        ],
        'dt/zh/xs': [
          '0.875rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '400'
          }
        ],
        'dt/zh/link-xs': [
          '0.875rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '400',
            textDecoration: 'underline'
          }
        ],
        'dt/zh/btn-lg': [
          '1rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '700'
          }
        ],
        'dt/zh/btn-md': [
          '0.875rem',
          {
            lineHeight: '140%',
            letterSpacing: '0.28px',
            fontWeight: '700'
          }
        ],
        'dt/zh/btn-xs': [
          '0.875rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'mb/zh/5xl': [
          '1.75rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'mb/zh/4xl': [
          '1.25rem',
          {
            lineHeight: '160%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'mb/zh/3xl': [
          '1.125rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'mb/zh/2xl': [
          '1rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'mb/zh/1xl': [
          '0.875rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'mb/zh/7xl': [
          '3.5rem',
          {
            lineHeight: '120%',
            letterSpacing: '1.12px',
            fontWeight: '500'
          }
        ],
        'mb/zh/6xl': [
          '2rem',
          {
            lineHeight: '120%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ],
        'mb/zh/base': [
          '0.875rem',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
            fontWeight: '400'
          }
        ],
        'mb/zh/lg': [
          '1rem',
          {
            lineHeight: '150%',
            letterSpacing: '0px',
            fontWeight: '400'
          }
        ],
        'mb/zh/xs': [
          '0.75rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '400'
          }
        ],
        'mb/zh/link-xs': [
          '0.75rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '400',
            textDecoration: 'underline'
          }
        ],
        'mb/zh/btn-lg': [
          '1rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '700'
          }
        ],
        'mb/zh/btn-md': [
          '0.875rem',
          {
            lineHeight: '140%',
            letterSpacing: '0.28px',
            fontWeight: '700'
          }
        ],
        'mb/zh/btn-xs': [
          '0.875rem',
          {
            lineHeight: '140%',
            letterSpacing: '0px',
            fontWeight: '500'
          }
        ]
      }
    }
  },
  plugins: [],
}

export default config;
