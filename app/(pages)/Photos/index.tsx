import Photo from '@/components/Photo'
import Title from '@/components/Title'
import iMe from '@/types/iMe'
import React from 'react'

type Props = { photos: iMe["photos"] | undefined }
export default function Photos(props:Props) {
    const { photos } = props
    if(!photos) return null
  return (
    <section className='flex flex-col gap-4' id="me">
      <Title title="Photos of me" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {photos.map((photo) => (
          <Photo key={photo} photo={photo}  />
        ))}
      </div>
    </section>
  )
}
