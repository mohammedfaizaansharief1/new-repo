"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Logo from "@/app/accord/Logo.png";
import Image from "next/image";
import "@/app/globals.css";
import { DashboardIcon } from "@radix-ui/react-icons";
import dashboard from "@/app/accord/dashboard.png";
import inventory from "@/app/accord/Inventory.png";
import report from "@/app/accord/report.png";
import supply from "@/app/accord/supply.png";
import store from "@/app/accord/store.png";
import order from "@/app/accord/order.png";
import { CiHome } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosNotificationsOutline } from "react-icons/io";

import { BellRing, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import image from "@/app/inventory/On the way.png";
import image1 from "@/app/inventory/Quantity.png";
import Cost from "@/app/inventory/Cost.png";
import Profit from "@/app/inventory/Profit.png";
import Revenue from "@/app/inventory/Revenue.png";
import Sales from "@/app/inventory/Sales.png";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];
type CardProps = React.ComponentProps<typeof Card>;

function AccordPage({ className, ...props }: CardProps) {
  // const [selected, setSelected] = useState<Date>();

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, "PP")}.</p>;
  // }

  // const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="bg-[#f5f5f5] h-lvh grid grid-rows-[80px_1fr_1fr_1fr_1fr] grid-cols-[230px_minmax(300px,_790px)_1fr] ">
        <div className="h-[600px] w-[230px] text-red-100 rounded-r-lg p-[12px] bg-white row-span-5 ">
          <div className=" w-[200px]  h-[350px]">
            <Image
              src={Logo}
              width={170}
              // height={30}
              alt="Picture of the author"
              className="p-2"
            />
            <div className="pt-6 p-[14px] text-black flex flex-col gap-5 font-['Inter'] ">
              <div className="flex gap-3 items-center ">
                {/* <Image
              src={inventory}
              width={20}
              height={5}
              alt="Picture of the author"
            /> */}
                <CiHome className="text-[#1570EF]" size={19} />
                <h1 className="text-[#1570EF] text-[16px]">Dashboard</h1>
                {/* <DashboardIcon/> */}
              </div>

              <div className="flex gap-3 items-center">
                <Image
                  src={inventory}
                  width={20}
                  height={5}
                  alt="Picture of the author"
                />
                <h1>Inventory</h1>
              </div>

              <div className="flex gap-3 items-center">
                <Image
                  src={report}
                  width={20}
                  height={5}
                  alt="Picture of the author"
                />
                <h1>Reports</h1>
              </div>

              <div className="flex gap-3 items-center">
                <Image
                  src={supply}
                  width={20}
                  height={5}
                  alt="Picture of the author"
                />
                <h1>Supplier</h1>
              </div>

              <div className="flex gap-3 items-center">
                <Image
                  src={order}
                  width={20}
                  height={5}
                  alt="Picture of the author"
                />
                <h1>Orders</h1>
              </div>

              <div className="flex gap-3 items-center">
                <Image
                  src={store}
                  width={20}
                  height={5}
                  alt="Picture of the author"
                />
                <h1>Manage Store</h1>
              </div>
            </div>
          </div>

          <div className=" w-[200px]  h-[100px] mt-[120px]">
            <div className=" p-[14px] text-black flex flex-col gap-7 font-['Inter']">
              <div className="flex gap-3 items-center">
                <CiSettings className="" size={19} />
                <h1>Settings</h1>
              </div>

              <div className="flex gap-3 items-center">
                <CiLogout className=" rotate-180" size={19} />
                <h1>Log Out</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white   col-span-2 col-start-2 col-end-4 flex justify-between items-center px-5">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 w-[400px]"
            />
          </div>

          <div className="flex justify-between w-[86px] items-center ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <IoIosNotificationsOutline className="text-black absolute w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[390px] "
                align="end"
                forceMount
              >
                <Card className={cn("w-[380px]", className)} {...props}>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      You have 3 unread messages.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                      <BellRing />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Send notifications to device.
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div>
                      {notifications.map((notification, index) => (
                        <div
                          key={index}
                          className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {notification.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Check className="mr-2 h-4 w-4" /> Mark all as read
                    </Button>
                  </CardFooter>
                </Card>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">shadcn</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="bg-yellow-200  rounded-lg ml-5 mt-4">

            <div className="w-[690px] bg-white   h-[163px] p-3 rounded-md ">
              <p className="font-medium text-[20px]"> Sales Overview</p>

              <div className="flex gap-6 items-end justify-center pt-3 ">
                <div className="flex flex-col items-center w-[140px] mr-[-9px]  ">
                  <Image
                    src={Sales}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <div className="flex justify-center items-center gap-10">
                    <p className="pt-2 font-semibold text-gray-600">
                      &#8377; 832
                    </p>
                    <p className="text-sm font-medium pt-2 text-gray-500">
                      Sales
                    </p>
                  </div>
                </div>

                <div className="  border-gray-200 h-[80px]  border-l "></div>
                <div className="flex flex-col items-center w-[160px] mr-[-9px] ml-[-9px]">
                  <Image
                    src={Revenue}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <div className="flex justify-center items-center gap-5">
                    <p className="pt-2 font-semibold text-gray-600">
                      &#8377; 18,300
                    </p>
                    <p className="text-sm font-medium pt-2 text-gray-500">
                      Revenue
                    </p>
                  </div>
                </div>

                <div className="  border-gray-200 h-[80px]  border-l "></div>

                <div className="flex flex-col items-center w-[140px] mr-[-9px] ml-[-9px]">
                  <Image
                    src={Profit}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <div className="flex justify-center items-center gap-10">
                    <p className="pt-2 font-semibold text-gray-600">
                      &#8377; 868
                    </p>
                    <p className="text-sm font-medium pt-2 text-gray-500">
                      Profit
                    </p>
                  </div>
                </div>

                <div className="  border-gray-200 h-[80px]  border-l "></div>

                <div className="flex flex-col items-center w-[160px] mr-[-9px] ml-[-9px]">
                  <Image
                    src={Cost}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <div className="flex justify-center items-center gap-8">
                    <p className="pt-2 font-semibold text-gray-600">
                      &#8377; 17,432
                    </p>
                    <p className="text-sm font-medium pt-2 text-gray-500">
                      Cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>

        <div className="bg-blue-200  rounded-lg ml-4 mr-5 mt-4">
          inventory summary
        </div>

        <div className="bg-white  rounded-lg ml-5 mt-4">prchase overview</div>

        <div className="bg-white  rounded-lg ml-4 mr-5 mt-4">
          product summary
        </div>
        <div className="bg-white  rounded-lg ml-5 mt-4">Sales and purchase</div>

        <div className="bg-white  rounded-lg ml-4 mr-5 mt-4">order summary</div>

        <div className="bg-white rounded-lg ml-5 my-4">top selling stock</div>

        <div className="bg-white rounded-lg ml-4 mr-5 my-4">
          low quantity stock
        </div>
      </div>
    </>
  );
}

export default AccordPage;
