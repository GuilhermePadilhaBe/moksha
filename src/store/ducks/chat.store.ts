import { getMessages, sendMessage } from '@/api/chat/chat.api'
import type { ChatMessage } from '@/api/chat/types'
import { create } from 'zustand'

interface ChatState {
  messages: ChatMessage[]
  loading: boolean
  fetchMessages: () => Promise<void>
  postMessage: (message: string) => Promise<void>
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  loading: false,

  fetchMessages: async () => {
    set({ loading: true })
    try {
      const messages = await getMessages()
      set({ messages })
    } catch (err) {
      console.error(err)
    } finally {
      set({ loading: false })
    }
  },

  postMessage: async (msg) => {
    const newMsg = await sendMessage(msg)
    set((state) => ({
      messages: [...state.messages, newMsg],
    }))
  },
}))
