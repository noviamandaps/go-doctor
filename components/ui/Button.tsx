import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  icon?: string
  iconAlt?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconAlt = 'Icon',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-[10px] rounded-[100px] font-jakarta font-bold leading-[20.16px] transition-all duration-200'

  const variantStyles = {
    primary: 'bg-[#2C40FF] text-[#FFFFFF] hover:bg-[#2436CC] active:bg-[#1B2999]',
    secondary: 'bg-[#2C40FF17] text-[#2C40FF] border border-[#2C40FF] hover:bg-[#2C40FF2A]',
    outline: 'bg-transparent text-[#2C40FF] border border-[#2C40FF] hover:bg-[#2C40FF08]'
  }

  const sizeStyles = {
    sm: 'h-[48px] px-4 text-sm',
    md: 'h-[56px] px-6',
    lg: 'h-[64px] px-8 text-lg'
  }

  const disabledStyles = disabled
    ? 'bg-[#F1F1F1] text-[#757C98] cursor-not-allowed hover:bg-[#F1F1F1]'
    : ''

  const widthStyles = fullWidth ? 'w-full' : ''

  const combinedStyles = `${baseStyles} ${
    disabled ? disabledStyles : variantStyles[variant]
  } ${sizeStyles[size]} ${widthStyles} ${className}`

  const content = (
    <>
      {icon && <img src={icon} alt={iconAlt} className="size-5" />}
      <span>{children}</span>
    </>
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedStyles}>
      {content}
    </button>
  )
}
