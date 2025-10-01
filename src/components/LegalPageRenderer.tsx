import React from "react";
import { Link } from "react-router-dom";
import { LegalPageData } from "../constants/LegalContent";

interface LegalPageRendererProps {
  data: LegalPageData;
  pageType: "privacy" | "terms";
}

const parseMarkdownLink = (text: string) => {
  const parts: React.ReactNode[] = []; // Add type here

  const regex = /\[([^\]]+)\]\(([^\)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
};

const renderContent = (content: string | string[]) => {
  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

    // Split on spaces but keep them so styling/spacing is preserved
    return text.split(/(\s+)/).map((part, idx) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={`url-${idx}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {part}
          </a>
        );
      }
      if (emailRegex.test(part)) {
        return (
          <a
            key={`email-${idx}`}
            href={`mailto:${part}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  if (Array.isArray(content)) {
    // Table rendering
    if (content.some((item) => item.includes("|"))) {
      const tableRows = content.filter((item) => item.includes("|") && !item.startsWith("---"));
      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(1);

      if (headerRow) {
        const headers = headerRow.split("|").map((col) => col.trim());
        return (
          <div className="service-table">
            <div className="service-row">
              {headers.map((header, index) => (
                <span key={index}>{header}</span>
              ))}
            </div>
            {dataRows.map((row, index) => {
              const columns = row.split("|").map((col) => col.trim());
              return (
                <div key={index} className="service-row">
                  {columns.map((col, colIndex) => (
                    <span key={colIndex}>{parseMarkdownLink(col)}</span>
                  ))}
                </div>
              );
            })}
          </div>
        );
      }
    }

    // List rendering
    const hasBullets = content.some(
      (item) => item.trim().startsWith("•") || item.trim().match(/^\d+\./)
    );

    if (hasBullets) {
      return (
        <>
          {content.map((item, index) => {
            const trimmedItem = item.trim();

            // Check if THIS specific item has a bullet
            if (trimmedItem.startsWith("•") || trimmedItem.match(/^\d+\./)) {
              const cleanItem = trimmedItem.replace(/^[•\d\.\s]+/, "").trim();
              if (cleanItem) {
                return (
                  <ul key={index}>
                    <li>{renderTextWithLinks(cleanItem)}</li>
                  </ul>
                );
              }
              return null;
            }

            // If no bullet, render as paragraph
            if (trimmedItem) {
              return <p key={index}>{renderTextWithLinks(trimmedItem)}</p>;
            }

            return null;
          })}
        </>
      );
    }

    // Paragraph rendering
    return content
      .filter((item) => item.trim() !== "")
      .map((item, index) => <p key={index}>{renderTextWithLinks(item)}</p>);
  }

  return <p>{renderTextWithLinks(content)}</p>;
};

const renderSection = (section: any, index: number) => (
  <div key={index}>
    <h3>{section.title}</h3>
    {renderContent(section.content)}
    {section.subsections &&
      section.subsections.map((subsection: any, subIndex: number) => (
        <div key={subIndex}>
          {subsection.title && <strong>{subsection.title}</strong>}
          {renderContent(subsection.content)}
        </div>
      ))}
  </div>
);

const LegalPageRenderer: React.FC<LegalPageRendererProps> = ({ data, pageType }) => {
  return (
    <div className={`app legal-page`}>
      <div className={`content ${pageType === "privacy" ? "privacy-content" : "terms-content"}`}>
        <header>
          <h2>{data.title}</h2>
        </header>

        <div className="sections">
          <p>
            <strong>Effective Date:</strong> {data.effectiveDate}
            <br />
            <strong>Last Updated:</strong> {data.lastUpdated}
          </p>

          {pageType === "privacy" && (
            <>
              <p>
                Boraami ("Company," "we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                personal information when you use our mobile application ("App") and/or visit our
                website at https://boraami.app (the "Site").
              </p>

              <p>
                This Policy complies with global privacy regulations including the General Data
                Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other
                applicable laws.
              </p>
            </>
          )}

          {pageType === "terms" && (
            <>
              <p>
                Welcome to Boraami! These Terms and Conditions ("Terms") apply to your use of both
                our mobile application ("App") and our websites (https://boraami.app) (collectively,
                the "Services"), operated by Boraami ("Company," "we," "us," or "our").
              </p>

              <p>
                By accessing or using any part of the Services, you agree to be bound by these
                Terms. If you do not agree, please refrain from using our App or Website.
              </p>
            </>
          )}

          {data.sections.map((section, index) => renderSection(section, index))}
        </div>

        <footer>
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default LegalPageRenderer;
