import React from "react";
import { cn } from "@/lib/utils";

// Extende os atributos nativos de uma DIV para permitir className, id, etc.
interface ContentAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// Extende os atributos nativos para o Header
interface ContentHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

// Extende para permitir 'title' dentro do card e atributos de DIV
interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

export function ContentArea({
  children,
  className,
  ...props
}: ContentAreaProps) {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      {children}
    </div>
  );
}

export function ContentHeader({
  title,
  description,
  actions,
  className,
  ...props
}: ContentHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
      {...props}
    >
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function ContentCard({
  children,
  className,
  title,
  ...props
}: ContentCardProps) {
  return (
    <div
      className={cn("rounded-lg border border-border bg-card p-6", className)}
      {...props}
    >
      {/* Renderiza o título interno se for passado via prop */}
      {title && (
        <div className="mb-4 border-b border-border pb-3">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
}
