import React, { useEffect, useState } from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import { BASE_URL } from '../../../config.js'
import useFetchData from '../../hooks/useFetchData.js'
import Loader from '../../components/Loader/Loading.jsx'
import Error from '../../components/Error/Error.jsx'

const Doctors = () => {

  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState('');

  useEffect(() => {
    
    const timeout = setTimeout(()=>{
      setDebounceQuery(query);
    },700);

    return ()=> clearTimeout(timeout);
  },[query]);

  const { data: doctors, error, loading } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)

  const handleSearch = ()=>{
    setQuery(query.trim());

  }

  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className='heading'>Find a Doctor</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] 
        rounded-md flex items-center justify-between">

            <input 
            type="search" 
            className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
            placeholder:text-textColor' 
            placeholder='Search doctor by name or specialization'
            value={query}
            onChange={e => setQuery(e.target.value)} />
            <button onClick={handleSearch} className='btn mt-0 rounded-[0px] rounded-r-md'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">

          {loading && <Loader />}
          {error && <Error />}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            lg:grid-cols-4 gap-5">
              {doctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}


        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center '>What our patients say</h2>
            <p className='text__para text-center'>
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Doctors
