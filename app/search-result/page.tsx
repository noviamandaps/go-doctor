import { doctors } from '@/data/doctors'
import PageHeader from '@/components/layout/PageHeader'
import DoctorCard from '@/components/doctor/DoctorCard'

export default function SearchResultPage() {
  return (
    <main className="relative pb-12 bg-[#F7F8FA]">
      <PageHeader
        title="Recommended Doctors"
        subtitle="Jakarta • Internist Specialist"
        backHref="/doctor-search"
        height="lg"
      />

      <section id="ContainerCards" className="-mt-[140px] w-full space-y-4 px-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} variant="search" showBookButton={true} />
        ))}
      </section>
    </main>
  )
}
