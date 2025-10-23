interface DoctorStatsProps {
  experience: string
  rating: string
  verified?: boolean
  className?: string
}

export default function DoctorStats({
  experience,
  rating,
  verified = true,
  className = ''
}: DoctorStatsProps) {
  return (
    <div
      className={`flex items-center justify-evenly rounded-2xl border border-[#F1F1F1] py-4 ${className}`}
    >
      {/* Verify */}
      <div className="grid w-[80.33px] place-items-center">
        <div className="mb-1 flex gap-[2px]">
          <img src="/assets/icons/searchresult-verify.svg" alt="Verify Icon" />
          <h4 className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
            Verify
          </h4>
        </div>
        <p className="font-jakarta text-sm font-semibold leading-[17.64px] text-[#757C98]">
          {verified ? 'Certified' : 'Not Certified'}
        </p>
      </div>

      <hr className="w-[36px] rotate-90 border-[#F1F1F1]" />

      {/* Experience */}
      <div className="grid w-[80.33px] place-items-center">
        <div className="mb-1 flex gap-[2px] whitespace-nowrap">
          <img src="/assets/icons/searchresult-5-years.svg" alt="Experience Icon" />
          <h4 className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
            {experience}
          </h4>
        </div>
        <p className="font-jakarta text-sm font-semibold leading-[17.64px] text-[#757C98]">
          Experience
        </p>
      </div>

      <hr className="w-[36px] rotate-90 border-[#F1F1F1]" />

      {/* Rating */}
      <div className="grid w-[80.33px] place-items-center">
        <div className="mb-1 flex gap-[2px]">
          <img src="/assets/icons/searchresult-4.5.svg" alt="Rating Icon" />
          <h4 className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
            {rating}
          </h4>
        </div>
        <p className="font-jakarta text-sm font-semibold leading-[17.64px] text-[#757C98]">
          Rating
        </p>
      </div>
    </div>
  )
}
