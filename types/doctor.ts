export interface Doctor {
  id: string
  name: string
  hospital: string
  specialty: string
  experience: string
  rating: string
  price: string
  image: string
  available: boolean
  verified: boolean
  about?: string
  education?: string[]
  workingHours?: string
  address?: string
}

export interface Notification {
  id: string
  title: string
  message: string
  date: string
  time: string
  read: boolean
  type: 'appointment' | 'payment' | 'reminder' | 'general'
}
