"use client";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, CircleUserRound } from "lucide-react";
import Link from "next/link";

// for icons color can be changed using "color" prop or with Tailwind using stroke-[color]-[weight]
export default function Navbar() {
    return <nav className="px-40 py-2 border-t border-b flex justify-between items-center">
        <ul className="flex w-[150px] justify-between">
            <li>New</li>
            <li>Men's</li>
            <li>Women's</li>
        </ul>
        <div className="w-[500px] flex justify-evenly items-center">
            <div className="py-1">
                <Input type="text" placeholder="Search..." className="md:w-[100px] lg:w-[250px]"/>
            </div>
            <Link className="stroke-blue-300 hover:stroke-blue-100" href="/checkout">
                <ShoppingCart className="stroke-inherit" />
            </Link>
            <Link className="stroke-yellow-300 hover:stroke-yellow-100" href="/favorites">
                <Star className="stroke-inherit" />
            </Link>
            <div className="flex items-center text-zinc-500 stroke-green-300 hover:text-zinc-300 hover:stroke-green-100">
                <CircleUserRound className="mr-1 stroke-inherit"/> 
                <p className="pb-1">Login / Sign Up</p>
            </div>
        </div>
    </nav>
}