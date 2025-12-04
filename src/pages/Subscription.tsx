import React from 'react';
import styled from 'styled-components';
import { usePrice } from '../hooks/usePrice';
import { CONTACT_INFO, COMPANY_INFO } from '../config/constants';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: var(--minimal-gray-900);
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--minimal-gray-600);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid var(--minimal-gray-200);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const PricePeriod = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--minimal-gray-600);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const Feature = styled.li`
  padding: 0.75rem 0;
  color: var(--minimal-gray-700);
  border-bottom: 1px solid var(--minimal-gray-100);
  
  &:before {
    content: '✓';
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 0.75rem;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: var(--minimal-gray-900);
  text-align: center;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBlock = styled.div`
  background: var(--minimal-gray-50);
  padding: 2rem;
  border-radius: 8px;
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const InfoText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--minimal-gray-700);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.strong`
  color: var(--primary-color);
  font-weight: 600;
`;

const ContactBox = styled.div`
  background: white;
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const ContactInfo = styled.div`
  line-height: 2;
  color: var(--minimal-gray-700);
  
  strong {
    color: var(--minimal-gray-900);
  }
`;

const Subscription: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Hero>
        <Title>Subscription Plans & Pricing</Title>
        <Subtitle>
          Choose the perfect plan for your Excel Data Visualization learning journey. 
          All plans include full access to our comprehensive training library with lifetime updates.
        </Subtitle>
      </Hero>

      <Grid>
        <Card>
          <CardTitle>Monthly Subscription</CardTitle>
          <Price>
            {formatPrice(29.99)}
            <PricePeriod>/month</PricePeriod>
          </Price>
          <FeatureList>
            <Feature>Full access to all 11 Excel courses</Feature>
            <Feature>New content added regularly</Feature>
            <Feature>HD video streaming</Feature>
            <Feature>Multi-language subtitles</Feature>
            <Feature>Mobile & desktop access</Feature>
            <Feature>Cancel anytime</Feature>
            <Feature>No long-term commitment</Feature>
          </FeatureList>
          <InfoText>
            Perfect for those who want flexibility while learning at their own pace. 
            Billed monthly. Cancel at least 24 hours before next billing date.
          </InfoText>
        </Card>

        <Card>
          <CardTitle>Annual Subscription</CardTitle>
          <Price>
            {formatPrice(69.99)}
            <PricePeriod>/year</PricePeriod>
          </Price>
          <FeatureList>
            <Feature>Everything in Monthly plan</Feature>
            <Feature>Save over 15% vs monthly</Feature>
            <Feature>Priority email support</Feature>
            <Feature>Exclusive community access</Feature>
            <Feature>Early access to new courses</Feature>
            <Feature>Downloadable resources</Feature>
            <Feature>Certificate of completion</Feature>
          </FeatureList>
          <InfoText>
            Ideal for committed learners seeking the best value. Billed annually on your 
            purchase anniversary date. Best savings for serious Excel professionals.
          </InfoText>
        </Card>

        <Card>
          <CardTitle>Lifetime Access</CardTitle>
          <Price>
            {formatPrice(129.99)}
            <PricePeriod>one-time</PricePeriod>
          </Price>
          <FeatureList>
            <Feature>Everything in Annual plan</Feature>
            <Feature>Pay once, access forever</Feature>
            <Feature>All future course updates included</Feature>
            <Feature>Premium community membership</Feature>
            <Feature>1-on-1 consultation session</Feature>
            <Feature>Exclusive bonus content</Feature>
            <Feature>Lifetime support guarantee</Feature>
          </FeatureList>
          <InfoText>
            The ultimate investment for serious Excel professionals. One-time payment, 
            no recurring charges. Never worry about subscription renewal again.
          </InfoText>
        </Card>
      </Grid>

      <Section>
        <SectionTitle>Billing & Payment Information</SectionTitle>
        <InfoGrid>
          <InfoBlock>
            <InfoTitle>Automatic Billing Cycle</InfoTitle>
            <InfoText>
              Your credit card will be billed <Highlight>automatically on a monthly basis</Highlight> unless 
              your membership is cancelled. Monthly subscriptions renew on the same day each month. 
              Annual subscriptions renew yearly on your original purchase date.
            </InfoText>
            <InfoText>
              All charges will appear as <Highlight>PHOTOSHOP.ECOURSES</Highlight> on your credit card statement. 
              Course access is provided immediately after successful payment.
            </InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Cancellation Policy</InfoTitle>
            <InfoText>
              You can cancel your subscription at any time through your account settings or by contacting 
              customer support.
            </InfoText>
            <InfoText>
              To avoid being charged for the next billing cycle, you must cancel <Highlight>at least 24 hours 
              before your next billing date</Highlight>. After cancellation, you will retain access to all 
              course materials until the end of your current paid period.
            </InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Refund Policy</InfoTitle>
            <InfoText>
              We offer a <Highlight>7-day satisfaction guarantee</Highlight> on all course purchases. 
              You may request a refund within 7 days of your course purchase, provided you have 
              completed less than 25% of the course content.
            </InfoText>
            <InfoText>
              To request a refund, contact customer service at support@photoshop-ecourses.com within 
              30 days of purchase. Please visit our Refund Policy page for detailed guidelines.
            </InfoText>
          </InfoBlock>
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>Important Terms & Conditions</SectionTitle>
        <InfoGrid>
          <InfoBlock>
            <InfoTitle>Payment Agreement</InfoTitle>
            <InfoText>
              By subscribing, you agree to pay the total amount displayed at checkout. Subscriptions 
              auto-renew unless cancelled. All payments are processed securely through our payment provider.
            </InfoText>
            <InfoText>
              You will receive a confirmation email with payment details after each transaction. 
              Keep these for your records.
            </InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Course Access Terms</InfoTitle>
            <InfoText>
              Upon successful payment, you will receive <Highlight>instant access to all course materials</Highlight>. 
              This includes video lessons, downloadable resources, and community features.
            </InfoText>
            <InfoText>
              Your access continues as long as your subscription is active (monthly/annual) or indefinitely 
              (lifetime access).
            </InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Age Requirement</InfoTitle>
            <InfoText>
              I am 18 years or older and agree to the Terms & Conditions and Refund Policy. Upon payment, 
              I will receive instant access to all course materials.
            </InfoText>
            <InfoText>
              Your credit card will be billed with the following charge description: 
              <Highlight>PHOTOSHOP.ECOURSES</Highlight>
            </InfoText>
          </InfoBlock>
        </InfoGrid>
      </Section>

      <ContactBox>
        <ContactTitle>Questions About Subscriptions?</ContactTitle>
        <ContactInfo>
          <strong>Contact Customer Support</strong><br />
          Email: support@photoshop-ecourses.com<br />
          Phone: +1 (229) 530-2424<br />
          Hours: Monday-Friday, 9am-6pm CST<br />
          <br />
          <strong>Company Information</strong><br />
          {COMPANY_INFO.owner}<br />
          {COMPANY_INFO.address}<br />
          <br />
          Response time: Within 30 days of your inquiry
        </ContactInfo>
      </ContactBox>
    </Container>
  );
};

export default Subscription;
