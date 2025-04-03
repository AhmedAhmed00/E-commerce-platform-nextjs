import { APP_NAME } from "@/lib/constatnts";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mood-toogle";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={"/"}>
            <Image width={48} height={48} src={"/images/logo.svg"} alt="logo" />
          </Link>
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </div>
        <Menu/>
        <div className="hidden md:block space-x-2">
          <Button variant={"ghost"} asChild>
            <Link href={"/cart"}>
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href={"/sign-in"}>
              <UserIcon /> Sign in
            </Link>
          </Button>
 

          <ModeToggle />
        
        </div>
      </div>
    </header>
  );
}
