/**
 * Convert camel string to capitalize ( Example: register to Register )
 */

export const camelToTitle = (camelCase: string): string =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
