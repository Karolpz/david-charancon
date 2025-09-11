import React from 'react'
import InspirationData from '../../data/inspirations-data.json'
import InspirationItem from '../../components/InspirationItem'

export const Inspirations = () => {
  return (
    <section className="inspirations" id='inspirations'>
      <h2 className='inspirations--title'>MES INSPIRA<span>TIONS</span></h2>
      <div className="inspirations__content">
        {InspirationData.map((item, index) => (
          <InspirationItem
            key={index}
            {...item}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

export default Inspirations
