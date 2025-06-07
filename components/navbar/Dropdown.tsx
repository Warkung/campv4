"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { AlignLeft, MoveLeft, UserRound } from "lucide-react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { toast } from "sonner";
import { links } from "@/utils/links";

function Dropdown() {
  const handleLogout = () => {
    toast("Bye Bye👋👋👋 ");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignLeft />
            <UserRound />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <SignedIn>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {links.map((link, index) => (
              <DropdownMenuItem key={index}>
                <Link
                  href={link.href}
                  className="w-full text-start hover:cursor-pointer capitalize "
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutButton>
                <button
                  onClick={handleLogout}
                  className="w-full text-start hover:cursor-pointer hover:text-red-500  capitalize "
                >
                  Logout
                </button>
              </SignOutButton>
            </DropdownMenuItem>
          </SignedIn>
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-start hover:cursor-pointer ">
                  Login
                </button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="w-full text-start hover:cursor-pointer  ">
                  Register
                </button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
export default Dropdown;
