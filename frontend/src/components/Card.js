import React from 'react'
import data from '../data.json'
import '../components/cards.css'
const Card = () => {
  return (
    <>
    <div className='container'>
    <div className='row g-3 m-4'>
    {
        data.map((flat)=>{
            return (
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
             <img src={flat.img} alt='image1' height='250px' className=''></img>
             <div className='card-body'>
                <h2 className='card-title'>Rent:{flat.rent}</h2>
                <p className='card-text'>Location:{flat.location}</p>
                <p className='card-text'>Area:{flat.area}</p>
                <p className='card-text'>Near:{flat.closeto}</p>
                <p className='card-text'>For:{flat.forwhom}</p>
             </div>
          </div>
        </div>
            )
        })
    }
    </div>
        </div>
    </>
  )
}

export default Card