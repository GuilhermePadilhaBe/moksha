import { apiClient } from '../client'
import type { ChatMessage } from './types.ts'

export const getMessages = async (): Promise<ChatMessage[]> => {
  const { data } = await apiClient.get('/chat/messages')
  return data
}

export const sendMessage = async (message: string): Promise<ChatMessage> => {
  const { data } = await apiClient.post('/chat/send', { message })
  return data
}
