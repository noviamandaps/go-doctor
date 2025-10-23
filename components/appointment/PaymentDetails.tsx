interface PaymentDetailsProps {
  duration?: string
  price: string | number
  tax?: number
  taxLabel?: string
  totalPrice: string | number
  showDuration?: boolean
  className?: string
}

export default function PaymentDetails({
  duration = '1 Hour',
  price,
  tax,
  taxLabel = 'PPN 11%',
  totalPrice,
  showDuration = true,
  className = ''
}: PaymentDetailsProps) {
  const formattedPrice = typeof price === 'number' ? price.toLocaleString('id-ID') : price
  const formattedTax = tax
    ? typeof tax === 'number'
      ? tax.toLocaleString('id-ID')
      : tax
    : null
  const formattedTotal =
    typeof totalPrice === 'number' ? totalPrice.toLocaleString('id-ID') : totalPrice

  return (
    <section className={`w-full space-y-4 rounded-3xl bg-[#FFFFFF] px-4 py-8 ${className}`}>
      <h2 className="font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
        Payment Details
      </h2>
      <div className="w-full space-y-4 rounded-3xl border border-[#F1F1F1] p-6">
        {/* Duration */}
        {showDuration && (
          <div className="flex items-center justify-between">
            <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
              Duration
            </p>
            <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
              {duration}
            </p>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">Price</p>
          <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
            Rp {formattedPrice}
          </p>
        </div>

        {/* Tax */}
        {formattedTax && (
          <div className="flex items-center justify-between">
            <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
              {taxLabel}
            </p>
            <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
              Rp {formattedTax}
            </p>
          </div>
        )}

        <hr className="w-full border-[#F1F1F1]" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
            Total Payment
          </p>
          <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
            Rp {formattedTotal}
          </p>
        </div>
      </div>
    </section>
  )
}
