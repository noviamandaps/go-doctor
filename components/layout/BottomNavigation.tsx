import Link from 'next/link'

type NavigationPage = 'home' | 'appointment' | 'booking' | 'profile'

interface BottomNavigationProps {
  activePage: NavigationPage
}

interface NavItem {
  id: NavigationPage
  href: string
  iconActive: string
  iconInactive: string
  label: string
}

const navItems: NavItem[] = [
  {
    id: 'home',
    href: '/',
    iconActive: '/assets/icons/homepage-nav-home-active.svg',
    iconInactive: '/assets/icons/homepage-nav-home-nonactive.svg',
    label: 'Home'
  },
  {
    id: 'appointment',
    href: '/doctor-search',
    iconActive: '/assets/icons/homepage-nav-appointment-active.svg',
    iconInactive: '/assets/icons/homepage-nav-appointment-nonactive.svg',
    label: 'Appointment'
  },
  {
    id: 'booking',
    href: '/my-booking',
    iconActive: '/assets/icons/mybooking-active.svg',
    iconInactive: '/assets/icons/homepage-nav-booking-nonactive.svg',
    label: 'Booking'
  },
  {
    id: 'profile',
    href: '/profile',
    iconActive: '/assets/icons/man-active.svg',
    iconInactive: '/assets/icons/man-nonactive.svg',
    label: 'Profile'
  }
]

export default function BottomNavigation({ activePage }: BottomNavigationProps) {
  return (
    <nav className="navigate fixed bottom-0 left-0 right-0 z-30 mx-auto">
      <div className="mx-auto max-w-[640px]">
        <div className="flex items-center justify-between rounded-t-2xl border-t border-[#F7F8FA] bg-[#FFFFFF] px-4 py-6">
          {navItems.map((item) => {
            const isActive = activePage === item.id
            return (
              <Link
                key={item.id}
                href={item.href}
                className="grid w-[84px] place-items-center gap-[6px]"
              >
                <img
                  src={isActive ? item.iconActive : item.iconInactive}
                  alt={`${item.label} Icon`}
                />
                <p
                  className={`font-jakarta leading-[20.16px] ${
                    isActive
                      ? 'font-bold text-[#2C40FF]'
                      : 'font-semibold text-[#757C98]'
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
