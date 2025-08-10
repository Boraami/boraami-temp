import React from "react";
import LegalPageRenderer from "./LegalPageRenderer";
import { termsData } from "../constants/LegalContent";

const Terms: React.FC = () => {
  return <LegalPageRenderer data={termsData} pageType="terms" />;
};

export default Terms;
