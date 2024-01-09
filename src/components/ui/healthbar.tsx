'use client'
import React from 'react'

const Healthbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='relative flex items-center flex-grow w-[80px] h-2 border-2 rounded-full bg-green-500/50 border-green-500/50'>
                <div className='h-1.5 w-1/5 box-border border rounded-full bg-green-500'></div>
                <div className='h-1.5 w-1/5 box-border border rounded-full bg-green-500'></div>
                <div className='h-1.5 w-1/5 box-border border rounded-full bg-green-500'></div>
                <div className='h-1.5 w-1/5 box-border border rounded-full bg-green-500'></div>
                <div className='h-1.5 w-1/5 box-border border rounded-full bg-green-500'></div>
            </div>
            <div className='relative text-right ml-0.5 pt-0.5'>
                <span className='font-[300] text-[14px] leading-[16px] text-green-500'>
                    100%
                </span>
            </div>
        </div>
    )
}

export default Healthbar