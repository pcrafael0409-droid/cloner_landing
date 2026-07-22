import { createServerFn } from "@tanstack/react-start";

const MERCADO_PAGO_ACCESS_TOKEN = "APP_USR-8054876524951831-072219-f0257150a1248d693c4cd71679ee1a0b-3517862714";

export const createCheckoutSession = createServerFn("POST", async () => {
  const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      items: [
        {
          id: "clonex_lifetime",
          title: "Acesso Vitalício Espião",
          description: "Monitoramento completo do WhatsApp e Instagram",
          quantity: 1,
          currency_id: "BRL",
          unit_price: 19.90,
        },
      ],
      auto_return: "approved",
      payment_methods: {
        excluded_payment_types: [
          {
            id: "ticket" // Opcional: remover boleto se quiser apenas Pix/Cartão
          }
        ],
        installments: 12
      },
      statement_descriptor: "CLONEX APP",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Erro Mercado Pago:", errorText);
    throw new Error("Falha ao gerar link de pagamento.");
  }

  const data = await response.json();
  return { checkoutUrl: data.init_point };
});
