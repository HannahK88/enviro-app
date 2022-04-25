import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [locationInput, setLocationInput] = useState()
    const [location, setLocation] = useState()

    const handleChange = (e) => {
        setLocationInput(e.target.value)
    }
    const handleClick = (e) => {
        setLocation(e.target.value)
    }
    console.log(location)
    console.log(locationInput)
  return (
    <div className='page-wrapper'>
        <div className='input-container'>
            <label htmlFor="location-input">Enter your City</label>
                <input name='location-input' type="text" onChange={(e) => handleChange(e)}/>
                <button value={location} onClick={(e) => handleClick(e)}>GO</button>
        </div>
        <h3>{location}</h3>
        <div className='result-container'>
          <Link to='/fossil-fuels' className='result-card'>Fossil Fuels Burnt</Link>  
          <Link to='/air-pollution' className='result-card'>Air Pollution</Link>  
          <Link to='/water-pollution' className='result-card'>Water Pollution</Link>  
          <Link to='/not-recycled' className='result-card'>Waste Not Recycled</Link>  
        </div>
    </div>
  )
}

export default Home