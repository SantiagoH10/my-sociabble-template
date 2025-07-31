'use client'

import { useState } from 'react'
import { ThreeDButton } from '@/template-components/ThreeDButton'
import { getLoremIpsum } from '@/utils/api'

export function LipsumGenerator() {
  const [lipsum, setLipsum] = useState('')

  const genLipsum = async () => {
    const lipsumObj = await getLoremIpsum()
    console.log(lipsumObj)
    setLipsum(lipsumObj?.text)
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-blue-100 p-3 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="pb-2 text-xl font-semibold text-gray-700 dark:text-white">
          Lipsum generator
        </p>
        <ThreeDButton onClick={() => genLipsum()} className="font-semibold">
          Generate
        </ThreeDButton>
      </div>
      <div className="mx-auto w-1/2 flex-[0.5] rounded-xl bg-blue-200 shadow-md dark:bg-gray-600">
        <p>{lipsum}</p>
      </div>
    </div>
  )
}
