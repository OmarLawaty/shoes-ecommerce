import { useState } from 'react';

export const useLimitText = (originalText: string, maxChars: number = 300) => {
  const [isLimited, setIsLimited] = useState(true);

  const limitedText = `${originalText.slice(0, maxChars)} ...`;

  return {
    isLimited,
    text: isLimited ? limitedText : originalText,
    toggle: () => setIsLimited((prev) => !prev),
  };
};
