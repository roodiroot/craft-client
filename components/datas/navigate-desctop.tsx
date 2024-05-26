"use client";

import Link from "next/link";
import { Home, Settings, Users } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavigateDesctop = () => {
  const path = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Icons.logoSimbol className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">DokaKarton</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/production"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-gray-100",
                  path === "/production" ? "bg-slate-200" : ""
                )}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Выработка</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Выработка</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/users"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-gray-100",
                  path === "/users" ? "bg-slate-200" : ""
                )}
              >
                <Users className="h-5 w-5" />
                <span className="sr-only">Пользователи</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Пользователи</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/settings"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-gray-100",
                  path === "/settings" ? "bg-slate-200" : ""
                )}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Настройки</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Настройки</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default NavigateDesctop;
