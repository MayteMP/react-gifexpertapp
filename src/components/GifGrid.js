import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGits';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  
  const { data:images, loading } = useFetchGifs( category );
  
  return (
    <>
    <h3 className='animate__fadeOutUpBig'>{ category }</h3>
    <div className='card-grid animate__animated animate__bounce'>
      {
        images.map( img => (
          <GifGridItem 
            key={ img.id }
            { ...img } />
        ))
      }
    </div> 
    </>
  )
}
