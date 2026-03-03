'use client'

import Image from 'next/image'

export default function ProfilePhoto() {
  return (
    <div className="photo-ring-wrap">
      <div className="photo-ring" aria-hidden="true" />
      <div className="photo-circle">
        <Image
          src="/assets/leo.jpg"
          alt="Leonardo Americo"
          className="photo-img"
          width={132}
          height={132}
          priority
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement
            img.style.display = 'none'
            const fb = img.nextElementSibling as HTMLElement | null
            if (fb) fb.removeAttribute('hidden')
          }}
        />
        <span className="photo-fallback" hidden aria-hidden="true">LA</span>
      </div>
    </div>
  )
}
