"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { ContentArea, ContentCard } from "@/components/layout/content-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sparkles,
  Loader2,
  Image as ImageIcon,
  CreditCard,
} from "lucide-react";

export default function NovoCroquiPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  // Pega o status de pagamento da URL
  const isPaid = searchParams.get("status") === "paid";

  const [formData, setFormData] = useState({
    titulo: searchParams.get("titulo") || "",
    dimensoes: searchParams.get("dimensoes") || "",
    topografia: searchParams.get("topografia") || "",
    norte: searchParams.get("norte") || "",
  });

  const handleGenerateAI = async () => {
    // 1. Validação simples
    if (!formData.titulo || !formData.dimensoes) {
      //  alert("Preencha os dados do lote primeiro.");
      return;
    }

    console.log("isPaid:", isPaid);

    // 2. REDIRECIONAMENTO IMEDIATO (IA FICA POR BAIXO DOS PANOS)
    if (!isPaid) {
      // Se não pagou, gera o link e vai embora da página agora
      const query = new URLSearchParams(formData).toString();
      router.push(`/checkout?${query}`);
      return; // O 'return' impede que qualquer código de erro da IA seja executado
    }

    // 3. SÓ CHEGA AQUI SE ESTIVER PAGO (isPaid === true)
    setIsGenerating(true);
    try {
      const response = await fetch("/api/croquis/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Falha na API");

      const data = await response.json();
      if (data.url) setGeneratedImage(data.url);
    } catch (error) {
      console.error(error);
      // alert("Ocorreu um problema ao gerar o desenho técnico.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AppShell title="Novo Croqui">
      <ContentArea>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ContentCard title="Dados do Lote">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Nome do Lote</Label>
                    <Input
                      value={formData.titulo}
                      onChange={(e) =>
                        setFormData({ ...formData, titulo: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Dimensões</Label>
                    <Input
                      value={formData.dimensoes}
                      onChange={(e) =>
                        setFormData({ ...formData, dimensoes: e.target.value })
                      }
                    />
                  </div>
                </div>

                <Button
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className={`w-full h-14 text-lg font-bold gap-3 ${
                    isPaid ? "bg-emerald-600" : "bg-blue-600"
                  }`}
                >
                  {isGenerating ? (
                    <Loader2 className="animate-spin" />
                  ) : isPaid ? (
                    <>
                      <Sparkles /> GERAR DESENHO AGORA
                    </>
                  ) : (
                    <>
                      <CreditCard /> PAGAR E GERAR CROQUI
                    </>
                  )}
                </Button>
              </div>
            </ContentCard>
          </div>

          <div className="lg:col-span-1">
            <ContentCard title="Visualização Técnica">
              <div className="aspect-[3/4] bg-white rounded-lg flex items-center justify-center border shadow-inner overflow-hidden">
                {generatedImage ? (
                  <img
                    src={generatedImage}
                    alt="Croqui"
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <div className="text-center opacity-20">
                    <ImageIcon className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-xs uppercase font-bold tracking-widest">
                      Aguardando Liberação
                    </p>
                  </div>
                )}
              </div>
            </ContentCard>
          </div>
        </div>
      </ContentArea>
    </AppShell>
  );
}
