// Brand + contact settings. Change these to rebrand the whole site.
export const BRAND = {
  name: "ARCTIC MOTION",
  short: "Arctic Motion",
  tagline: "Premium snowmobiles for those who ride further.",
};

export const WHATSAPP_NUMBER = "447919473710";
export const WHATSAPP_DISPLAY = "+44 7919 473710";

export function whatsappLink(productName?: string) {
  const text = productName
    ? `Hello ${BRAND.short}, I'm interested in the ${productName}. Could you share more details?`
    : `Hello ${BRAND.short}, I'd like to know more about your snowmobiles.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
