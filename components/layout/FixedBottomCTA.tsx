import Link from 'next/link'

interface FixedBottomCTAProps {
  label: string
  price: string | number
  buttonText: string
  buttonHref: string
  onButtonClick?: () => void
  className?: string
}

export default function FixedBottomCTA({
  label,
  price,
  buttonText,
  buttonHref,
  onButtonClick,
  className = ''
}: FixedBottomCTAProps) {
  const formattedPrice = typeof price === 'number' ? price.toLocaleString('id-ID') : price

  return (
    <nav className={`fixed bottom-0 left-0 right-0 z-30 mx-auto ${className}`}>
      <div className="mx-auto max-w-[640px]">
        <div className="flex h-[88px] items-center justify-between rounded-t-3xl bg-[#FFFFFF] px-4 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div>
            <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
              {label}
            </p>
            <h2 className="font-jakarta text-2xl font-extrabold leading-[30.24px] text-[#161616]">
              Rp {formattedPrice}
            </h2>
          </div>
          <Link
            href={buttonHref}
            onClick={onButtonClick}
            className="flex h-[56px] w-[189px] items-center justify-center rounded-[100px] bg-[#2C40FF] font-jakarta font-bold leading-[20.16px] text-[#FFFFFF] transition-all hover:bg-[#2436CC] active:bg-[#1B2999]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </nav>
  )
}
