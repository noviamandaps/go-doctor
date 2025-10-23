import { Doctor, Notification } from '@/types/doctor'

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Raze Invoker',
    hospital: 'Radiant Hospital',
    specialty: 'Internist Specialist',
    experience: '5 Years',
    rating: '4.5',
    price: '240.000',
    image: '/assets/image/searchresult-dr-raze-invoker.png',
    available: true,
    verified: true,
    about: 'Dr. Raze Invoker is a highly experienced internist with a focus on preventive medicine and chronic disease management. With 5 years of dedicated practice, he has helped hundreds of patients achieve better health outcomes.',
    education: [
      'Doctor of Medicine - University of Indonesia',
      'Internal Medicine Residency - Cipto Mangunkusumo Hospital',
      'Board Certified in Internal Medicine'
    ],
    workingHours: 'Mon - Fri: 09:00 - 17:00, Sat: 09:00 - 13:00',
    address: 'Radiant Hospital, Jl. Sudirman No. 123, Jakarta'
  },
  {
    id: '2',
    name: 'Dr. Arrbona Naaiv',
    hospital: 'Gassroma Sin Hospital',
    specialty: 'Internist Specialist',
    experience: '3 Years',
    rating: '4.2',
    price: '200.000',
    image: '/assets/image/searchresult-dr.-arrbona-naaiv.png',
    available: true,
    verified: true,
    about: 'Specializing in comprehensive internal medicine care with a patient-centered approach. Dr. Arrbona believes in treating the whole person, not just the symptoms.',
    education: [
      'Doctor of Medicine - Universitas Gadjah Mada',
      'Internal Medicine Training - RS Sardjito'
    ],
    workingHours: 'Mon - Fri: 10:00 - 18:00',
    address: 'Gassroma Sin Hospital, Jl. Gatot Subroto No. 45, Jakarta'
  },
  {
    id: '3',
    name: 'Dr. Reyna Ramma',
    hospital: 'Naabs Bylaa Hospital',
    specialty: 'Internist Specialist',
    experience: '4 Years',
    rating: '4.7',
    price: '220.000',
    image: '/assets/image/searchresult-dr-reyna-ramma.png',
    available: true,
    verified: true,
    about: 'Expert in managing complex medical conditions with a gentle and caring approach. Dr. Reyna is known for her excellent diagnostic skills.',
    education: [
      'Doctor of Medicine - Universitas Airlangga',
      'Internal Medicine Fellowship - RS Dr. Soetomo'
    ],
    workingHours: 'Mon - Sat: 08:00 - 16:00',
    address: 'Naabs Bylaa Hospital, Jl. Rasuna Said No. 78, Jakarta'
  },
  {
    id: '4',
    name: 'Dr. Marci Maiden',
    hospital: 'Madelyn Hospital',
    specialty: 'Internist Specialist',
    experience: '6 Years',
    rating: '4.8',
    price: '260.000',
    image: '/assets/image/homepage-recommended-dr-marci-maiden.png',
    available: true,
    verified: true,
    about: 'Board-certified internist with extensive experience in acute and chronic care. Dr. Marci is passionate about preventive health and wellness.',
    education: [
      'Doctor of Medicine - University of Indonesia',
      'Internal Medicine Fellowship - RSCM Jakarta',
      'Advanced Cardiac Life Support Certification'
    ],
    workingHours: 'Mon - Fri: 09:00 - 17:00',
    address: 'Madelyn Hospital, Jl. Thamrin No. 90, Jakarta'
  },
  {
    id: '5',
    name: 'Dr. Dire Clove',
    hospital: 'Sentinel Medical Center',
    specialty: 'Cardiology Specialist',
    experience: '8 Years',
    rating: '4.9',
    price: '300.000',
    image: '/assets/image/doctordetails-dire-clove.png',
    available: true,
    verified: true,
    about: 'Leading cardiologist specializing in interventional cardiology and heart disease prevention. Dr. Dire has performed over 500 successful procedures.',
    education: [
      'Doctor of Medicine - Universitas Indonesia',
      'Cardiology Fellowship - National Cardiovascular Center',
      'Interventional Cardiology Certification'
    ],
    workingHours: 'Mon - Fri: 08:00 - 16:00, Sat: 08:00 - 12:00',
    address: 'Sentinel Medical Center, Jl. HR Rasuna Said No. 100, Jakarta'
  },
  {
    id: '6',
    name: 'Dr. Sarah Johnson',
    hospital: 'Jakarta General Hospital',
    specialty: 'Pediatric Specialist',
    experience: '7 Years',
    rating: '4.6',
    price: '250.000',
    image: '/assets/image/searchresult-dr-raze-invoker.png',
    available: true,
    verified: true,
    about: 'Dedicated pediatrician with a warm approach to child healthcare. Specialized in newborn care and childhood development.',
    education: [
      'Doctor of Medicine - Universitas Padjadjaran',
      'Pediatric Residency - RS Hasan Sadikin'
    ],
    workingHours: 'Mon - Sat: 10:00 - 18:00',
    address: 'Jakarta General Hospital, Jl. Diponegoro No. 55, Jakarta'
  },
  {
    id: '7',
    name: 'Dr. Michael Chen',
    hospital: 'Premier Health Clinic',
    specialty: 'Dermatology Specialist',
    experience: '5 Years',
    rating: '4.4',
    price: '230.000',
    image: '/assets/image/searchresult-dr.-arrbona-naaiv.png',
    available: true,
    verified: true,
    about: 'Expert dermatologist specializing in cosmetic and medical dermatology. Focused on achieving healthy, beautiful skin for all patients.',
    education: [
      'Doctor of Medicine - Universitas Indonesia',
      'Dermatology Residency - RSCM Jakarta'
    ],
    workingHours: 'Tue - Sat: 09:00 - 17:00',
    address: 'Premier Health Clinic, Jl. Kemang Raya No. 22, Jakarta'
  },
  {
    id: '8',
    name: 'Dr. Lisa Anderson',
    hospital: 'Women\'s Health Center',
    specialty: 'Obstetrics Specialist',
    experience: '9 Years',
    rating: '4.9',
    price: '280.000',
    image: '/assets/image/searchresult-dr-reyna-ramma.png',
    available: true,
    verified: true,
    about: 'Experienced obstetrician committed to providing comprehensive care for women through all stages of pregnancy and childbirth.',
    education: [
      'Doctor of Medicine - Universitas Airlangga',
      'OB-GYN Residency - RS Dr. Soetomo',
      'High-Risk Pregnancy Fellowship'
    ],
    workingHours: 'Mon - Fri: 08:00 - 16:00',
    address: 'Women\'s Health Center, Jl. Wijaya No. 88, Jakarta'
  },
  {
    id: '9',
    name: 'Dr. Robert Williams',
    hospital: 'Neuroscience Institute',
    specialty: 'Neurology Specialist',
    experience: '10 Years',
    rating: '4.8',
    price: '320.000',
    image: '/assets/image/homepage-recommended-dr-marci-maiden.png',
    available: true,
    verified: true,
    about: 'Renowned neurologist with expertise in treating neurological disorders including migraines, epilepsy, and movement disorders.',
    education: [
      'Doctor of Medicine - Universitas Indonesia',
      'Neurology Fellowship - National Brain Center',
      'Epilepsy Specialist Certification'
    ],
    workingHours: 'Mon - Thu: 09:00 - 17:00',
    address: 'Neuroscience Institute, Jl. Salemba Raya No. 6, Jakarta'
  },
  {
    id: '10',
    name: 'Dr. Emily Davis',
    hospital: 'Eye Care Specialists',
    specialty: 'Ophthalmology Specialist',
    experience: '6 Years',
    rating: '4.5',
    price: '240.000',
    image: '/assets/image/doctordetails-dire-clove.png',
    available: true,
    verified: true,
    about: 'Skilled ophthalmologist providing comprehensive eye care from routine exams to complex surgical procedures.',
    education: [
      'Doctor of Medicine - Universitas Gadjah Mada',
      'Ophthalmology Residency - JEC Eye Hospital'
    ],
    workingHours: 'Mon - Sat: 10:00 - 18:00',
    address: 'Eye Care Specialists, Jl. Panglima Polim No. 33, Jakarta'
  }
]

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'Appointment Confirmed',
    message: 'Your appointment with Dr. Raze Invoker has been confirmed for Aug 31, 2024 at 13:00 PM',
    date: '2024-08-25',
    time: '10:30',
    read: false,
    type: 'appointment'
  },
  {
    id: '2',
    title: 'Payment Successful',
    message: 'Your payment of Rp 250.000 has been successfully processed. Booking code: SEHAT1935',
    date: '2024-08-25',
    time: '10:00',
    read: false,
    type: 'payment'
  },
  {
    id: '3',
    title: 'Appointment Reminder',
    message: 'Don\'t forget your appointment with Dr. Marci Maiden tomorrow at 14:00 PM',
    date: '2024-08-24',
    time: '15:45',
    read: true,
    type: 'reminder'
  },
  {
    id: '4',
    title: 'New Doctor Available',
    message: 'Dr. Dire Clove, Cardiology Specialist is now available for booking at Sentinel Medical Center',
    date: '2024-08-23',
    time: '09:15',
    read: true,
    type: 'general'
  },
  {
    id: '5',
    title: 'Booking Cancelled',
    message: 'Your appointment scheduled for Aug 20, 2024 has been cancelled. Full refund processed.',
    date: '2024-08-20',
    time: '11:20',
    read: true,
    type: 'appointment'
  },
  {
    id: '6',
    title: 'Health Tips',
    message: 'Remember to stay hydrated and maintain a balanced diet for optimal health!',
    date: '2024-08-19',
    time: '08:00',
    read: true,
    type: 'general'
  }
]

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find(doctor => doctor.id === id)
}

export function getDoctorsBySpecialty(specialty: string): Doctor[] {
  return doctors.filter(doctor => doctor.specialty.toLowerCase().includes(specialty.toLowerCase()))
}
