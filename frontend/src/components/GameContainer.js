import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameImageSample from '../images/GameImageSample.jpg'
import { ReactComponent as SubmitBtn } from '../images/SubmitBtn.svg';
import PlayAgainModal from './modals/PlayAgainModal'
function GameContainer()
{
    const navigate = useNavigate();
    let numGuesses = 0;
    function showModal(event)
    {
      event.preventDefault();
      
      numGuesses++;
      if(numGuesses == 3)
      {
        // console.log("Showing PlayAgainModal");
        numGuesses = 0;
        navigate('/home');
      }
      console.log(numGuesses);
    }
    return(
    <div className='flex justify-center mt-20 '>
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 w-1/2 gap-x-5 gap-y-4 bg-slate-500 bg-opacity-10 backdrop-blur-sm rounded-md'>
        <div className='text-center mt-5'>
          <p className='text-pr-yellow'>Name of Movie</p>
        </div>
        <div className='min-h-[50px] text-center mt-5'>
          <span className='text-pr-yellow mr-2'>Score:</span>
          <span className='text-pr-red '>pts</span>
        </div>
        <div className='min-h-[50px] row-span-1 sm:row-span-6 text-center justify-self-center'>
          <img className='w-32 sm:w-60 sm:h-84 rounded-lg' src={GameImageSample} alt = 'MoviePostery'></img>
        </div>
        <div className='min-h-[50px] '>
          <p className='text-pr-yellow'>Description:</p>
          <p className='text-pr-white'></p>
        </div>
        <div className='min-h-[50px]'>
          <span className='text-pr-yellow mr-2'>Genre:</span>
          <span className='text-pr-white'></span>
        </div>
        <div className='min-h-[50px]'>
          <span className='text-pr-yellow mr-2'>Box Office:</span>
          <span className='text-pr-white'></span>
        </div>
        <div className='min-h-[50px]'>
          <span className='text-pr-yellow mr-2'>Actors:</span>
          <span className='text-pr-white'></span>
        </div>
        {/* <div className='bg-slate-400 rounded-lg shadow-xl min-h-[50px]'></div> */}
        <div className='min-h-[50px] col-span-1 sm:col-span-2 text-center  '>
          <form onSubmit={showModal} className = 'sm:flex justify-center'>
          <input className='peer h-10 w-32 sm:w-48 border-b-2 border-pr-yellow text-pr-white focus:outline-none bg-transparent focus:placeholder-transparent text-center' placeholder='Guess Rating' id='guess' type='number' min='1' max= '10'></input>
            <button className='mx-5' onClick={showModal}>
              <SubmitBtn className = 'w-20 sm: w-24 self-center'/>
            </button>
          </form>
          
          
        </div>
      </div>
    </div>
    
    )
}
export default GameContainer;