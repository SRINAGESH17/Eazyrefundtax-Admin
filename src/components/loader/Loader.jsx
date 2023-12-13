import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <TailSpin
  height="50"
  width="50"
  color="#BE0A23
  "
  ariaLabel="tail-spin-loading"
  radius="0.1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loader