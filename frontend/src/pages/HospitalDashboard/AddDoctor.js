import React, { useState } from 'react'

const AddDoctor = () => {
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [license, setLicense] = useState("")
  const [spec, setSpec] = useState("")

  const AddDoc = () => {
    let data = {fname, email, license, spec}
    console.log(data)
  }
  return (
    <div>
      <div className='bg-slate-100 min-h-screen flex flex-col'>
        <form className= 'mx-12 px-8 p-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>ADD DOCTOR</h2>
          <div className='flex flex-col text-slate-800 py-2'>
            <label>Full Name </label>
            <input value={fname} onChange={(e)=> setFname(e.target.value)} className='rounded-lg mt-2 p-2 focus:border-slate-300 focus:bg-slate-100' type="text"/>
          </div>
          <div className='flex flex-col text-slate-800 py-2'>
            <label>Email </label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} className='rounded-lg mt-2 p-2 focus:border-slate-300 focus:bg-slate-100' type="email"/>
          </div>
          <div className='flex flex-col text-slate-800 py-2'>
            <label>License Number </label>
            <input value={license} onChange={(e)=> setLicense(e.target.value)} className='rounded-lg mt-2 p-2 focus:border-slate-300 focus:bg-slate-100' type="number"/>
          </div>
          <div className='flex flex-col text-slate-800 py-2'>
            <label>Specialty </label>
            <input value={spec} onChange={(e)=> setSpec(e.target.value)} className='rounded-lg mt-2 p-2 focus:border-slate-300 focus:bg-slate-100' type="text"/>
          </div>
          <div className='border-2 border-slate-500 rounded w-full my-5 py-2 bg-slate-500 text-slate-100 shadow-lg hover:shadow-slate-600 font-semibold'>
            <input onClick={AddDoc} className='cursor-pointer w-full mx-auto' type="submit" value="Add Doctor"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDoctor
