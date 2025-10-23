'use client'

import { useState } from 'react'
import { notifications as initialNotifications } from '@/data/doctors'
import type { Notification } from '@/types/doctor'
import PageHeader from '@/components/layout/PageHeader'
import BottomNavigation from '@/components/layout/BottomNavigation'

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })))
  }

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    )
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'appointment':
        return '/assets/icons/doctordetails-doctor-available.svg'
      case 'payment':
        return '/assets/icons/paymentdetails-copy.svg'
      case 'reminder':
        return '/assets/image/bookingconfirm-clock-nonactive.png'
      case 'general':
        return '/assets/icons/homepage-nav-notification.svg'
      default:
        return '/assets/icons/homepage-nav-notification.svg'
    }
  }

  const getNotificationBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'appointment':
        return 'bg-[#2C40FF17]'
      case 'payment':
        return 'bg-[#277B5317]'
      case 'reminder':
        return 'bg-[#FF9D1E17]'
      case 'general':
        return 'bg-[#757C9817]'
      default:
        return 'bg-[#F1F1F1]'
    }
  }

  return (
    <main className="relative pb-[98px] bg-[#F7F8FA]">
      <PageHeader
        title="Notifications"
        subtitle={`${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}`}
        backHref="/"
        height="md"
      />

      <section className="-mt-[91px] w-full space-y-4 pb-4">
        {unreadCount > 0 && (
          <div className="mx-4 rounded-3xl bg-[#FFFFFF] p-4">
            <button
              onClick={markAllAsRead}
              className="flex w-full items-center justify-center gap-2 rounded-[100px] bg-[#2C40FF17] py-3 font-jakarta font-bold leading-[20.16px] text-[#2C40FF] transition-all hover:bg-[#2C40FF] hover:text-white"
            >
              <img src="/assets/icons/searchresult-verify.svg" alt="Mark all" className="size-5" />
              Mark All as Read
            </button>
          </div>
        )}

        <div className="mx-4 space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => !notification.read && markAsRead(notification.id)}
              className={`cursor-pointer rounded-3xl bg-[#FFFFFF] p-5 transition-all ${
                notification.read
                  ? 'border border-[#F1F1F1]'
                  : 'border-2 border-[#2C40FF] shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${getNotificationBgColor(notification.type)}`}
                >
                  <img src={getNotificationIcon(notification.type)} alt="Icon" className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="font-jakarta font-bold leading-[20.16px] text-[#161616]">
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="ml-2 size-2 shrink-0 rounded-full bg-[#2C40FF]"></span>
                    )}
                  </div>
                  <p className="mb-2 font-jakarta text-sm leading-[17.64px] text-[#757C98]">
                    {notification.message}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#757C98]">
                    <img
                      src="/assets/icons/doctordetails-doctor-available.svg"
                      alt="Date"
                      className="size-4"
                    />
                    <span className="font-jakarta font-semibold">
                      {new Date(notification.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <span>•</span>
                    <img
                      src="/assets/image/bookingconfirm-clock-nonactive.png"
                      alt="Time"
                      className="size-4"
                    />
                    <span className="font-jakarta font-semibold">{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="mx-4 rounded-3xl bg-[#FFFFFF] p-10">
            <div className="text-center">
              <img
                src="/assets/icons/homepage-nav-notification.svg"
                alt="No notifications"
                className="mx-auto mb-4 size-16 opacity-50"
              />
              <h3 className="mb-2 font-jakarta text-lg font-bold text-[#161616]">
                No Notifications
              </h3>
              <p className="font-jakarta text-sm text-[#757C98]">
                You're all caught up! Check back later for updates.
              </p>
            </div>
          </div>
        )}
      </section>

      <BottomNavigation activePage="home" />
    </main>
  )
}
