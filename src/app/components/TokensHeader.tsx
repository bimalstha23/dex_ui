import Image from 'next/image'
import React from 'react'

const TokensHeader = () => {
    const tokens = [
        {
            name: 'ETH',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880'
        }, {
            name: 'BTC',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'
        }, {
            name: 'USDT',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707'
        }, {
            name: 'BNB',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615'
        }, {
            name: 'ADA',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png?1547034860'
        }, {
            name: 'XRP',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1605778731'
        }, {
            name: 'USDC',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389'
        }, {
            name: 'DOGE',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256'
        }, {
            name: 'DOT',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/12171/small/aJGBjJFU_400x400.jpg?1597804776'
        }, {
            name: 'UNI',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604'
        }, {
            name: 'BUSD',
            address: '0x000000000',
            icon: 'https://assets.coingecko.com/coins/images/9576/small/BUSD.png?1568947766'
        }, {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
        {
            name: 'BCH',
            address: '0x000',
            icon: 'https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492'
        },
    ]


    return (
        <div className='' style={{
            gridArea: '1 / 1 / 2 / 4',
        }}>
            <div className='h-full w-full border bg-card text-card-foreground shadow rounded  relative overflow-hidden'>
                <div className='flex flex-row w-full overflow-x-auto no-scrollbar'>
                    {tokens.map((token, index) => (
                        <div key={index} className='relative'>
                            <div className='bg-card relative min-w-[100px] flex-shrink-0 select-none max-h-[28px] py-6 flex justify-center items-center text-md space-x-2 hover:cursor-pointer text-text-label'>
                                <div className='relative'>
                                    <Image src={token.icon} className='w-5 h-5' alt={token.name} height={20} width={20} />
                                </div>
                                <div>
                                    <span className='font-[300] text-[13px] leading-[16px] mt-0.5'>
                                        {token.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TokensHeader