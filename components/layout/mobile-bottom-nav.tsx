"use client";

import { cn } from "@/lib/utils";
import { Home, FileText, PenTool, FolderOpen, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { icon: Home, label: "Início", href: "/" },
  { icon: PenTool, label: "Novo", href: "/novo", isMain: true },
  { icon: FileText, label: "Croquis", href: "/croquis" },

  // { icon: FolderOpen, label: "Projetos", href: "/projetos" },
  // { icon: User, label: "Perfil", href: "/perfil" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border z-50 safe-area-pb">
      <div className="flex items-center justify-around px-2 py-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          if (item.isMain) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-5"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground mt-1">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors min-w-[60px]",
                isActive ? "text-accent" : "text-muted-foreground",
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "text-accent")} />
              <span
                className={cn(
                  "text-[10px] font-medium mt-1",
                  isActive ? "text-accent" : "text-muted-foreground",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
