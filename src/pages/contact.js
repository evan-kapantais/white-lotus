import React from "react";

import Layout from "../components/Layout";
import HeadContent from "../components/HeadContent";

const ContactPage = () => {
  return (
    <Layout>
      <h2 className="section-heading">Contact</h2>
      <p>
        For inquiries and additional details about our properties or any other
        question, don&lsquo;t hesitate to reach us through email at <br />
        <a href="mailto:whitelotuspropertymanagement@gmail.com">
          whitelotuspropertymanagement@gmail.com
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <HeadContent title="Contact" />;
