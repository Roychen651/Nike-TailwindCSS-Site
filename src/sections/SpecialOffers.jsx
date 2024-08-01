import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import arrowRight from '../assets/icons/arrow-right.svg'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} 
        className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            
            <span className="text-coral-red"> Special </span>Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shooping journey with our special offers and discounts.
            From shoes to accessories, we have it all.
          </p>
          <p className="mt-6 lx:max-w-lg info-text">
            Navigate a realm of possibilities with our exclusive deals.
            Your journey to a more stylish you starts here.
          </p>
          <div className="mt-11 ">
          <Button label='Shop now' iconURL={arrowRight} />
          </div>
        </div>
    </section>
  )
}

export default SpecialOffers