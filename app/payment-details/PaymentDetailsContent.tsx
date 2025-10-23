'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getDoctorById } from '@/data/doctors'
import PageHeader from '@/components/layout/PageHeader'
import AppointmentDetails from '@/components/appointment/AppointmentDetails'
import PaymentDetailsComponent from '@/components/appointment/PaymentDetails'
import RadioOption from '@/components/ui/RadioOption'
import FixedBottomCTA from '@/components/layout/FixedBottomCTA'

export default function PaymentDetailsContent() {
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

  const basePrice = parseInt(doctor.price.replace(/\./g, ''), 10)
  const ppn = Math.round(basePrice * 0.11)
  const totalPrice = basePrice + ppn

  return (
    <main className="relative bg-[#F7F8FA] pb-[120px]">
      <PageHeader
        title="Payment Details"
        subtitle="Complete the payment"
        backHref="/booking-confirmation"
        height="xl"
      />

      <section className="-mt-[146px] w-full space-y-4 pb-4">
        <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
          <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
            Details Appointment
          </h2>

          <AppointmentDetails
            date="31 Aug 2024"
            time="13:00 PM"
            location={doctor.hospital}
            className="mb-4"
          />

          <div className="flex w-full items-center gap-3 rounded-3xl bg-[#2C40FF08] p-4">
            <div className="flex size-14 items-center justify-center overflow-hidden rounded-full bg-[#D9D9D9]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="mb-1 font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                {doctor.name}
              </h3>
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                {doctor.specialty}
              </p>
            </div>
          </div>
        </section>

        <PaymentDetailsComponent
          price={doctor.price}
          tax={ppn}
          totalPrice={totalPrice}
        />

        <section className="mb-4 w-full space-y-4 rounded-3xl bg-[#FFFFFF] px-4 py-8">
          <h2 className="font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
            Choose Bank
          </h2>
          <div className="space-y-3">
            {['BCA', 'BNI', 'BRI'].map((bank) => (
              <RadioOption
                key={bank}
                name="bank"
                value={bank}
                label={bank}
                showImage
                imageSrc={`/assets/image/paymentdetails-${bank.toLowerCase()}.png`}
              />
            ))}
          </div>
        </section>
      </section>

      <FixedBottomCTA
        label="Total Payment"
        price={totalPrice}
        buttonText="Checkout"
        buttonHref="/future-appointment-success"
      />
    </main>
  )
}

