import React from "react";
import { Link } from "react-router-dom";
import { childSafetyPolicyData } from "../constants/LegalContent";

const SafetyPolicyPage: React.FC = () => (
  <div className="app legal-page">
    <div className="terms-content">
      <header>
        <h2>{childSafetyPolicyData.title}</h2>
        <p className="legal-meta">
          <strong>Last Updated:</strong> {childSafetyPolicyData.lastUpdated}
        </p>
      </header>
      <div className="sections">
        {childSafetyPolicyData.sections.map((section, idx) => (
          <section key={idx} className="legal-section">
            <h3>{section.title}</h3>
            {Array.isArray(section.content) ? (
              section.content.map((c, i) =>
                typeof c === "string" && c.includes("contact@boraami.app") ? (
                  <p key={i}>
                    <a href="mailto:contact@boraami.app">contact@boraami.app</a>
                  </p>
                ) : (
                  <p key={i}>{c}</p>
                )
              )
            ) : (
              <p>{section.content}</p>
            )}
          </section>
        ))}
      </div>
      <Link to="/" className="back-link">
        &larr; Back to Home
      </Link>
    </div>
  </div>
);

export default SafetyPolicyPage;
