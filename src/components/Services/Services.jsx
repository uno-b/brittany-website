import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <div className="services-wrapper">
          <Title title="Services" />
          <Fade bottom duration={1000} distance="30px">
            <div>
              <p>Do you hate wondering where your next deal is going to come from?</p>
              <p>
                Is your team wasting hours of valuable selling time on researching prospects,
                creating lists, personalizing messaging, and setting up systems instead of closing
                deals and growing your company?
              </p>
              <p>
                Do you wish you had a proven system and team that predictably generates high-value
                sales leads that turn into customers, without having to do the hiring and training
                yourself?
              </p>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="30px">
            <p>If the answer is Yes to any of these, please continue reading!</p>
          </Fade>
          <Fade bottom duration={1000} distance="30px">
            <div>
              <p>
                Prospecting isn't easy, but is the lifeblood of your business. Without it, you do
                not have leads. Without leads, you do not have customers or revenue growth.
              </p>
              <p>
                There is nothing worse than an empty pipeline and no idea where your next dollar is
                coming from, which is why DigiData was created.
              </p>
              <p>
                Speaking with hundreds of startups and agencies has made one thing very clear. They
                are incredible at what they do (creating products and services), but generally
                aren't great at consistently filling their pipeline with sales leads and prospects.
              </p>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="30px">
            <p>
              If this sounds like you, please let us help you with our proven Prospect system, so
              that you can outsource the 'hard work' to us and focus more on growing your company.
            </p>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Services;
