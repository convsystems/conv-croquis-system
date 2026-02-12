## Sistema de Geração de Croquis por IA (Sem Login)

**Versão:** 1.0
**Tipo:** Plataforma Web

---

# 1. VISÃO GERAL

## 1.1 Objetivo

Desenvolver uma plataforma web que permita ao usuário:

- Preencher um formulário com informações para criação de um croqui arquitetônico.
- Realizar pagamento para gerar o croqui via Inteligência Artificial.
- Visualizar e baixar o croqui gerado.
- Acessar um mostruário de empresas parceiras.
- Solicitar contato com arquitetos ou empresas de empreitada.
- Solicitar múltiplos croquis.

O sistema **não possui login ou cadastro**. Toda operação é realizada por sessão temporária e e-mail de referência.

---

# 2. ESCOPO DO SISTEMA

## 2.1 Funcionalidades Principais

1. Formulário de criação de croqui

2. Pagamento online obrigatório antes da geração

3. Geração automática do croqui

4. Entrega do croqui:
   - Visualização na tela
   - Download
   - Envio por e-mail

5. Mostruário de serviços parceiros

6. Solicitação de contato com parceiros

7. Solicitação de múltiplos croquis

8. Encaminhamento para arquitetos/empreiteiras parceiras

---

# 3. FLUXO DO USUÁRIO

## 3.1 Geração de Croqui

1. Usuário acessa a plataforma.

2. Preenche formulário com:
   - Tipo de imóvel
   - Dimensões do terreno
   - Quantidade de cômodos
   - Estilo arquitetônico
   - Orçamento estimado
   - Observações adicionais
   - E-mail para entrega

3. O sistema informa o valor do croqui.

4. Usuário realiza pagamento.

5. Após confirmação do pagamento:
   - O croqui é gerado.

6. Usuário recebe:
   - Visualização imediata
   - Link para download
   - Envio por e-mail

---

# 4. REGRAS DE NEGÓCIO

## 4.1 Pagamento Obrigatório

- O croqui só é gerado após confirmação do pagamento.
- Se o pagamento falhar, o croqui não é processado.
- Pagamentos aceitos:
  - Cartão de crédito
  - PIX
  - Boleto (opcional)

---

## 4.2 Precificação

Modelo sugerido:

- Croqui básico: valor fixo
- Croqui com detalhamento adicional: valor adicional
- Croqui adicional (mesma sessão): desconto progressivo

Exemplo:

| Tipo             | Valor        |
| ---------------- | ------------ |
| Croqui padrão    | R$ a definir |
| Croqui adicional | R$ a definir |
| Versão premium   | R$ a definir |

---

## 4.3 Múltiplos Croquis

- O usuário pode gerar mais de um croqui na mesma sessão.
- Cada geração requer novo pagamento.
- Caso solicite projeto mais complexo:
  - O sistema oferece contato com arquiteto parceiro.

---

# 5. MOSTRUÁRIO DE SERVIÇOS PARCEIROS

## 5.1 Funcionalidade

Área dedicada para empresas parceiras contendo:

- Nome da empresa
- Logo
- Especialidade
- Cidade/Região
- Portfólio (imagens)
- Botão "Solicitar Contato"

---

## 5.2 Solicitação de Contato

Usuário informa:

- Nome
- E-mail
- Telefone
- Tipo de projeto
- Mensagem

O sistema encaminha a solicitação para a empresa parceira.

---

# 6. ARQUITETOS E EMPREITEIRAS PARCEIRAS

## 6.1 Encaminhamento Inteligente

Se o usuário:

- Solicitar projeto executivo
- Solicitar mais de 2 croquis
- Informar orçamento elevado
- Solicitar acompanhamento profissional

O sistema:

- Sugere profissionais parceiros
- Permite envio direto do briefing
- Pode aplicar taxa de intermediação

---

# 7. SEGURANÇA E CONFIANÇA

Mesmo sem login, o sistema deve garantir:

- Ambiente seguro para pagamento
- Proteção das informações fornecidas
- Uso responsável dos dados pessoais

---

# 8. LGPD / PROTEÇÃO DE DADOS

Como há coleta de e-mail e telefone:

- Termo de consentimento obrigatório
- Política de privacidade publicada
- Possibilidade de solicitar exclusão de dados
- Armazenamento seguro das informações

---

# 9. EXPERIÊNCIA DO USUÁRIO

## 9.1 Página Inicial

- Explicação clara do serviço
- Exemplos de croquis
- Depoimentos
- Botão "Criar meu croqui"

---

## 9.2 Página de Pagamento

- Resumo do pedido
- Valor total
- Informações de segurança
- Confirmação clara de pagamento

---

## 9.3 Página de Resultado

- Visualização do croqui
- Opção de download
- Botão "Gerar outro"
- Sugestão de empresas parceiras
