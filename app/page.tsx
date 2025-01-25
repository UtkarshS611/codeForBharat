import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <Image
      src={"logo.svg"}
      alt='Logo'
      width={400}
      height={400}
      />
    </div>
  )
}

export default Home