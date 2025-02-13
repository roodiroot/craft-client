import Link from "next/link";
import { Home, LineChart, PanelLeft, Users } from "lucide-react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavigateMobil = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Icons.logoSimbol className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">DokaCarton</span>
          </Link>
          <Link
            href="/production"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Выработка
          </Link>
          <Link
            href="/users"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Users className="h-5 w-5" />
            Пользователи
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <LineChart className="h-5 w-5" />
            Настройки
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavigateMobil;
