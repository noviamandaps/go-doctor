'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import RadioOption from '@/components/ui/RadioOption'
import BottomNavigation from '@/components/layout/BottomNavigation'

const specialists = [
  {
    id: 'obstetrics',
    name: 'Obstetrics',
    doctors: 230,
    image: '/assets/image/doctorsearch-modal-obstetrics.png'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    doctors: 230,
    image: '/assets/image/doctorsearch-modal-neurology.png'
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    doctors: 230,
    image: '/assets/image/doctorsearch-modal-ophthalmology.png'
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    doctors: 230,
    image: '/assets/image/doctorsearch-modal-cardiology.png'
  },
  {
    id: 'pediatric',
    name: 'Pediatric',
    doctors: 230,
    image: '/assets/image/doctorsearch-modal-pediatric.png'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    doctors: 230,
    image: '/assets/image/doctorsearch-modal-dermatology.png'
  }
]

export default function DoctorSearchPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedSpecialist, setSelectedSpecialist] = useState('')
  const [tempSpecialist, setTempSpecialist] = useState('')

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setTempSpecialist(selectedSpecialist)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setTempSpecialist(selectedSpecialist)
    setModalOpen(false)
  }

  const handleContinue = () => {
    setSelectedSpecialist(tempSpecialist)
    setModalOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/search-result'
  }

  return (
    <>
      <main className="flex h-screen items-center justify-center px-4 bg-[#F7F8FA]">
        <form onSubmit={handleSubmit} className="w-full">
          <div
            id="form"
            className={`w-full rounded-3xl bg-[#FFFFFF] px-4 py-8 ${modalOpen ? 'hidden' : ''}`}
          >
            <div className="mb-8 grid justify-items-center">
              <img
                src="/assets/icons/doctorsearch-lets-make-appointment.svg"
                alt="Icon"
                className="mb-4"
              />
              <h1 className="font-jakarta text-2xl font-extrabold leading-[30.24px] text-[#161616]">
                Let's Make Appointment!
              </h1>
            </div>

            <div id="InputContainer" className="space-y-6">
              <label className="block">
                <p className="mb-3 font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                  Find Your City
                </p>
                <div className="relative">
                  <select
                    name="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    required
                    className="h-[56px] w-full appearance-none rounded-[100px] border border-[#F1F1F1] bg-white pl-12 pr-4 font-jakarta font-bold leading-[20.16px] text-[#161616] hover:border-[#2C40FF] focus:outline-none focus:ring-2 focus:ring-[#2C40FF] focus:ring-offset-2"
                  >
                    <option value="">Choose your city</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="surabaya">Surabaya</option>
                  </select>
                  <img
                    src={
                      selectedCity
                        ? '/assets/icons/doctorsearch-location-active.svg'
                        : '/assets/icons/doctorsearch-location-nonactive.svg'
                    }
                    alt="Location"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                  />
                  <img
                    src="/assets/icons/doctorsearch-arrow-right.svg"
                    alt="Arrow"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>
              </label>

              <label className="block">
                <p className="mb-3 font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                  Choose A Specialist
                </p>
                <div
                  onClick={handleOpenModal}
                  className="relative flex h-[56px] cursor-pointer items-center rounded-[100px] border border-[#F1F1F1] bg-white pl-12 pr-4 hover:border-[#2C40FF]"
                >
                  <span
                    className={`font-jakarta font-bold leading-[20.16px] ${
                      selectedSpecialist ? 'text-[#161616]' : 'text-[#757C98]'
                    }`}
                  >
                    {selectedSpecialist || 'Click to choose a specialist'}
                  </span>
                  <img
                    src={
                      selectedSpecialist
                        ? '/assets/icons/doctorsearch-input-choose-a-specialist-active.svg'
                        : '/assets/icons/doctorsearch-input-choose-a-specialist-nonactive.svg'
                    }
                    alt="Specialist"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                  />
                  <img
                    src="/assets/icons/doctorsearch-arrow-right.svg"
                    alt="Arrow"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>
              </label>

              <Button type="submit" variant="primary" fullWidth={true}>
                Search for Doctor
              </Button>
            </div>
          </div>

          {modalOpen && (
            <div className="modal space-y-6 rounded-3xl bg-[#FFFFFF] px-4 py-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
                  Choose Specialist
                </h2>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex size-8 items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <svg className="size-6 text-[#757C98]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                {specialists.map((specialist) => (
                  <div
                    key={specialist.id}
                    onClick={() => setTempSpecialist(specialist.name)}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition-all hover:border-[#2C40FF] ${
                      tempSpecialist === specialist.name
                        ? 'border-[#2C40FF] bg-[#2C40FF08]'
                        : 'border-[#F1F1F1]'
                    }`}
                  >
                    <div className="flex size-[60px] items-center justify-center overflow-hidden rounded-2xl bg-[#F7F8FA]">
                      <img
                        src={specialist.image}
                        alt={specialist.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
                        {specialist.name}
                      </h3>
                      <p className="font-jakarta text-sm font-semibold leading-[17.64px] text-[#757C98]">
                        {specialist.doctors} Doctors
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="specialist"
                      checked={tempSpecialist === specialist.name}
                      onChange={() => {}}
                      className="size-6 accent-[#2C40FF]"
                    />
                  </div>
                ))}
              </div>

              <Button type="button" variant="primary" fullWidth={true} onClick={handleContinue}>
                Continue
              </Button>
            </div>
          )}
        </form>
      </main>

      <BottomNavigation activePage="appointment" />
    </>
  )
}
