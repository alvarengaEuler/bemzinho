import { create } from 'zustand'
import { addDays, differenceInSeconds, differenceInDays, differenceInMonths, differenceInYears, min } from 'date-fns'

interface TimerData {
  id: number
  title: string
  date: Date
  time: string
  countdown: string | null
}

interface RelationshipDurationData {
 years: string | null
 months: string | null
 days: string | null
 hours: string | null
 minutes: string | null
 seconds: string | null
  
}

interface TimerStore {
  relationshipStart: Date | undefined
  relationshipDuration: RelationshipDurationData | null
  timers: TimerData[]
  setRelationshipStart: (date: Date | undefined) => void
  updateRelationshipDuration: () => void
  addTimer: () => void
  removeTimer: (id: number) => void
  updateTimer: (id: number, updates: Partial<TimerData>) => void
  updateCountdowns: () => void
}

export const useTimerStore = create<TimerStore>((set, get) => ({
  relationshipStart: undefined,
  relationshipDuration: null,
  timers: [{ id: 1, title: "Countdown 1", date: addDays(new Date(), 1), time: "12:00", countdown: null }],

  setRelationshipStart: (date) => set({ relationshipStart: date }),

  updateRelationshipDuration: () => {
    const { relationshipStart } = get()
    if (!relationshipStart) return

    const now = new Date()
    const years = differenceInYears(now, relationshipStart)
    const months = differenceInMonths(now, relationshipStart) % 12
    const days = differenceInDays(now, relationshipStart) % 30
    const totalSeconds = differenceInSeconds(now, relationshipStart)
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    set({
      relationshipDuration:{
        years: years.toString(),
        months: months.toString(),
        days: days.toString(),
        hours: hours.toString(),
        minutes: minutes.toString(),
        seconds: seconds.toString(),
      }
    })
  },

  addTimer: () => {
    const { timers } = get()
    if (timers.length >= 3) return
    const newId = Math.max(...timers.map((t) => t.id)) + 1
    set({
      timers: [...timers, { id: newId, title: `Countdown ${newId}`, date: addDays(new Date(), 1), time: "12:00", countdown: null }]
    })
  },

  removeTimer: (id) => {
    set((state) => ({
      timers: state.timers.filter((timer) => timer.id !== id)
    }))
  },

  updateTimer: (id, updates) => {
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, ...updates } : timer
      )
    }))
  },

  updateCountdowns: () => {
    set((state) => ({
      timers: state.timers.map((timer) => {
        const [hours, minutes] = timer.time.split(":").map(Number)
        const targetDate = new Date(timer.date)
        targetDate.setHours(hours, minutes, 0, 0)

        const now = new Date()
        const diff = differenceInSeconds(targetDate, now)

        if (diff <= 0) {
          return { ...timer, countdown: "Countdown finished!" }
        }

        const days = Math.floor(diff / (24 * 60 * 60))
        const remainingHours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60))
        const remainingMinutes = Math.floor((diff % (60 * 60)) / 60)
        const seconds = diff % 60

        const countdown = `${days}d ${remainingHours}h ${remainingMinutes}m ${seconds}s`
        return { ...timer, countdown }
      })
    }))
  }
}))