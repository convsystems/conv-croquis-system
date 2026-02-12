"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import {
  ContentArea,
  ContentHeader,
  ContentCard,
} from "@/components/layout/content-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Save,
  Sparkles,
  Loader2,
  Image as ImageIcon,
  Ruler,
  Map,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function NovoCroquiPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    titulo: "",
    projeto: "",
    topografia: "",
    dimensoes: "", // Ex: 10x25m
    norte: "", // Orientação solar
    vizinhanca: "", // O que tem nos lados
    observacoes: "",
  });

  const handleGenerateAI = async () => {
    if (!formData.titulo || !formData.dimensoes) {
      alert("Por favor, preencha o título e as dimensões do terreno.");
      return;
    }

    setIsGenerating(true);
    try {
      const fullPrompt = `Esquema técnico de implantação de terreno (lote). 
      Título: ${formData.titulo}. 
      Dimensões: ${formData.dimensoes}. 
      Topografia: ${formData.topografia}.
      Orientação Norte: ${formData.norte}.
      Contexto: ${formData.vizinhanca}.
      Estilo: Desenho técnico arquitetônico, linhas pretas sobre fundo branco, 
      estilo croqui de massa ou zoneamento de terreno, limpo e esquemático.`;

      /* const response = await fetch("/api/croquis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, prompt: fullPrompt }),
      }); */

      // const data = await response.json();

      // if (data.url) setGeneratedImage(data.url);
    } catch (error) {
      console.log(error);
      alert("Erro na conexão com a IA.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AppShell title="Novo Croqui de Terreno">
      <ContentArea>
        <ContentHeader
          title="Croqui de Terreno"
          description="Gere um esquema básico de implantação e dimensões do lote."
          actions={
            <div className="flex items-center gap-2">
              <Link href="/croquis">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </Button>
              </Link>
              <Button className="gap-2">
                <Save className="w-4 h-4" /> Salvar
              </Button>
            </div>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ContentCard>
              <div className="space-y-8">
                {/* Seção 1: Identificação */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <h3 className="font-medium text-sm uppercase tracking-wider">
                      Identificação
                    </h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="titulo">Nome do Lote/Terreno</Label>
                      <Input
                        id="titulo"
                        placeholder="Ex: Lote 15 - Quadra B"
                        onChange={(e) =>
                          setFormData({ ...formData, titulo: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projeto">Projeto / Cliente</Label>
                      <Input
                        id="projeto"
                        placeholder="Ex: Condomínio Solar"
                        onChange={(e) =>
                          setFormData({ ...formData, projeto: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </section>

                {/* Seção 2: Dados do Terreno */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <Ruler className="w-4 h-4 text-primary" />
                    <h3 className="font-medium text-sm uppercase tracking-wider">
                      Medidas e Topografia
                    </h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Dimensões (LxC)</Label>
                      <Input
                        placeholder="Ex: 12x30m"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dimensoes: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Topografia</Label>
                      <Select
                        onValueChange={(v) =>
                          setFormData({ ...formData, topografia: v })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Plano">Plano</SelectItem>
                          <SelectItem value="Aclive (Sobe)">
                            Aclive (Sobe)
                          </SelectItem>
                          <SelectItem value="Declive (Desce)">
                            Declive (Desce)
                          </SelectItem>
                          <SelectItem value="Irregular">Irregular</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Posição do Norte</Label>
                      <Input
                        placeholder="Ex: Frente, Fundo, Lateral Esq."
                        onChange={(e) =>
                          setFormData({ ...formData, norte: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </section>

                {/* Seção 3: Contexto */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <Map className="w-4 h-4 text-primary" />
                    <h3 className="font-medium text-sm uppercase tracking-wider">
                      Contexto e Vizinhos
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Descrição da Vizinhança</Label>
                      <Input
                        placeholder="Ex: Lotes vazios nas laterais, rua asfaltada na frente"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            vizinhanca: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Observações de Zoneamento</Label>
                      <Textarea
                        placeholder="Ex: Recuo de 5m frontal obrigatório, área de preservação ao fundo..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            observacoes: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </section>

                <div className="pt-4">
                  <Button
                    onClick={handleGenerateAI}
                    disabled={isGenerating}
                    className="cursor-pointer w-full h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl gap-3 transition-all"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Mapeando
                        Terreno...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 cursor-pointer" /> GERAR
                        ESQUEMA DO TERRENO
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </ContentCard>
          </div>

          {/* Coluna de Visualização */}
          <div className="space-y-6">
            <ContentCard title="Esquema do Lote">
              <div className="aspect-[3/4] w-full border-2 border-dashed rounded-lg bg-muted/30 flex items-center justify-center overflow-hidden relative">
                {generatedImage ? (
                  <img
                    src={generatedImage}
                    alt="Croqui"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center p-6 opacity-30">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">
                      O desenho técnico do lote aparecerá aqui.
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
