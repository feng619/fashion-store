"use client";
import React from "react";
import Link from "next/link";
import {
  Globe,
  UserRound,
  Heart,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopBar() {
  const [width, setWidth] = React.useState(0);
  const breakpoint = 640; // sm
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="w-full flex flex-row items-center justify-between p-2 sm:p-5 pl-6 pr-6 sm:pl-12 sm:pr-12">
      {width < breakpoint ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              選擇分類 <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/" className="block w-full">
                  女士
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="block w-full">
                  男士
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="block w-full">
                  兒童
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div>
          <Button asChild variant="ghost">
            <Link href="/">女士</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/">男士</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/">兒童</Link>
          </Button>
        </div>
      )}

      <div>
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-wider">
            法菲爾服飾
          </h1>
        </Link>
      </div>

      <div>
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <Globe />
          </Link>
        </Button>

        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <UserRound />
          </Link>
        </Button>

        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <Heart />
          </Link>
        </Button>

        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <ShoppingBag />
          </Link>
        </Button>
      </div>
    </div>
  );
}
