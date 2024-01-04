"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CandlestickChart, Menu, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"


interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    title: string;
    children: React.ReactNode;
}

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Lend/Borrow",
        href: "/",
        description:
            "Elit voluptate officia cupidatat pariatur incididunt officia incididunt ea magna pariatur ea minim adipisicing.",
    },
    {
        title: "Insurance Fund Staking ",
        href: "/",
        description:
            "Tempor exercitation adipisicing incididunt qui ea laborum sunt reprehenderit incididunt reprehenderit laborum incididunt.",
    },
    {
        title: "MM Rewards",
        href: "/",
        description:
            "Tempor exercitation adipisicing incididunt qui ea laborum sunt reprehenderit incididunt reprehenderit laborum incididunt.",
    },
    {
        title: "DLP",
        href: "/",
        description: "Amet amet do cupidatat ea officia irure exercitation.",
    },
]

export function Header() {
    const mobileMenuVariant = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
            }
        }
    };


    const [openMovileNav, setOpenMovileNav] = React.useState<boolean>(false)

    return (
        <header className=" w-full">
            <nav className=" flex flex-row justify-between items-center py-2 px-8 z-40">
                <NavigationMenu className="max-sm:hidden">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink >
                                    logo
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Overview
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Trade</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <ListItem href="perp" title="Perpetual" icon={<CandlestickChart />}>
                                        Trade the hottest perp markets with up to 10x leverage
                                    </ListItem>
                                    <ListItem href="spot" title="Spot" icon={<CandlestickChart />}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos id sapiente voluptates repellat praesentium dolores itaque
                                    </ListItem>
                                    <ListItem href="Swap" title="Swap" icon={<CandlestickChart />} >
                                        Lorem in magna amet non aliqua ad irure nostrud.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Earn</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            icon={<CandlestickChart />}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Stats</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            icon={<CandlestickChart />}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Link href="/" passHref>
                    <span className="hidden max-sm:block">
                        logo
                    </span>
                </Link>

                <NavigationMenu>
                    <NavigationMenuList>

                        <NavigationMenuItem className="sm:hidden">
                            <Button
                                onClick={() => setOpenMovileNav(!openMovileNav)}
                                type="button"
                                variant="ghost"
                                size="icon"
                            >
                                <Menu />
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                            >
                                <Settings />
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button
                                type="button"
                                variant="default"
                            >
                                Connect Wallet
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            <div className="relative">
                <AnimatePresence>
                    {openMovileNav &&
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "50vh", opacity: 1 }}
                            exit="exit"
                            transition={{ duration: .4 }}
                            variants={mobileMenuVariant} className="absolute top-0 z-30 right-0 w-full h-[50vh] bg-primary-foreground rounded-b-lg">
                            <div className="flex flex-col justify-center items-center w-full h-full">
                                <div className="grid grid-cols-3 grid-rows-3 min-h-full w-full">
                                    <div className="flex flex-col items-center justify-center box-border rounded-lg hover:bg-accent hover:text-accent-foreground w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center rounded-lg hover:bg-accent hover:text-accent-foreground box-border w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>    <div className="flex flex-col items-center justify-center rounded-lg hover:bg-accent hover:text-accent-foreground box-border w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>    <div className="flex flex-col items-center rounded-lg hover:bg-accent hover:text-accent-foreground justify-center box-border w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>    <div className="flex flex-col items-center rounded-lg hover:bg-accent hover:text-accent-foreground justify-center box-border w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>    <div className="flex flex-col items-center rounded-lg hover:bg-accent hover:text-accent-foreground justify-center box-border w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>    <div className="flex flex-col items-center rounded-lg hover:bg-accent hover:text-accent-foreground justify-center box-border w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>    <div className="flex flex-col items-center rounded-lg hover:bg-accent hover:text-accent-foreground justify-center box-border w-full h-full hover:cursor-pointer hover:text-text-emphasis py-3 text-text-emphasis">
                                        <CandlestickChart />
                                        <span className="font-[300] text-[13px] leading-[16px]"> Trade</span>
                                    </div>
                                </div>
                            </div>
                        </motion.nav>
                    }
                </AnimatePresence>
            </div>

        </header >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    ListItemProps
>(({ className, title, children, icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        " select-none space-y-1 rounded-md p-3 flex flex-row justify-center gap-3 items-center leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {icon && React.cloneElement(icon, { size: '70px' })}

                    <div >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </a>
            </NavigationMenuLink>
        </li >
    );
});

ListItem.displayName = "ListItem"
