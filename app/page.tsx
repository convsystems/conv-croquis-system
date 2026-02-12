"use client";

import React from "react";
import { AppShell } from "@/components/layout/app-shell";
import {
  ContentArea,
  ContentHeader,
  ContentCard,
} from "@/components/layout/content-area";
import { Button } from "@/components/ui/button";
import {
  Plus,
  FileText,
  CheckCircle,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <AppShell title="CroquisPro">
      <ContentArea>
        {/* Hero Section - Foco em Conversão sem Login */}
        <ContentHeader
          title="Transforme dados de terreno em croquis profissionais"
          description="Gere esquemas técnicos instantâneos com IA para seus projetos. Sem burocracia, pague apenas pelo que usar."
          actions={
            <Link href="/novo">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700"
              >
                <Plus className="w-5 h-5" />
                Gerar Croqui Agora
              </Button>
            </Link>
          }
        />

        {/* Parceiros e Credibilidade */}
        <div className="py-4">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Empresas que confiam em nossa tecnologia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Simulação de Logos de Parceiros */}
            <span className="font-bold text-xl italic">
              TERRA<span className="text-emerald-600">PLAN</span>
            </span>
            <span className="font-bold text-xl tracking-tighter">
              URBAN<span className="text-teal-600">LAB</span>
            </span>
            <span className="font-bold text-xl">
              TOPOG<span className="text-emerald-500">FAST</span>
            </span>
            <span className="font-bold text-xl font-serif">
              Módulo<span className="text-blue-600">X</span>
            </span>
          </div>
        </div>

        {/* Exemplos de Croquis Gerados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ExampleCroquiCard
            title="Loteamento Residencial"
            desc="Esquema de implantação 12x30m com topografia plana."
            tag="Mais Gerado"
          />
          <ExampleCroquiCard
            title="Terreno em Aclive"
            desc="Detalhamento de curvas de nível e orientação solar."
            tag="Premium"
          />
          <ExampleCroquiCard
            title="Zoneamento Urbano"
            desc="Identificação de recuos e área construída permitida."
            tag="Técnico"
          />
        </div>

        {/* Como funciona (Substituindo área de formulário) */}
        <ContentCard>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-6 text-center">
            <Step
              icon={FileText}
              title="1. Dados"
              desc="Insira as medidas e topografia do lote."
            />
            <Step
              icon={Zap}
              title="2. IA"
              desc="Nossa inteligência gera o esquema técnico."
            />
            <Step
              icon={ShieldCheck}
              title="3. Pagamento"
              desc="Pague via PIX ou Cartão com segurança."
            />
            <Step
              icon={Star}
              title="4. Receba"
              desc="O croqui final chega direto no seu e-mail."
            />
          </div>
        </ContentCard>

        {/* Call to Action Final */}
        <div className="flex flex-col items-center justify-center p-12 bg-secondary/30 rounded-2xl border border-dashed border-border text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Pronto para começar seu projeto?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Você não precisa de assinatura. Gere seu primeiro croqui técnico de
            terreno agora mesmo e receba em alta resolução.
          </p>
          <Link href="/novo">
            <Button size="lg" className="px-10 py-6 text-lg shadow-lg">
              Criar meu Croqui
            </Button>
          </Link>
        </div>
      </ContentArea>
    </AppShell>
  );
}

function ExampleCroquiCard({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-md transition-all">
      <div className="aspect-video bg-muted/50 flex items-center justify-center border-b">
        <ImageIcon className="w-10 h-10 opacity-20 group-hover:scale-110 transition-transform" />
      </div>
      <div className="p-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          {tag}
        </span>
        <h3 className="font-medium mt-2">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}

function Step({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
        <Icon className="w-6 h-6 text-emerald-700" />
      </div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed px-4">
        {desc}
      </p>
    </div>
  );
}

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
