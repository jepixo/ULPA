import React from 'react';

interface FormattedTextProps {
    text: string;
    className?: string;
}

/**
 * A simple component to render text with basic markdown-like formatting:
 * **bold** and [label](url)
 */
const FormattedText: React.FC<FormattedTextProps> = ({ text, className }) => {
    if (!text) return null;

    // Split text by bold markers (**) and markdown links [label](url)
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/);

    return (
        <span className={className}>
            {parts.map((part, i) => {
                // Handle **bold**
                if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                        <strong key={i} className="font-bold text-gray-900">
                            {part.slice(2, -2)}
                        </strong>
                    );
                }

                // Handle [label](url)
                if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                    const labelMatch = part.match(/\[(.*?)\]/);
                    const urlMatch = part.match(/\((.*?)\)/);
                    const label = labelMatch ? labelMatch[1] : '';
                    const url = urlMatch ? urlMatch[1] : '';

                    return (
                        <a
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {label}
                        </a>
                    );
                }

                // Plain text
                return part;
            })}
        </span>
    );
};

export default FormattedText;
