import { useState } from "react";
import { FAQCategory, FAQItem, FAQs } from "../constants/Faqs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FAQCategoryProps {
  category: FAQCategory;
  expandAll: boolean;
}

const FAQCategorySection = ({ category, expandAll }: FAQCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevExpandAll, setPrevExpandAll] = useState(expandAll);

  if (prevExpandAll !== expandAll) {
    setIsOpen(expandAll);
    setPrevExpandAll(expandAll);
  }

  return (
    <div className="faq-item">
      <div className="faq-ques" onClick={() => setIsOpen(!isOpen)}>
        <div className="faq-ques-header">
          <div className="faq-icon">&#10022;</div>
          <h3 className="faq-category-title">{category.category}</h3>
        </div>
        <div className="faq-arrow">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      <div className={isOpen ? "faq-open" : "faq-close"}>
        {category.faqs.map((faq: FAQItem) => (
          <div className="faq-inner-item" key={faq.question}>
            <h4 className="faq-title">{faq.question}</h4>
            <p className="faq-ans">
              {faq.answer}
              {faq.link && (
                <a target="_blank" href={faq.link} rel="noreferrer">
                  {" "}here.
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQList = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="faq-list">
      <div className="faq-head">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-expandAll" onClick={() => setExpand(!expand)}>
          <p>{expand ? "Collapse All" : "Expand All"}</p>
          <div className="faq-expandAll-icon">
            {expand ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
      </div>

      {FAQs.map((category) => (
        <FAQCategorySection
          category={category}
          expandAll={expand}
          key={category.category}
        />
      ))}
    </div>
  );
};

export default FAQList;