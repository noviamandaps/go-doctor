import Link from 'next/link'
import type { Doctor } from '@/types/doctor'
import DoctorInfo from './DoctorInfo'
import DoctorStats from './DoctorStats'

interface DoctorCardProps {
  doctor: Doctor
  variant?: 'home' | 'search' | 'compact'
  showBookButton?: boolean
  className?: string
}

export default function DoctorCard({
  doctor,
  variant = 'search',
  showBookButton = true,
  className = ''
}: DoctorCardProps) {
  // Home variant - used in homepage swiper
  if (variant === 'home') {
    return (
      <Link
        href={`/doctor/${doctor.id}`}
        className={`block rounded-3xl border border-[#F1F1F1] transition-all hover:border-[#2C40FF] hover:shadow-md ${className}`}
      >
        <div className="relative h-[180px] w-full overflow-hidden rounded-t-3xl">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-full w-full object-cover"
          />
          {doctor.available && (
            <img
              src="/assets/icons/homepage-recommended-available.svg"
              alt="Available"
              className="absolute left-4 top-4"
            />
          )}
        </div>
        <div className="flex h-[48px] w-full items-center justify-between bg-[#2C40FF] px-5 py-[14px]">
          <p className="font-jakarta font-bold leading-[20.16px] text-[#FFFFFF]">
            {doctor.hospital}
          </p>
          <img
            src="/assets/icons/homepage-recomended-hospital.svg"
            alt="Hospital"
          />
        </div>
        <div className="w-full overflow-hidden rounded-b-3xl bg-[#FFFFFF] p-5">
          <div className="mb-2 flex items-center gap-x-[6px]">
            <img
              src="/assets/icons/homepage-recommended-star45.svg"
              alt="Star"
            />
            <p className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
              {doctor.rating}
            </p>
          </div>
          <h2 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
            {doctor.name}
          </h2>
          <p className="mb-4 font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
            {doctor.specialty}
          </p>
          <div className="flex items-end gap-x-1">
            <p className="text-base font-extrabold leading-[20.16px] text-[#161616]">
              Rp {doctor.price}
            </p>
            <span className="text-base font-semibold leading-[20.16px] text-[#757C98]">
              /hours
            </span>
          </div>
        </div>
      </Link>
    )
  }

  // Search variant - used in search results
  if (variant === 'search') {
    return (
      <article className={`space-y-5 rounded-3xl bg-[#FFFFFF] p-5 ${className}`}>
        <Link href={`/doctor/${doctor.id}`}>
          <DoctorInfo doctor={doctor} />
        </Link>

        <DoctorStats
          experience={doctor.experience}
          rating={doctor.rating}
          verified={doctor.verified}
        />

        {showBookButton && (
          <footer className="flex items-center justify-between space-x-2">
            <div>
              <p className="mb-[2px] whitespace-nowrap font-jakarta text-[18px] font-bold leading-[22.68px] text-[#FF5050]">
                Rp {doctor.price}
              </p>
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                /hour
              </p>
            </div>
            <Link
              href={`/booking-confirmation?doctorId=${doctor.id}`}
              className="flex h-[52px] w-[180px] items-center justify-center rounded-[100px] border border-[#2C40FF] bg-[#2C40FF17] font-jakarta font-bold leading-[20.16px] text-[#2C40FF] transition-all hover:bg-[#2C40FF] hover:text-white"
            >
              Book Now
            </Link>
          </footer>
        )}
      </article>
    )
  }

  // Compact variant - used in detail pages
  return (
    <div className={`space-y-5 rounded-3xl bg-[#FFFFFF] p-5 ${className}`}>
      <DoctorInfo doctor={doctor} />
      <DoctorStats
        experience={doctor.experience}
        rating={doctor.rating}
        verified={doctor.verified}
      />
    </div>
  )
}
