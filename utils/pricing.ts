
/**
 * Extracts the first numerical value from a pricing string.
 * It handles currency symbols, commas, and various text formats.
 * @param pricingString The string containing price information.
 * @returns The extracted numerical price, or Infinity if no price is found.
 */
export const parsePrice = (pricingString: string): number => {
  if (!pricingString) {
    return Infinity;
  }

  // Remove commas and currency symbols
  const cleanedString = pricingString.replace(/[,€~]/g, '');
  
  // Find the first sequence of digits, optionally with a decimal point
  const match = cleanedString.match(/(\d[\d.]*)/);
  
  if (match) {
    return parseFloat(match[0]);
  }
  
  // Return a large number if no price could be parsed, to sort it last
  return Infinity;
};
