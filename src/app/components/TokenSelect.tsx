import CustomTabs from '@/components/ui/custom-tabs'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/seperator'
import { Switch } from '@/components/ui/switch'

import { ChevronDown, Info, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TokenSelect = () => {
    const tokens = [
        {
            name: 'ETH',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
            price: '2000',
            change: '2.65',
        }, {
            name: 'BTC',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
            price: '2000',
            change: '2.65',
        }, {
            name: 'USDT',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707',
            price: '2000',
            change: '2.65',
        }, {
            name: 'BNB',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
            price: '2000',
            change: '2.65',
        }, {
            name: 'ADA',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png?1547034860',
            price: '2000',
            change: '2.65',
        }, {
            name: 'XRP',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1605778731',
            price: '2000',
            change: '2.65',
        }, {
            name: 'USDC',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389',
            price: '2000',
            change: '2.65',
        }, {
            name: 'DOGE',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256',
            price: '2000',
            change: '2.65',
        }, {
            name: 'DOT',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/12171/small/aJGBjJFU_400x400.jpg?1597804776',
            price: '2000',
            change: '2.65',
        }, {
            name: 'UNI',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604',
            price: '2000',
            change: '2.65',
        }, {
            name: 'BUSD',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/9576/small/BUSD.png?1568947766',
            price: '2000',
            change: '2.65',
        }, {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492',
            price: '2000',
            change: '2.65',
        },
    ]

    return (
        <div className='col-start-1 col-end-4 row-start-2 row-end-3'>
            <div className='inline-flex items-center justify-center w-full h-full thin-scroll'>
                <div className='h-full bg-card border-container-border overflow-hidden border-0 rounded-sm w-[300px]'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className=' change-market-inner h-full flex flex-fill flex-row w-full items-center justify-between bg-container-bg text-text-default border-container-border relative group hover:cursor-pointer sm:p-2 border border-r-0'>
                            <div className='flex flex-row items-center justify-between w-full asset-dropdown-header flex-fill xs:px-4 sm:px-0'>
                                <div className='flex items-center'>
                                    <Image
                                        src={'https://cdn.iconscout.com/icon/free/png-512/free-ethereum-1-283135.png?f=webp&w=512'}
                                        className='w-[18px] h-[18px] mr-2'
                                        blurDataURL='https://cdn.iconscout.com/icon/free/png-512/free-ethereum-1-283135.png?f=webp&w=512'
                                        placeholder='blur'
                                        width={18}
                                        height={18}
                                        alt='ETH'
                                    />
                                    <div className='outline-none focus:outline-none flex '>
                                        <span className='font-[300] text-[14px] leading-[18px] text-text-default'>
                                            ETH-PERP
                                        </span>
                                    </div>
                                    <span className='pl-1.5'>
                                        <div className='class="h-full flex items-center rounded-sm space-x-0.5 bg-muted text-chip-default-text"'>
                                            <span className='font-[300] text-[12px] leading-[14px] tracking-[0.15px]'>
                                                4x
                                            </span>
                                        </div>
                                    </span>

                                    <div className='ml-2'>
                                        <Info size={'20px'} />
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2 text-xs text-text-label'>
                                    <ChevronDown />
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-card h-[800px] inline-block  rounded  overflow-auto align-middle  text-text-emphasis z-50 border border-container-border sm:w-[400px]'>
                            <div className='relative z-20 flex flex-col w-full min-h-full'>
                                <div className='flex items-center w-full py-1 pl-2 border-b border-border'>
                                    <div className='text-darkBlue-30'>
                                        <Search />
                                    </div>
                                    <span className='py-2'>
                                        <input
                                            type='text'
                                            className='w-full px-2 bg-transparent text-text-default default-transition focus:outline-none font-body outline-none border-none'
                                            placeholder='Search'
                                        />
                                    </span>
                                </div>

                                {/* Tabs To Filter Perpetuals and Spot */}

                                <CustomTabs
                                    tabs={['Perpetuals', 'Spot']}
                                    defaultTab={'Perpetuals'}
                                    onTabChange={(tab) => console.log(tab)}
                                />

                                {/* sort and filter to show details  */}
                                <div className='flex items-center justify-start w-full px-2 py-2 border-b border-container-border'>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-accent inline-flex text-xs'>Show Details</span>
                                        <Switch />
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <span className='inline-flex ml-4 mr-2 text-xs text-accent'>
                                            Sort
                                        </span>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder='Default'
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='default'>
                                                    default
                                                </SelectItem>

                                                <SelectItem value='volumeasc'>
                                                    Volume(asc)
                                                </SelectItem>

                                                <SelectItem value='gainers'>
                                                    Gainers
                                                </SelectItem>

                                                <SelectItem value='losers'>
                                                    Losers
                                                </SelectItem>

                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className='flex flex-col overflow-auto '>
                                    <DropdownMenuLabel>New Markets</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <div className='flex flex-col'>
                                        {tokens.map((token, index) => (
                                            <div key={index} className='w-full border-b first:border-t border-border '>
                                                <button className='items-center justify-between w-full bg-card'>
                                                    <div className='flex items-center justify-between w-full py-4 pl-2 text-primary'>
                                                        <div className='flex flex-row'>
                                                            <Image src={token.icon} className='w-6 h-6' width={18} height={18} alt="eth" />
                                                            <span className='ml-2'>
                                                                {token.name}
                                                            </span>
                                                            <span className='pl-1.5'>
                                                                <div className='h-full flex items-center rounded-sm space-x-0.5 bg-accent text-primary' >
                                                                    <span className='font-[300] text-[12px] leading-[14px] p-1 tracking-[0.15px]'>
                                                                        4x
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className='flex items-center justify-end pr-2'>
                                                            <div className='px-1 mr-1 rounded-md hover:bg-card'>
                                                                <span className='whitespace-nowrap'>
                                                                    ${token.price}
                                                                </span>
                                                            </div>
                                                            <div className='rounded-md hover:bg-card text-xs min-w-[3rem]'>
                                                                <span className='text-green-500 flex items-center'> +{token.change}%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        ))}


                                    </div>
                                </div>




                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className='relative flex items-center justify-center w-full border border-container-border sm:pr-4 bg-container-bg h-full thin-scroll rounded-sm overflow-x-auto'>
                    <div className='flex justify-between w-full px-4 whitespace-nowrap'>
                        <div className='flex items-center w-full space-x-3 xs:justify-between sm:justify-between md:justify-start font-display'>
                            <div className='outline-none focus:outline-none flex'>
                                <div className='block h-2 w-2 rounded-full bg-green-500 mr-1'>
                                </div>
                            </div>
                            <div className='outline-none focus:outline-none flex mr-20 sm:mr-0'>
                                <span className='font-[400] text-[16px] leading-[-0.25px] whitespace-nowrap'>
                                    $0.6138
                                </span>
                            </div>
                            <div className='outline-none focus:outline-none flex mr-20 sm:mr-0'>
                                <span className='font-[400] text-[16px] leading-[-0.25px] whitespace-nowrap'>
                                    <span className='text-green-500 flex items-center'>
                                        +0.23%
                                    </span>
                                </span>
                            </div>
                            <Separator orientation="vertical" />
                            <div className='outline-none focus:outline-none flex'>
                                <span className='font-[400] text-[11px] leading-[12px] min-w-[7rem] max-w-[7rem] tracking-[.15px]'>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            Oracle Price
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            $0.6120
                                        </div>
                                    </div>
                                </span>
                            </div>

                            <Separator orientation="vertical" />
                            <div className='outline-none focus:outline-none flex'>
                                <span className='font-[400] text-[11px] leading-[12px] min-w-[10rem] max-w-[10rem] tracking-[.15px]'>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            Predicted Funding Rate
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            $0.54.57% APR in 56:12
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <Separator orientation="vertical" />
                            <div className='outline-none focus:outline-none flex'>
                                <span className='font-[400] text-[11px] leading-[12px] min-w-[10rem] max-w-[10rem] tracking-[.15px]'>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            Predicted Funding Rate
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            $0.54.57% APR in 56:12
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <Separator orientation="vertical" />
                            <div className='outline-none focus:outline-none flex'>
                                <span className='font-[400] text-[11px] leading-[12px] min-w-[10rem] max-w-[10rem] tracking-[.15px]'>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            Predicted Funding Rate
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            $0.54.57% APR in 56:12
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <Separator orientation="vertical" />
                            <div className='outline-none focus:outline-none flex'>
                                <span className='font-[400] text-[11px] leading-[12px] min-w-[10rem] max-w-[10rem] tracking-[.15px]'>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            Predicted Funding Rate
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='overflow-hidden text-text-label '>
                                            $0.54.57% APR in 56:12
                                        </div>
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TokenSelect