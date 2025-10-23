'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import Link from 'next/link'
import { doctors } from '@/data/doctors'
import BottomNavigation from '@/components/layout/BottomNavigation'
import TabSwiper, { type Tab } from '@/components/shared/TabSwiper'
import DoctorCard from '@/components/doctor/DoctorCard'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Latest')

  // Get different doctors for each tab
  const latestDoctors = doctors.slice(0, 3)
  const pediatricDoctors = doctors.filter((d) => d.specialty.includes('Pediatric'))
  const finalPediatricDoctors =
    pediatricDoctors.length > 0 ? pediatricDoctors : doctors.slice(3, 6)
  const ophthalmologyDoctors = doctors.filter((d) => d.specialty.includes('Ophthalmology'))
  const finalOphthalmologyDoctors =
    ophthalmologyDoctors.length > 0 ? ophthalmologyDoctors : doctors.slice(6, 9)

  const tabs: Tab[] = [
    { id: 'Latest', label: 'Latest' },
    { id: 'Pediatric', label: 'Pediatric' },
    { id: 'Ophthalmology', label: 'Ophthalmology' }
  ]

  const getDoctorsForTab = () => {
    switch (activeTab) {
      case 'Pediatric':
        return finalPediatricDoctors
      case 'Ophthalmology':
        return finalOphthalmologyDoctors
      default:
        return latestDoctors
    }
  }

  return (
    <>
      <main className="overflow-hidden pb-[98px] bg-[#F7F8FA]">
        <header>
          <div className="flex items-center justify-between rounded-b-3xl border border-[#F1F1F1] bg-[#FFFFFF] px-4 pb-8 pt-12">
            <a href="#">
              <img
                src="/assets/image/homepage-nav-company.png"
                alt="Image"
                className="max-h-[50px]"
              />
            </a>
            <Link
              href="/notifications"
              className="flex size-[50px] items-center justify-center shrink-0 rounded-full border border-[#F1F1F1]"
            >
              <img src="/assets/icons/homepage-nav-notification.svg" alt="Icon" />
            </Link>
          </div>
          <img
            src="/assets/image/homepage-header-banner.png"
            alt="Image"
            className="mx-auto min-h-[183px] min-w-[361px] p-4"
          />
        </header>

        <section id="categories" className="rounded-3xl bg-[#FFFFFF] px-4 py-8">
          <div className="flex items-center justify-between">
            <h2 className="font-jakarta text-[20px] font-bold leading-[25.2px] text-[#161616]">
              Specialist Categories
            </h2>
            <Link
              href="/search-result"
              className="font-jakarta text-sm font-bold leading-[17.64px] text-[#757C98]"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-3 justify-items-center gap-y-4 pt-4">
            <Link href="/search-result" className="categori-1 h-[102px] w-[111px]">
              <div className="mx-auto flex size-[72px] items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src="/assets/image/homepage-specialist-pediatric.png"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[10px] text-center font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Pediatric
              </h3>
            </Link>
            <Link href="/search-result" className="categori-2 h-[102px] w-[111px]">
              <div className="mx-auto flex size-[72px] items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src="/assets/image/homepage-specialist-cardiology.png"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[10px] text-center font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Cardiology
              </h3>
            </Link>
            <Link href="/search-result" className="categori-3 h-[102px] w-[111px]">
              <div className="mx-auto flex size-[72px] items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src="/assets/image/homepage-specialist-neurology.png"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[10px] text-center font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Neurology
              </h3>
            </Link>
            <Link href="/search-result" className="categori-4 h-[102px] w-[111px]">
              <div className="mx-auto flex size-[72px] items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src="/assets/image/homepage-specialist-obstetrics.png"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[10px] text-center font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Obstetrics
              </h3>
            </Link>
            <Link href="/search-result" className="categori-5 h-[102px] w-[111px]">
              <div className="mx-auto flex size-[72px] items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src="/assets/image/homepage-specialist-ophthalmology.png"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[10px] text-center font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Ophthalmology
              </h3>
            </Link>
            <Link href="/search-result" className="categori-6 h-[102px] w-[111px]">
              <div className="mx-auto flex size-[72px] items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src="/assets/image/homepage-specialist-dermatology.png"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[10px] text-center font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Dermatology
              </h3>
            </Link>
          </div>
        </section>

        <section id="recommendation" className="relative mb-4 space-y-4 rounded-b-3xl px-4 pt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-jakarta text-[20px] font-bold leading-[25.2px] text-[#161616]">
              Recommendations
            </h2>
            <Link
              href="/search-result"
              className="font-jakarta text-sm font-bold leading-[17.64px] text-[#757C98]"
            >
              View All
            </Link>
          </div>

          <TabSwiper tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="w-full pb-4">
            {getDoctorsForTab().length > 0 && (
              <Swiper
                modules={[FreeMode]}
                slidesPerView="auto"
                freeMode={true}
                spaceBetween={16}
              >
                {getDoctorsForTab().map((doctor) => (
                  <SwiperSlide key={doctor.id} className="!w-[290px]">
                    <DoctorCard doctor={doctor} variant="home" showBookButton={false} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </section>
      </main>

      <BottomNavigation activePage="home" />
    </>
  )
}
