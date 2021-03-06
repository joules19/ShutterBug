import React from "react";
import styled from "styled-components";
import { About } from "../Styles";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
        <Toggle title="How do i start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              iusto dicta aut impedit sed facere tempora quam veniam sint ut
              laudantium similique unde nam, maxime ipsam exercitationem eaque
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              iusto dicta aut impedit sed facere tempora quam veniam sint ut
              laudantium similique unde nam, maxime ipsam exercitationem eaque
            </p>
          </div>
        </Toggle>

        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              iusto dicta aut impedit sed facere tempora quam veniam sint ut
              laudantium similique unde nam, maxime ipsam exercitationem eaque
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              iusto dicta aut impedit sed facere tempora quam veniam sint ut
              laudantium similique unde nam, maxime ipsam exercitationem eaque
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: flex;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
