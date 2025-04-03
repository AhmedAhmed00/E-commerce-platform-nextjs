'use client'

import Image from "next/image"


export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src="/images/logo.svg" width={48} height={48} alt="logo" />
        <div>
            the page is not exist
        </div>

    </div>
  )
}
