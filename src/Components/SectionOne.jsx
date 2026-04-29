import React from 'react'
import SubSectionComponent from './SubSection'

function SectionOne({name}) {
  return (
    <div className='w-64 h-64 bg-green-400'>
        <h1>Section One</h1>

        <SubSectionComponent name={name}/>
    </div>
  )
}

export default SectionOne