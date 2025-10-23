'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getDoctorById } from '@/data/doctors'
import PageHeader from '@/components/layout/PageHeader'
import DoctorCard from '@/components/doctor/DoctorCard'
import RadioOption from '@/components/ui/RadioOption'
import FixedBottomCTA from '@/components/layout/FixedBottomCTA'

export default function BookingConfirmationContent() {
  const searchParams = useSearchParams()
  const doctorId = searchParams.get('doctorId') || '1'
  const doctor = getDoctorById(doctorId) || getDoctorById('1')

  if (!doctor) {
    return (
      <main className="flex h-screen items-center justify-center bg-[#F7F8FA]">
        <div className="text-center">
          <h1 className="font-jakarta text-2xl font-bold text-[#161616]">Doctor not found</h1>
          <Link href="/search-result" className="mt-4 inline-block text-[#2C40FF]">
            Back to search results
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative bg-[#F7F8FA] pb-[120px]">
      <PageHeader
        title="Appointment Details"
        subtitle="Set your appointment schedule"
        backHref="/search-result"
        height="md"
      />

      <section className="-mt-[140px] w-full space-y-4 pb-4">
        <div className="mx-4">
          <DoctorCard doctor={doctor} variant="compact" showBookButton={false} />
        </div>

        <section className="mb-4 w-full space-y-6 rounded-3xl bg-[#FFFFFF] px-4 py-8">
          <h2 className="font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
            Make Appointment
          </h2>
          <div className="flex w-full items-center justify-between rounded-3xl border border-[#F1F1F1] bg-[#2C40FF08] p-6">
            <div>
              <h3 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                31 Aug 2024
              </h3>
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Doctor Available
              </p>
            </div>
            <img src="/assets/icons/doctordetails-doctor-available.svg" alt="Icon" />
          </div>
          <div>
            <p className="mb-4 font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
              Set The Appointment Time.
            </p>
            <div className="space-y-3">
              {['13:00 PM', '14:00 PM', '15:00 PM'].map((time) => (
                <RadioOption
                  key={time}
                  name="time"
                  value={time}
                  label={time}
                  icon="/assets/image/bookingconfirm-clock-nonactive.png"
                  iconAlt="Clock"
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      <FixedBottomCTA
        label="Total Cost"
        price={doctor.price}
        buttonText="Continue"
        buttonHref={`/payment-details?doctorId=${doctorId}`}
      />
    </main>
  )
}

