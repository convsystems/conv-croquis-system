"use client";

import { Bell, Menu, PenTool, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

export function MobileHeader({
  title = "CroquisPro",
  onMenuClick,
}: MobileHeaderProps) {
  return (
    <header className="lg:hidden sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5" />
            <span className="sr-only">Menu</span>
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
              <PenTool className="w-3.5 h-3.5 text-accent-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              {title}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
          >
            <Search className="w-5 h-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground relative"
          >
            <Bell className="w-5 h-5" />
            <span className="sr-only">Notificações</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
          </Button>
        </div>
      </div>
    </header>
  );
}
