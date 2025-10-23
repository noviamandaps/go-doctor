'use client'

import { useState } from 'react'
import PageHeader from '@/components/layout/PageHeader'
import BottomNavigation from '@/components/layout/BottomNavigation'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+62 812-3456-7890',
    birthDate: '15 January 1990',
    gender: 'Male',
    bloodType: 'O+',
    address: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta'
  })

  return (
    <main className="relative pb-[98px] bg-[#F7F8FA]">
      <PageHeader
        title="My Profile"
        subtitle="Manage your personal information"
        backHref="/"
        height="md"
      />

      <section className="-mt-[140px] w-full space-y-4 pb-4">
        <div className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="flex size-[120px] items-center justify-center overflow-hidden rounded-full bg-[#D9D9D9]">
                <img
                  src="/assets/image/paymentdetails-dr-raze-invoker.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 flex size-10 items-center justify-center rounded-full bg-[#2C40FF] shadow-lg">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
            <h2 className="font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
              {profileData.name}
            </h2>
            <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
              Patient ID: #PSN001234
            </p>
          </div>
        </div>

        <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
              Personal Information
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="font-jakarta font-semibold leading-[20.16px] text-[#2C40FF]"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: '/assets/icons/paymentdetails-phone-active.svg',
                label: 'Full Name',
                value: profileData.name
              },
              {
                icon: '/assets/icons/succespage-booking-id-active.svg',
                label: 'Email Address',
                value: profileData.email
              },
              {
                icon: '/assets/icons/paymentdetails-phone-active.svg',
                label: 'Phone Number',
                value: profileData.phone
              },
              {
                icon: '/assets/icons/doctordetails-doctor-available.svg',
                label: 'Date of Birth',
                value: profileData.birthDate
              },
              {
                icon: '/assets/icons/searchresult-verify.svg',
                label: 'Gender',
                value: profileData.gender
              },
              {
                icon: '/assets/icons/searchresult-4.5.svg',
                label: 'Blood Type',
                value: profileData.bloodType
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between pb-4 ${
                  index < 5 ? 'border-b border-[#F1F1F1]' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.label} className="size-6" />
                  <div>
                    <p className="font-jakarta text-sm font-semibold leading-[17.64px] text-[#757C98]">
                      {item.label}
                    </p>
                    <p className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <img
                  src="/assets/icons/doctorsearch-location-active.svg"
                  alt="Address"
                  className="mt-1 size-6"
                />
                <div>
                  <p className="font-jakarta text-sm font-semibold leading-[17.64px] text-[#757C98]">
                    Address
                  </p>
                  <p className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
                    {profileData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-4 rounded-3xl bg-[#FFFFFF] p-5">
          <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
            Medical History
          </h2>
          <div className="space-y-3">
            <div className="rounded-2xl border border-[#F1F1F1] p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
                  Allergies
                </h3>
                <span className="rounded-full bg-[#FF505017] px-3 py-1 font-jakarta text-sm font-semibold text-[#FF5050]">
                  Important
                </span>
              </div>
              <p className="font-jakarta leading-[20.16px] text-[#757C98]">
                Penicillin, Peanuts
              </p>
            </div>
            <div className="rounded-2xl border border-[#F1F1F1] p-4">
              <h3 className="mb-2 font-jakarta font-bold leading-[20.16px] text-[#161616]">
                Chronic Conditions
              </h3>
              <p className="font-jakarta leading-[20.16px] text-[#757C98]">None reported</p>
            </div>
            <div className="rounded-2xl border border-[#F1F1F1] p-4">
              <h3 className="mb-2 font-jakarta font-bold leading-[20.16px] text-[#161616]">
                Current Medications
              </h3>
              <p className="font-jakarta leading-[20.16px] text-[#757C98]">None</p>
            </div>
          </div>
        </section>
      </section>

      <BottomNavigation activePage="profile" />
    </main>
  )
}
