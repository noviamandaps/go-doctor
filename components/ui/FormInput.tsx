'use client'

import { useState } from 'react'

interface FormInputProps {
  label?: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'number'
  name: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  iconActive?: string
  iconInactive?: string
  iconAlt?: string
  className?: string
}

export default function FormInput({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  iconActive,
  iconInactive,
  iconAlt = 'Icon',
  className = ''
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <label className={`block ${className}`}>
      {label && (
        <p className="mb-3 font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
          {label}
        </p>
      )}
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          placeholder={placeholder}
          className="peer h-[56px] w-full rounded-[100px] border border-[#F1F1F1] bg-white pl-12 font-jakarta font-bold leading-[20.16px] text-[#161616] placeholder:font-jakarta placeholder:font-bold placeholder:leading-[20.16px] placeholder:text-[#757C98] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-white hover:border-[#2C40FF] focus:outline-none"
        />
        {iconInactive && (
          <img
            src={iconInactive}
            alt={iconAlt}
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
              value || isFocused ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
        {iconActive && (
          <img
            src={iconActive}
            alt={iconAlt}
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
              value || isFocused ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
    </label>
  )
}
