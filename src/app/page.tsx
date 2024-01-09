'use client'
import TokensHeader from './components/TokensHeader'
import TokenSelect from './components/TokenSelect'
import TradeComponent from './components/TradeComponent'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Button } from '@/components/ui/button'
import { ChevronDown, Heart, Scaling } from 'lucide-react'
import useWindowSize from '@/hooks/useWindowSize'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Healthbar from '@/components/ui/healthbar'
import CustomTabs from '@/components/ui/custom-tabs'
import { Fragment } from 'react'

export default function Home() {

  const TradePageTabs = [
    {
      name: 'Positions',
      href: '#',
      current: false,
    },
    {
      name: 'Trades',
      href: '#',
      current: true,
    },
    {
      name: 'Orders',
      href: '#',
      current: false,
    },
    {
      name: 'Fills',
      href: '#',
      current: false,
    },
    {
      name: 'Unsettled P&L',
      href: '#',
      current: false,
    },
    {
      name: 'Balances',
      href: '#',
      current: false,
    },
  ]

  const width = useWindowSize()


  return (
    <main className="grid gap-2  px-auto h-full  px-4   maingridContainer">

      <TokensHeader />
      <TokenSelect />

      {/* this conditional rendering is causing hydration error */}
      {
        typeof window !== 'undefined' && width && width > 1000 && (
          <Fragment>
            <TradeComponent />
          </Fragment>
        )
      }


      <div className='overflow-auto no-scrollbar charmaincontainer-grid-area'>
        <div className='grid max-md:gap-y-2 md:gap-2 h-full overflow-auto no-scrollbar chartmaincontainer'>

          {/* this conditional rendering is causing hydration error */}
          {
            typeof window !== 'undefined' && width && width < 1000 && (
              <Fragment>
                <TradeComponent />
              </Fragment>
            )
          }

          <div className=' grid-area-2'
            style={{
              gridArea: "1 / 2 / 2 / 3"
            }}
          >
            <div className='bg-container-bg h-full border-border rounded border overflow-hidden '>
              <div className='flex w-full text-text-emphasis max-h-[40px]'>
                <div className='inline-flex items-center justify-between w-full p-2 border-b border-container-border hover:cursor-pointer hover:bg-accent hover:brightness-125'>
                  <div className='max-w-[80%] relative'>
                    <span className='font-[300] text-[14px] leading-[16px] inline-flex items-center text-text-emphasis whitespace-nowrap'>
                      Main Account
                    </span>
                  </div>
                  <div className='inline-flex items-center'>
                    <div className='m-1 mt-2 rounded-md items-center'>
                      <ChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              <div className='overflow-hidden flex w-full pt-0.5 text-text-emphasis px-2'>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent className='text-xs'>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent className='text-xs'>
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className='inline-flex justify-between w-full px-2 pb-1 mt-2 hover:bg-container-bg-hover cursor-pointer'>
                <div className="flex items-center w-full text-md text-primary justify-between space-x-6">
                  <div className='flex items-center w-full text-md text-text-emphasis justify-between space-x-6'>
                    <div className='flex items-center mr-2 space-x-2'>
                      <Heart />
                      <div className='outline-none focus:outline-none flex items-center pt-0.5'>
                        <span className='font-[300] text-[14px] leading-[16px] underline cursor-pointer'>
                          health
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Healthbar />
              </div>
            </div>

          </div>
          <div className='grid-area-3'>
            <div className='h-full bg-container-bg border-border rounded border overflow-hidden '>
              <div className='flex flex-col h-full'>
                <CustomTabs
                  tabs={['Order Book', 'Trade History']}
                  defaultTab='Order Book'
                  onTabChange={(tab) => console.log(tab)}
                />
              </div>
            </div>

          </div>


          <div className='grid-area-chartcontainer'
          >
            <div className='h-full bg-card border-border rounded border overflow-hidden '>
              {/* <TradingViewWidget /> */}
            </div>

          </div>


          <div className='grid-area-orderinfoContainer'

          >
            <div className='h-full bg-container-bg border-border rounded border overflow-hidden '>
              <div className='h-full bg-card border-border rounded border overflow-hidden'>
                <div className='flex flex-col h-full'>
                  <div className='inline-flex items-center justify-between w-full overflow-x-auto border-b border-border thin-scrollbar'>
                    <CustomTabs
                      tabs={TradePageTabs.map((tab) => tab.name)}
                      defaultTab='Trades'
                      onTabChange={(tab) => console.log(tab)}
                    />
                    <div className='max-xl:hidden'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild className='mr-2'>
                          <Button variant="outline" size={'icon'}>
                            <Scaling />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>ReSize</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <span>Full </span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Medium  </span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Small</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Minumize</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className='transition-height ease-in duration-100' >
                    <div className='flex flex-col flex-grow h-[250px]'>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
