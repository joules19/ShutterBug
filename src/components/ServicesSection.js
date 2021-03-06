import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { About, Description, Image } from "../Styles";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elits.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
        </Cards>
      </Description>

      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 80%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 18rem;
  .icon {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 0.8rem;
      border-radius: 2px;
    }
  }
  /* @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

export default ServicesSection;
