import React from 'react';

/**
 * Parses a string and replaces occurrences of "TEDx UoK" and "TEDx"
 * with React nodes containing correctly formatted superscript "x".
 */
export function formatTedxText(text: string | null | undefined): React.ReactNode {
  if (!text) return text;

  // Split the text to isolate TEDx UoK and TEDx variations.
  // We use word boundaries where possible to avoid matching inside other words,
  // although "TEDx" is distinct enough.
  const parts = text.split(/(TEDx UoK|TEDxUoK|TEDx UOK|TEDxUOK|TEDx)\b/g);

  return (
    <>
      {parts.map((part, index) => {
        if (["TEDx UoK", "TEDxUoK", "TEDx UOK", "TEDxUOK"].includes(part)) {
          return <span key={index}>TED<sup className="uppercase" style={{ fontSize: '0.7em', top: '-0.3em', position: 'relative' }}>x</sup> UoK</span>;
        }
        if (part === "TEDx") {
          return <span key={index}>TED<sup className="uppercase" style={{ fontSize: '0.7em', top: '-0.3em', position: 'relative' }}>x</sup></span>;
        }
        return part;
      })}
    </>
  );
}
