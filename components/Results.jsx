import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

export default function Results({result}) {
  return( <FlipMove className='px-5 my-10 gap-2 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex 
  flex-wrap justify-center font-sans'>
    {result.map((movie) => {
      return <Thumbnail key={movie?.id} result={movie}/>

    })}
  </FlipMove>);
}
