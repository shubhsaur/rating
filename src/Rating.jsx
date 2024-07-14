import React from 'react'
import { useState } from 'react';

const STAR_SIZE = {
    xsm: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    xxl: '3rem',
}

const Rating = ({ count = 5, size='md', disabled=false }) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div className='rating-wrapper'>
            {[...Array(count)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type='checkbox'
                            name='rating'
                            value={currentRating}
                            onChange={(e) => {
                                if(rating === currentRating){
                                    setRating(null)
                                }else{
                                    setRating(currentRating)
                                }
                            }}
                            disabled={disabled ? true : false}
                        />

                        <span
                            className={disabled ? 'star star-disabled' : 'star'}
                            style={{
                                color:
                                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                                fontSize:
                                    `${STAR_SIZE[size]}`
                            }}
                            onMouseEnter={() => {if (!disabled) setHover(currentRating)}}
                            onMouseLeave={() => {if (!disabled) setHover(null)}}
                            
                        >
                            &#9733;
                        </span>
                    </label>
                )
            })}
        </div>
    )
}

export default Rating