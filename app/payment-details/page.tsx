import { Suspense } from 'react'
import PaymentDetailsContent from './PaymentDetailsContent'

export default function PaymentDetailsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex h-screen items-center justify-center bg-[#F7F8FA]">
          <p className="font-jakarta text-lg font-semibold text-[#757C98]">Loading payment details…</p>
        </main>
      }
    >
      <PaymentDetailsContent />
    </Suspense>
  )
}

