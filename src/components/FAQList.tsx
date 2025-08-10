import { useEffect, useState } from "react";
import { FAQType, FAQs } from "../constants/Faqs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FAQItem {
  faq: FAQType;
  expandAll: boolean;
}

const FAQItem = ({ faq, expandAll }: FAQItem) => {
  const [isActive, setIsActive] = useState(false);
  const [prevExpandAll, setPrevExpandAll] = useState(expandAll);

  if (prevExpandAll !== expandAll) {
    if (!!expandAll) {
      setIsActive(true);
    } else if (!expandAll) {
      setIsActive(false);
    }
    setPrevExpandAll(expandAll);
  }

  const toggleExpand = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="faq-item">
      <div className="faq-ques" onClick={toggleExpand}>
        <div className="faq-ques-header">
          <div className="faq-icon">&#10022;</div>
          <div><h4 className="faq-title">{faq.question}</h4></div>
        </div>
        <div className="faq-arrow">{isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      <div className={`faq-ans ${isActive ? "faq-open" : "faq-close"}`}>
        {faq.answer}
        {faq.link ? (
          <a target="_blank" href={faq.link}>
            here.
          </a>
        ) : (
          ""
        )}
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
          <div>
            <p>{expand ? "Collapse All" : "Expand All"}</p>
          </div>
          <div className="faq-expandAll-icon">{expand ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        </div>
      </div>
      {FAQs.map((data) => (
        <FAQItem faq={data} expandAll={expand} key={data.question} />
      ))}
    </div>
  );
};

export default FAQList;
