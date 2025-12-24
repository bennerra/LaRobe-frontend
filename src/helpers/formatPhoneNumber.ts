export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");

  if (cleaned.length <= 1) {
    return `+${cleaned}`;
  }
  if (cleaned.length <= 4) {
    return `+7 (${cleaned.slice(1)}`;
  }
  if (cleaned.length <= 7) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`;
  }
  if (cleaned.length <= 9) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}`;
  }
  return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
};
