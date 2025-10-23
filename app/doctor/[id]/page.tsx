'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { getDoctorById } from '@/data/doctors'
import PageHeader from '@/components/layout/PageHeader'
import DoctorCard from '@/components/doctor/DoctorCard'
import FixedBottomCTA from '@/components/layout/FixedBottomCTA'

export default function DoctorDetailPage() {
  const params = useParams()
  const doctor = getDoctorById(params.id as string)
  const [selectedDate, setSelectedDate] = useState('31 Aug 2024')

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
    <main className="relative pb-[120px] bg-[#F7F8FA]">
      <PageHeader
        title="Doctor Details"
        subtitle="Professional Profile"
        backHref="/search-result"
        height="md"
      />

 <section className="-mt-[140px] w-full space-y-4 pb-4">       
   <div className="mx-4">
          <DoctorCard doctor={doctor} variant="compact" showBookButton={false} />
        </div>

        <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
          <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
            About Doctor
          </h2>
          <p className="font-jakarta leading-[20.16px] text-[#757C98]">{doctor.about}</p>
        </section>

        {doctor.education && (
          <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
            <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
              Education & Certification
            </h2>
            <div className="space-y-3">
              {doctor.education.map((edu, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img
                    src="/assets/image/doctordetails-college-graduate.png"
                    alt="Education"
                    className="mt-1 size-6"
                  />
                  <p className="font-jakarta leading-[20.16px] text-[#757C98]">{edu}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {doctor.workingHours && (
          <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
            <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
              Working Hours
            </h2>
            <div className="flex items-center gap-3">
              <img
                src="/assets/image/bookingconfirm-clock-nonactive.png"
                alt="Clock"
                className="size-6"
              />
              <p className="font-jakarta leading-[20.16px] text-[#757C98]">
                {doctor.workingHours}
              </p>
            </div>
          </section>
        )}

        {doctor.address && (
          <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
            <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
              Location
            </h2>
            <div className="flex items-start gap-3">
              <img
                src="/assets/icons/doctordetails-doctor-available.svg"
                alt="Location"
                className="mt-1 size-6"
              />
              <p className="font-jakarta leading-[20.16px] text-[#757C98]">{doctor.address}</p>
            </div>
          </section>
        )}

        <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
          <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
            Available Dates
          </h2>
          <div className="flex w-full items-center justify-between rounded-3xl border border-[#F1F1F1] bg-[#2C40FF08] p-6">
            <div>
              <h3 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                {selectedDate}
              </h3>
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Doctor Available
              </p>
            </div>
            <img src="/assets/icons/doctordetails-doctor-available.svg" alt="Icon" />
          </div>
        </section>
      </section>

      <FixedBottomCTA
        label="Consultation Fee"
        price={doctor.price}
        buttonText="Book Now"
        buttonHref={`/booking-confirmation?doctorId=${doctor.id}`}
      />
    </main>
  )
}
