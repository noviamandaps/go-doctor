interface AppointmentDetailsProps {
  date: string
  time: string
  location: string
  dateLabel?: string
  timeLabel?: string
  locationLabel?: string
  className?: string
}

export default function AppointmentDetails({
  date,
  time,
  location,
  dateLabel = 'Doctor Available',
  timeLabel = 'Appointment Time',
  locationLabel = 'Appointment Location',
  className = ''
}: AppointmentDetailsProps) {
  return (
    <div className={`w-full space-y-4 rounded-3xl border border-[#F1F1F1] p-6 ${className}`}>
      {/* Date */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
            {date}
          </h3>
          <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
            {dateLabel}
          </p>
        </div>
        <img src="/assets/icons/doctordetails-doctor-available.svg" alt="Date Icon" />
      </div>

      <hr className="w-full border-[#F1F1F1]" />

      {/* Time */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
            {time}
          </h3>
          <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
            {timeLabel}
          </p>
        </div>
        <img
          src="/assets/image/bookingconfirm-clock-nonactive.png"
          alt="Time Icon"
          className="size-6"
        />
      </div>

      <hr className="w-full border-[#F1F1F1]" />

      {/* Location */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
            {location}
          </h3>
          <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
            {locationLabel}
          </p>
        </div>
        <img
          src="/assets/image/doctordetails-college-graduate.png"
          alt="Location Icon"
          className="size-6"
        />
      </div>
    </div>
  )
}
