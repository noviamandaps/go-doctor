import Link from 'next/link'

export default function FutureAppointmentPendingPage() {
  return (
    <main className="relative pb-[192px] bg-[#F7F8FA]">
      <header className="h-[277px] w-full rounded-b-2xl bg-[#2C40FF] px-4 pt-12">
        <h1 className="mb-[3px] whitespace-nowrap text-center font-jakarta text-xl font-bold leading-[25.2px] text-[#FFFFFF]">
          Booking Details
        </h1>
        <p className="whitespace-nowrap text-center font-jakarta font-semibold leading-[20.16px] text-[#AEB5FF]">
          Waiting for Payment
        </p>
      </header>

      <section className="-mt-[149px] w-full space-y-4 pb-4">
        <section className="mx-4 overflow-hidden rounded-3xl">
          <div
            role="alert"
            className="alert -mb-[22px] flex items-center gap-x-3 rounded-t-3xl border-[1.5px] border-[#FFFFFF] bg-[linear-gradient(100.99deg,#FF9D1E_0%,#FF5050_100%)] px-5 pb-[46px] pt-6"
          >
            <img src="/assets/icons/futureappointment-alert-pending.svg" alt="Icon" />
            <div>
              <h2 className="mb-1 font-jakarta text-xl font-bold leading-[25.2px] text-[#FFFFFF]">
                Waiting Payment
              </h2>
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#FFEFD2]">
                Your order is waiting for payment.
              </p>
            </div>
          </div>
          <div className="details-appointment rounded-3xl bg-[#FFFFFF] p-5">
            <h2 className="mb-4 font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
              Details Appointment
            </h2>
            <div className="mb-4 w-full space-y-4 rounded-3xl border border-[#F1F1F1] p-6">
              <div className="flex items-center justify-between">
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
              <hr className="w-full border-[#F1F1F1]" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                    13:00 PM
                  </h3>
                  <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                    Appointment Time
                  </p>
                </div>
                <img
                  src="/assets/image/bookingconfirm-clock-nonactive.png"
                  alt="Icon"
                  className="size-6"
                />
              </div>
              <hr className="w-full border-[#F1F1F1]" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-[2px] font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                    Radiant Hospital
                  </h3>
                  <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                    Appointment Location
                  </p>
                </div>
                <img
                  src="/assets/image/doctordetails-college-graduate.png"
                  alt="Image"
                  className="size-6"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-3 rounded-3xl bg-[#2C40FF08] p-4">
              <div className="flex size-14 items-center justify-center overflow-hidden rounded-full bg-[#D9D9D9]">
                <img
                  src="/assets/image/paymentdetails-dr-raze-invoker.png"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="mb-1 font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                  Dr. Raze Invoker
                </h3>
                <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                  Internist Specialist
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full space-y-4 rounded-3xl bg-[#FFFFFF] px-4 py-8">
          <h2 className="font-jakarta text-xl font-bold leading-[25.2px] text-[#161616]">
            Payment Details
          </h2>
          <div className="w-full space-y-4 rounded-3xl border border-[#F1F1F1] p-6">
            <div className="flex items-center justify-between">
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Booking Code
              </p>
              <strong>
                <p className="bg-[#2C40FF17] p-[6px] font-jakarta text-lg font-bold leading-[22.68px] text-[#2C40FF]">
                  SEHAT1935
                </p>
              </strong>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">Duration</p>
              <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                1 Hour
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">Price</p>
              <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                Rp 240.000
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">PPN 11%</p>
              <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                Rp 10.000
              </p>
            </div>
            <hr className="w-full border-[#F1F1F1]" />
            <div className="flex items-center justify-between">
              <p className="font-jakarta font-semibold leading-[20.16px] text-[#757C98]">
                Grand Total
              </p>
              <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
                Rp 249.675
              </p>
            </div>
          </div>
        </section>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-30 mx-auto">
        <div className="mx-auto max-w-[640px]">
          <div className="flex h-[160px] w-full flex-col gap-y-4 rounded-t-3xl bg-[#FFFFFF] px-4 py-8">
            <Link
              href="/payment-details"
              className="flex h-[56px] w-full items-center justify-center rounded-full bg-[#2C40FF] text-center font-jakarta font-bold leading-[20.16px] text-[#FFFFFF]"
            >
              Complete Payment
            </Link>
            <Link
              href="/"
              className="flex h-[56px] w-full items-center justify-center rounded-full bg-[#2C40FF17] text-center font-jakarta font-bold leading-[20.16px] text-[#2C40FF]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}
