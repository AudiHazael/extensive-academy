import React from "react";
import "../styles/styles.scss";

const AccordionFlush = () => {
  return (
    <section className="faq pt-4 pb-4">
      <div className="container">
        <h4 className="text-left mb-4">Frequently Asked Questions</h4>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {/* Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                Is Extensive Academy close to Lagos?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes! Extensive Academy is located in Simawa, Ogun State — just a
                short drive from Lagos. It’s ideal for families who live or work
                in Lagos but prefer a quieter and more affordable environment
                for their children’s education.
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo">
                What areas does Extensive Academy serve?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                We serve students and families from Simawa, Sagamu, Ogijo,
                Redemption Camp area, Mowe, and even those commuting from Lagos.
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree">
                What makes Extensive Academy different from other private
                schools in Ogun State?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Extensive Academy combines high academic standards, strong moral
                values, and community-driven education. We also maintain smaller
                class sizes for better individual attention.
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour">
                Does the school offer admission to Lagos-based families?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes! We welcome families based in Lagos who are looking for
                quality education outside the city. Our school is conveniently
                located and easy to access.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionFlush;
