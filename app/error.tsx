'use client'

import { useEffect } from 'react'
import SadComputerIcon from '@/assets/sad-computer.svg'

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center h-main-screen">
      <SadComputerIcon />
      <h1 className="md:text-3xl text-2xl font-bold whitespace-nowrap">
        Oops! <wbr /> Something went wrong...
      </h1>
    </div>
  )
}

export default Error
