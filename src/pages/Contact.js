import React from 'react'
import {CITY} from'../components/City'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {city} = useParams();
  const contactcity = CITY.find(cities=> cities.scity === city)
  return (
    <div>
{contactcity.scity}
    </div>
  )
}

export default Contact