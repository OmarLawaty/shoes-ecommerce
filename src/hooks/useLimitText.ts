import { useState } from 'react';

export const useLimitText = (originalText: string, maxChars: number) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return {
    concatenatedButtonLabel: originalText.length < maxChars ? null : isExpanded ? 'See less' : '...See more',

    text: isExpanded ? originalText : originalText.slice(0, maxChars),

    toggle: () => {
      setIsExpanded(!isExpanded);
    },
  };
};
