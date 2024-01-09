'use client'
import { Button } from '@/components/ui/button'
import CustomTabs from '@/components/ui/custom-tabs'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import React from 'react'
import { useForm } from 'react-hook-form'

const TradeComponent = () => {
    const orderType = [
        {
            value: 'limit',
            label: 'Limit'
        }, {
            value: 'market',
            label: 'Market'
        }, {
            value: 'stopMarket',
            label: 'Stop Market'
        }, {
            value: 'takeProfit',
            label: 'Take Profit'
        }, {
            value: 'takeProfitLimit',
            label: 'Take Profit Limit'
        }
    ]

    const form = useForm({
        defaultValues: {
            ordertype: 'limit',
            limitprice: '0.00'
        }
    })


    return (
        <div className='h-full bg-card w-full rounded border p-2 overflow-auto thin-scroll  trade-component-grid '>
            <div className='flex flex-col space-y-2 h-full overflow-auto thin-scroll p-1 justify-between'>
                <div className='h-full'>
                    <Form {...form}>
                        <div className='flex flex-col border-t border-border border-l'>
                            <CustomTabs
                                tabs={['SHORT', 'LONG']}
                                defaultTab='SHORT'
                                onTabChange={(tab) => console.log(tab)}
                            />
                        </div>
                        <div className='flex flex-row justify-center items-center space-x-2'>
                            <FormField
                                control={form.control}
                                name="ordertype"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormLabel>Order Type </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a Order Type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {orderType.map((item, index) => (
                                                    <SelectItem key={index} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='limitprice'
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormLabel>Limit Price</FormLabel>
                                        <FormControl>
                                            <Input type='number' placeholder='limit price' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormLabel>Size</FormLabel>
                        <div className='flex flex-row justify-center items-center space-x-2'>
                            <FormField
                                control={form.control}
                                name="ordertype"
                                disabled
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input type='number' disabled placeholder='limit price' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='limitprice'
                                disabled
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input type='number' disabled placeholder='limit price' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Form>
                </div>

                <div className='flex flex-col justify-center gap-2'>
                    <div className='flex flex-col w-full space-y-2 rounded-md '>
                        <div className='font-[300] text-[12px] leading-[14px] tracking-[0.15px] flex items-center justify-between w-full'>
                            <span className='shrink-0'>
                                Position
                            </span>
                            <span>
                                0
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center justify-between w-full [&>span]:text-[12px]'>
                        <span className='font-[300] text-[13px] leading-[16px] text-text-label'>
                            Show Confirmation
                        </span>
                        <div>
                            <Switch />
                        </div>
                    </div>

                    <Button disabled variant={'outline'} className='hover:cursor-not-allowed'>
                        UNAVAILABLE
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default TradeComponent