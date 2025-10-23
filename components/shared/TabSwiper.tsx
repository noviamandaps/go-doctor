'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

export interface Tab {
  id: string
  label: string
  icon?: string
}

interface TabSwiperProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

export default function TabSwiper({ tabs, activeTab, onTabChange, className = '' }: TabSwiperProps) {
  return (
    <Swiper
      modules={[FreeMode]}
      slidesPerView="auto"
      freeMode={true}
      spaceBetween={8}
      className={className}
    >
      {tabs.map((tab) => (
        <SwiperSlide key={tab.id} className="!w-auto">
          <button
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 rounded-[100px] px-5 py-[14px] font-jakarta font-bold leading-[20.16px] transition-all ${
              activeTab === tab.id
                ? 'bg-[#2C40FF17] text-[#2C40FF]'
                : 'border border-[#F1F1F1] bg-[#FFFFFF] text-[#757C98] hover:border-[#2C40FF]'
            }`}
          >
            {tab.icon && <img src={tab.icon} alt={tab.label} className="size-5" />}
            {tab.label}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
