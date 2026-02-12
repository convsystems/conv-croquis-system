"use client";

import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/layout/content-area";
import { CreditCard } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const titulo = searchParams.get("titulo");

  const handlePayment = () => {
    alert("Pagamento processado com sucesso!");
    router.push(`/novo-croqui?status=paid&titulo=${titulo}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/20 p-4">
      <ContentCard className="max-w-md w-full">
        <div className="text-center space-y-4">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold">Finalize seu Pedido</h2>

          <p className="text-muted-foreground text-sm">
            Para gerar o croqui técnico de <strong>{titulo}</strong>, confirme o
            pagamento abaixo.
          </p>

          <div className="bg-muted p-4 rounded-lg text-left space-y-2">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>R$ 29,90</span>
            </div>
          </div>

          <Button onClick={handlePayment} className="w-full h-12 text-lg">
            Pagar Agora
          </Button>
        </div>
      </ContentCard>
    </div>
  );
}
