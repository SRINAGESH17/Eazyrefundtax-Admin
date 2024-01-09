import React from 'react'

function DeleteClient(props) {
  return (
    <div className='flex justify-center items-center z-40 top-0 bottom-0 left-0 right-0 bg-[#0000004D] fixed'>
      <div className='flex w-[36%] flex-col rounded-lg bg-white p-8 justify-between'>
        <p className='font-amulya_medium text-2xl text-[#000]'>Are you sure ?</p>
        <p className='font-amulya_regular text-[#8888A3] text-base pt-2'>You are deleting Client from Eazy Refund</p>
        <p className='pt-2 font-amulya_regular text-[#8888A3] text-base'>Reason For deleting</p>

        <form className='pt-2 flex flex-col'>
            <textarea name="" id="" cols="50" rows="5" placeholder='Enter description' className='resize-none border-[1px] border-[#D1D4D7] outline-none rounded-lg px-1'></textarea>
            <button type='submit' className='mt-4 rounded-lg bg-[#C5090A] px-28 py-5 text-[#FFF] text-sm font-amulya_bold'>
                Delete
            </button>
        </form>
        <button onClick={()=>props.closeClientPopUp(false)} className='mt-4 rounded-lg border-[#C5090A] border-2 px-28 py-5 text-[#C5090A] text-sm font-amulya_bold '>
            Close
        </button>
      </div>
    </div>
  )
}

export default DeleteClient
