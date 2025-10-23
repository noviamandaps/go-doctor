import { Suspense } from 'react'
import BookingConfirmationContent from './BookingConfirmationContent'

export default function BookingConfirmationPage() {
  return (
    <Suspense
      fallback={
        <main className="flex h-screen items-center justify-center bg-[#F7F8FA]">
          <p className="font-jakarta text-lg font-semibold text-[#757C98]">Loading confirmation…</p>
        </main>
      }
    >
      <BookingConfirmationContent />
    </Suspense>
  )
}

