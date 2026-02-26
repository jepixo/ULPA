import React from 'react';

interface FormattedTextProps {
    text: string;
    className?: string;
    darkMode?: boolean;
}

/**
 * Renders text with basic markdown-like formatting:
 * - **bold**
 * - [label](url) links
 * - \n\n paragraph breaks
 * - Lines starting with "- " become bullet items
 */
const FormattedText: React.FC<FormattedTextProps> = ({ text, className, darkMode }) => {
    if (!text) return null;

    const paragraphs = text.split(/\n\n/);
    const baseText = darkMode ? 'text-gray-300' : 'text-gray-600';
    const boldText = darkMode ? 'text-white' : 'text-gray-900';

    return (
        <span className={`block space-y-3 ${className ?? ''}`}>
            {paragraphs.map((paragraph, pIdx) => {
                const lines = paragraph.split('\n');
                const isList = lines.every(l => l.trim().startsWith('- '));

                if (isList) {
                    return (
                        <ul key={pIdx} className="list-none space-y-1.5 pl-0">
                            {lines.map((line, lIdx) => (
                                <li key={lIdx} className={`flex items-start gap-2 ${baseText}`}>
                                    <span className="text-primary mt-0.5 shrink-0 font-bold">›</span>
                                    <span>
                                        <InlineFormat text={line.replace(/^- /, '')} boldClass={boldText} darkMode={darkMode} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    );
                }

                return (
                    <p key={pIdx} className={`leading-relaxed ${baseText}`}>
                        {lines.map((line, lIdx) => (
                            <React.Fragment key={lIdx}>
                                <InlineFormat text={line} boldClass={boldText} darkMode={darkMode} />
                                {lIdx < lines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                );
            })}
        </span>
    );
};

const InlineFormat: React.FC<{ text: string; boldClass: string; darkMode?: boolean }> = ({ text, boldClass, darkMode: _ }) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/);
    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                        <strong key={i} className={`font-bold ${boldClass}`}>
                            {part.slice(2, -2)}
                        </strong>
                    );
                }
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
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </>
    );
};

export default FormattedText;
