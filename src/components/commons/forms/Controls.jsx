'use client'

import { useState, useEffect, useRef } from 'react'
import { useFloating, autoUpdate, flip, size } from '@floating-ui/react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Icon from '@/components/atoms/Icon'

const Controls = ({
  intent = 'trans',
  name = null,
  id = null,
  autocomplete = null,
  maxlength = null,
  max = null,
  min = null,
  placeholder = null,
  inputmode = null,
  icon = null,
  options = null,
  type = 'text',
  value = '',
  required = false,
  borderless = false,
  transparent = false,
  ctrlKFocus = false,
  disabled = false,
  error = null,
  disabledErrorText = false,
  noHidePasswordIcon = false,
  isStepFour = false,
  inputSize = 'md',
  onChange,
  onBlur,
  onSetRef,
  onDeleteAddress
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [toField, setToField] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  
  const selectEl = useRef(null)
  const textareaEl = useRef(null)
  const inputEl = useRef(null)
  const dropdownEl = useRef(null)

  const { refs, floatingStyles, update } = useFloating({
    open: isDropdownOpen,
    onOpenChange: setIsDropdownOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip({ padding: 8 }),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`
          })
        }
      })
    ]
  })

  useEffect(() => {
    if (selectEl.current) {
      onSetRef?.(selectEl.current)
    } else if (textareaEl.current) {
      onSetRef?.(textareaEl.current)
    } else {
      onSetRef?.(inputEl.current)
    }

    if (type === 'select') {
      setDefaultSelectedOption()
    }
  }, [])

  useEffect(() => {
    if (type === 'select') {
      setDefaultSelectedOption()
    }
  }, [options])

  const setDefaultSelectedOption = () => {
    if (value !== '' && value !== null && value !== undefined) return

    const defaultSelected = options?.find(opt => opt.selected)
    if (defaultSelected) {
      onChange?.(defaultSelected.value)
    }
  }

  useEffect(() => {
    if (ctrlKFocus) {
      const fieldFocusHook = (e) => {
        if (e.ctrlKey && e.key === 'k') {
          e.preventDefault()
          inputEl.current?.focus()
        } else if (e.key === 'Escape') {
          inputEl.current?.blur()
        }
      }

      window.addEventListener('keydown', fieldFocusHook)
      return () => window.removeEventListener('keydown', fieldFocusHook)
    }
  }, [ctrlKFocus])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    if (!isDropdownOpen) {
      setToField(true)
      update()
    } else {
      setTimeout(() => {
        setToField(false)
      }, 300)
    }
  }

  const selectOption = (option) => {
    onChange?.(option.value)
    setIsDropdownOpen(false)
    setTimeout(() => {
      setToField(false)
    }, 300)
  }

  const getInputClass = () => {
    const base = [
      'placeholder-gray-500 focus:outline-none w-full',
      type === 'textarea' ? 'h-40 rounded-lg' : 'rounded-full'
    ]

    base.push(
      type === 'password' ? 'pl-5 pr-9' :
      type === 'select' ? (value === '' ? 'px-5 text-txt-light' : 'px-5') : 'px-5'
    )
    base.push(transparent ? 'bg-transparent text-txt border-gray-500 border' : 'bg-[#292929]/70 text-white')
    base.push(disabled ? '!bg-gray-200 text-txt-light' : '')
    base.push(error ? '!border-alert !text-alert !placeholder-alert !bg-alert-light' : '')
    base.push(inputSize === 'sm' ? 'max-h-[32px] py-[5px] text-zh-body-2' : 'max-h-[44px] py-[11px] text-zh-body-1')

    if (icon) {
      base.push(inputSize === 'sm' ? 'pl-[34px]' : 'pl-[44px]')
    }

    return base.join(' ')
  }

  const getIconClass = () => {
    const base = []
    base.push(transparent ? 'text-txt' : 'text-white')
    return base.join(' ')
  }

  const getComputedType = () => {
    if (noHidePasswordIcon && type === 'password') {
      return 'password'
    }
    return options ? 'select' : type
  }

  const selectedLabel = options?.find(opt => opt.value === value)?.label || ''

  return (
    <div className="relative">
      {icon && (
        <div className={`pointer-events-none absolute top-1/2 z-1 flex size-[22px] -translate-y-1/2 items-center justify-center rounded-full ${inputSize === 'sm' ? 'left-4' : 'left-2'}`}>
          <Icon name={icon} className="size-4 text-gray-400" />
        </div>
      )}

      {getComputedType() === 'date' && (
        <div className="relative">
          <input
            id={id}
            name={name}
            type={getComputedType()}
            className={getInputClass()}
            placeholder={placeholder}
            disabled={disabled}
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={() => {
              if (required) {
                onBlur?.(name)
              }
            }}
          />
        </div>
      )}

      {getComputedType() === 'select' && isDesktop && (
        <div className="relative">
          <div
            ref={refs.setReference}
            className="relative cursor-pointer select-none rounded-full border border-gray-500 bg-white px-5 py-3"
            tabIndex={1}
            onClick={toggleDropdown}
          >
            <span className="text-txt-dark">
              {selectedLabel || placeholder}
            </span>
            <Icon
              name="select-down"
              className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </div>
          {toField && (
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={`z-10 absolute max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white shadow-lg transition-opacity duration-200 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`}
            >
              {options?.map((option) => (
                <div
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 px-5 py-3 text-txt-dark duration-300 hover:bg-gray-200"
                  onClick={() => selectOption(option)}
                >
                  {isStepFour && option.deletable && (
                    <Icon
                      name="trash"
                      className="text-txt transition-all hover:text-txt-dark"
                      onClick={(e) => {
                        e.stopPropagation()
                        onDeleteAddress?.(option.value)
                      }}
                    />
                  )}
                  {option.label ?? option}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {getComputedType() === 'select' && !isDesktop && (
        <div className="relative">
          <select
            id={id}
            name={name}
            className={getInputClass()}
            disabled={disabled}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={() => {
              if (required) {
                onBlur?.(name)
              }
            }}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options?.map((option) => (
              <option
                key={option.label ?? option}
                disabled={option.disabled}
                value={option.value ?? option}
              >
                {option.label ?? option}
              </option>
            ))}
          </select>
          <div className={`pointer-events-none absolute inset-y-1 right-1 flex aspect-square items-center justify-center rounded-full bg-white ${error ? '!bg-alert-light' : ''}`}>
            <Icon
              name="select-down"
              className={`bg-white text-txt-dark ${disabled ? 'bg-gray-100 text-txt-light' : ''} ${error ? '!bg-alert-light' : ''}`}
            />
          </div>
        </div>
      )}

      {getComputedType() === 'textarea' && (
        <textarea
          id={id}
          name={name}
          className={getInputClass()}
          maxLength={maxlength}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onBlur={() => {
            if (required) {
              onBlur?.(name)
            }
          }}
        />
      )}

      {getComputedType() !== 'date' && getComputedType() !== 'select' && getComputedType() !== 'textarea' && (
        <div className="relative">
          <input
            id={id}
            ref={inputEl}
            tabIndex={0}
            name={name}
            maxLength={maxlength}
            max={max}
            min={min}
            inputMode={inputmode}
            autoComplete={autocomplete}
            placeholder={placeholder}
            type={noHidePasswordIcon ? 'password' : (showPassword && type === 'password' ? 'text' : type)}
            className={getInputClass()}
            disabled={disabled}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={() => {
              if (required) {
                onBlur?.(name)
              }
            }}
          />
          {type === 'password' && !noHidePasswordIcon && (
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              className="absolute inset-y-1/2 right-4 size-4 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Controls
