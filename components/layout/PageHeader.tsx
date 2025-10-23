import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backHref?: string
  height?: 'sm' | 'md' | 'lg' | 'xl'
  showBackButton?: boolean
  rightElement?: React.ReactNode
  className?: string
}

export default function PageHeader({
  title,
  subtitle,
  backHref,
  height = 'md',
  showBackButton = true,
  rightElement,
  className = ''
}: PageHeaderProps) {
  const heightStyles = {
    sm: 'h-[180px]',
    md: 'h-[219px]',
    lg: 'h-[268px]',
    xl: 'h-[274px]'
  }

  return (
    <header
      className={`h-[277px] w-full rounded-b-2xl bg-[#2C40FF] px-4 pt-12 px-4 pt-12 ${heightStyles[height]} ${className}`}
    >
      {showBackButton && backHref && (
        <Link href={backHref}>
          <img src="/assets/icons/arrow-left-blue.svg" alt="Back" />
        </Link>
      )}

      <div className="absolute left-1/2 top-12 -translate-x-1/2">
        <h1 className="mb-[3px] whitespace-nowrap text-center font-jakarta text-xl font-bold leading-[25.2px] text-[#FFFFFF]">
          {title}
        </h1>
        {subtitle && (
          <p className="whitespace-nowrap text-center font-jakarta font-semibold leading-[20.16px] text-[#AEB5FF]">
            {subtitle}
          </p>
        )}
      </div>

      {rightElement && (
        <div className="absolute right-4 top-12">{rightElement}</div>
      )}
    </header>
  )
}
