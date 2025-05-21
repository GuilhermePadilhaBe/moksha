import { useChatStore } from '@/store/ducks/chat.store'
import { useEffect } from 'react'

export default function Index() {
  const { messages, fetchMessages, postMessage, loading } = useChatStore()

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  console.log(messages)

  return (
    <main>
      <div className='flex flex-col items-center justify-center h-screen'>
        Welcome to
        <img
          className='logo'
          src='https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-js-logo.svg'
          alt='Modern.js Logo'
        />
        <p className='name'>Modern.js</p>
      </div>
    </main>
  )
}
