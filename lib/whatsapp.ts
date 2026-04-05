/** 0216 999 50 57 — WhatsApp wa.me için ülke kodu + alan kodu (baştaki 0 olmadan) */
const WHATSAPP_ORDER_PHONE_E164 = "902169995057";

const WHATSAPP_ORDER_PREFILL =
  "Mios Pizza'ya Hoş geldiniz. Sipariş vermek için lütfen sohbeti başlatınız.";

export const whatsappOrderHref = `https://wa.me/${WHATSAPP_ORDER_PHONE_E164}?text=${encodeURIComponent(WHATSAPP_ORDER_PREFILL)}`;
