export type BranchId = "kozyatagi" | "erenkoy";

export type BranchPhoneContact = {
  id: BranchId;
  displayName: string;
  landline: { display: string; telHref: string };
  mobile: { display: string; telHref: string; whatsappE164: string };
};

/** Kozyatağı ve Erenköy şube sabit / GSM numaraları (görünen metin + tel:/wa.me) */
export const BRANCH_PHONE_CONTACTS: BranchPhoneContact[] = [
  {
    id: "kozyatagi",
    displayName: "Kozyatağı",
    landline: { display: "0216 999 50 57", telHref: "tel:+902169995057" },
    mobile: {
      display: "0531 345 58 00",
      telHref: "tel:+905313455800",
      whatsappE164: "905313455800",
    },
  },
  {
    id: "erenkoy",
    displayName: "Erenköy",
    landline: { display: "0216 759 54 34", telHref: "tel:+902167595434" },
    mobile: {
      display: "0533 558 54 34",
      telHref: "tel:+905335585434",
      whatsappE164: "905335585434",
    },
  },
];

const WHATSAPP_ORDER_PREFILL =
  "Mios Pizza'ya Hoş geldiniz. Sipariş vermek için lütfen sohbeti başlatınız.";

export const whatsappHrefForE164 = (e164Digits: string) =>
  `https://wa.me/${e164Digits}?text=${encodeURIComponent(WHATSAPP_ORDER_PREFILL)}`;

export const whatsappHrefForBranch = (id: BranchId) => {
  const branch = BRANCH_PHONE_CONTACTS.find((b) => b.id === id);
  if (!branch) {
    throw new Error(`Unknown branch: ${id}`);
  }
  return whatsappHrefForE164(branch.mobile.whatsappE164);
};

export const branchPhoneById = (id: BranchId): BranchPhoneContact =>
  BRANCH_PHONE_CONTACTS.find((b) => b.id === id) ?? BRANCH_PHONE_CONTACTS[0];
