import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/seperator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='items-center justify-between w-full text-text-default hover:cursor-default max-sm:hidden sm:flex h-[28px] px-4 overflow-hidden'>
            <div className='flex items-center h-full space-x-2'>
                <div className='outline-none focus:outline-none flex'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className='flex items-center space-x-1'>
                                    <div className='block h-2 w-2 rounded-full bg-green-500 mr-1'></div>
                                    <span className='text-xs text-primary'>
                                        Operational
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Exchange Status: Active</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Separator orientation="vertical" />


                    <Button variant={'link'} >
                        <div className='flex items-center space-x-1'>
                            <div className='block h-2 w-2 rounded-full bg-green-500 mr-1'></div>
                            <span className='text-xs text-primary'>
                                Triton RPC Pool 1
                            </span>
                        </div>
                    </Button>

                    <Separator orientation="vertical" />


                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className='flex items-center space-x-1'>
                                    {/* <div className='block h-2 w-2 rounded-full bg-green-500 mr-1'></div> */}
                                    <span className='text-xs text-primary'>
                                        2686 TPS
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>
                                    Solana Network is Currently Running At 2686 TPS
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <Separator orientation="vertical" />

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant={'link'} >
                                    <div className='flex items-center space-x-1'>
                                        <div className='block h-2 w-2 rounded-full bg-green-500 mr-1'></div>
                                        <span className='text-xs text-primary'>
                                            Priotity Fees: Dynamic
                                        </span>
                                    </div>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>
                                    Solana Network is Currently Running At 2686 TPS
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Separator orientation="vertical" />
                    <div className='flex items-center space-x-1'>
                        <span className='text-xs text-primary'>
                            v1.1.1
                        </span>
                    </div>
                    <Separator orientation="vertical" />

                    <Button variant={'link'} >
                        <div className='flex items-center space-x-1'>
                            <div className='block h-2 w-2 rounded-full bg-green-500 mr-1'></div>
                            <span className='text-xs text-primary'>
                                Tx version:0
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
            <div className='flex items-center h-full space-x-2'>
                <a href="#">
                    <div className='h-3 px-1 '>
                        <Twitter size={'20px'} />
                    </div>
                </a>
                <a href="#">
                    <div className='h-3 px-1 '>
                        <Twitter size={'20px'} />
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer