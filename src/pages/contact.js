import React from "react";

import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <h2 className="section-heading">Contact</h2>
        <p>
          For inquiries and additional details about our properties or any other
          question, don&lsquo;t hesitate to reach us through email at <br />
          <a href="mailto:whitelotuspropertymanagement@gmail.com">
            whitelotuspropertymanagement@gmail.com
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;
