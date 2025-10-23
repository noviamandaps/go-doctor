import type { Doctor } from '@/types/doctor'

interface DoctorInfoProps {
  doctor: Doctor
  size?: 'sm' | 'md' | 'lg'
  showAvailableBadge?: boolean
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export default function DoctorInfo({
  doctor,
  size = 'md',
  showAvailableBadge = true,
  orientation = 'horizontal',
  className = ''
}: DoctorInfoProps) {
  const sizeStyles = {
    sm: { container: 'h-[80px] w-[70px]', image: 'size-14' },
    md: { container: 'h-[120px] w-[100px]', image: 'size-20' },
    lg: { container: 'h-[180px] w-[150px]', image: 'size-32' }
  }

  const containerClass =
    orientation === 'horizontal' ? 'flex items-center gap-x-3' : 'flex flex-col items-center gap-y-3'

  const textAlignClass = orientation === 'horizontal' ? 'text-left' : 'text-center'

  return (
    <div className={`${containerClass} ${className}`}>
      <div className={`relative ${sizeStyles[size].container}`}>
        <img
          className="h-full w-full rounded-ee-md rounded-es-3xl rounded-se-3xl rounded-ss-md bg-[#F2F2F2] object-cover"
          src={doctor.image}
          alt={doctor.name}
        />
        {showAvailableBadge && doctor.available && (
          <img
            className="absolute left-2 top-2"
            src="/assets/icons/alert-online.svg"
            alt="Available"
          />
        )}
      </div>
      <div className={`space-y-2 ${textAlignClass}`}>
        <h3 className="font-jakarta font-bold leading-[20.16px] text-[#2C40FF]">
          {doctor.hospital}
        </h3>
        <h2 className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
          {doctor.name}
        </h2>
        <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
          {doctor.specialty}
        </p>
      </div>
    </div>
  )
}
