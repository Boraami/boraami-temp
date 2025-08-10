import React from "react";
import LegalPageRenderer from "./LegalPageRenderer";
import { privacyPolicyData } from "../constants/LegalContent";

const PrivacyPolicy: React.FC = () => {
  return <LegalPageRenderer data={privacyPolicyData} pageType="privacy" />;
};

export default PrivacyPolicy;
