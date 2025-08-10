import React from "react";
import { Link } from "react-router-dom";
import { LegalPageData } from "../constants/LegalContent";

interface LegalPageRendererProps {
  data: LegalPageData;
  pageType: "privacy" | "terms";
}

const LegalPageRenderer: React.FC<LegalPageRendererProps> = ({ data, pageType }) => {
  const renderContent = (content: string | string[]) => {
    const renderTextWithLinks = (text: string) => {
      // Convert email addresses to clickable links
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      const parts = text.split(emailRegex);
      const emails = text.match(emailRegex) || [];

      if (emails.length === 0) return text;

      const result = [];
      for (let i = 0; i < parts.length; i++) {
        if (parts[i]) result.push(parts[i]);
        if (emails[i]) {
          result.push(
            <a key={i} href={`mailto:${emails[i]}`} target="_blank" rel="noopener noreferrer">
              {emails[i]}
            </a>
          );
        }
      }
      return result;
    };

    if (Array.isArray(content)) {
      // Check if content contains a table (has | separator)
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
                      <span key={colIndex}>{renderTextWithLinks(col)}</span>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        }
      }

      // Check if content looks like a list (starts with bullet points or numbered items)
      if (content.some((item) => item.trim().startsWith("•") || item.trim().match(/^\d+\./))) {
        return (
          <ul>
            {content
              .map((item, index) => {
                const cleanItem = item.replace(/^[•\d\.\s]+/, "").trim();
                // Only render list items that have actual content
                if (cleanItem) {
                  return <li key={index}>{renderTextWithLinks(cleanItem)}</li>;
                }
                return null;
              })
              .filter(Boolean)}
          </ul>
        );
      }

      // Filter out empty items and render paragraphs
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
