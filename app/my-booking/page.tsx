'use client'

import { useState } from 'react'
import FormInput from '@/components/ui/FormInput'
import Button from '@/components/ui/Button'
import BottomNavigation from '@/components/layout/BottomNavigation'

export default function MyBookingPage() {
  const [bookingId, setBookingId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/future-appointment-success'
  }

  return (
    <>
      <main className="flex h-screen items-center justify-center px-4 bg-[#F7F8FA]">
        <form onSubmit={handleSubmit} className="w-full">
          <section
            role="alert"
            className="-mb-[45px] h-[145px] w-full rounded-t-3xl bg-[linear-gradient(100.99deg,#277B53_0%,#277B7B_100%)] px-4 pb-[69px] pt-6"
          >
            <h2 className="text-center font-jakarta font-bold leading-[25.6px] text-[#FFFFFF]">
              Enter the booking code & phone number that match those in the email.
            </h2>
          </section>

          <section className="rounded-3xl bg-[#FFFFFF] px-5 py-8">
            <div className="mb-8 grid justify-items-center">
              <img
                src="/assets/icons/succespage-booking-succes.svg"
                alt="Icon"
                className="mb-4"
              />
              <h1 className="font-jakarta text-2xl font-extrabold leading-[30.24px] text-[#161616]">
                View Your Booking
              </h1>
            </div>

            <div id="InputContainer" className="space-y-6">
              <FormInput
                label="Booking ID"
                name="bookingId"
                placeholder="Write your Booking ID"
                value={bookingId}
                onChange={setBookingId}
                required={true}
                iconActive="/assets/icons/succespage-booking-id-active.svg"
                iconInactive="/assets/icons/succespage-booking-id.svg"
              />

              <FormInput
                label="Phone No."
                type="tel"
                name="phoneNumber"
                placeholder="Write your phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                required={true}
                iconActive="/assets/icons/paymentdetails-phone-active.svg"
                iconInactive="/assets/icons/paymentdetails-phone-nonactive.svg"
                className="mb-8"
              />

              <Button
                type="submit"
                variant="primary"
                fullWidth={true}
                icon="/assets/icons/doctorsearch-search-doctor.svg"
                iconAlt="Search"
              >
                Find Booking
              </Button>
            </div>
          </section>
        </form>
      </main>

      <BottomNavigation activePage="booking" />
    </>
  )
}
