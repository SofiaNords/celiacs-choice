import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import styles from '../../styles/About.module.css';
import about from '../../assets/about.webp';
import appStyles from '../../App.module.css';

function About() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          {/* Vänsterkolumn för text */}
          <h1 className={styles.Header}>About Celiac's Choice</h1>
          <p>
            Welcome to Celiac's Choice, your go-to platform for gluten-free dining experiences! Whether you're a seasoned celiac or just starting your gluten-free journey, we're here to connect you with safe and delicious options.
          </p>
          <h3>Our Mission</h3>
          <p>
            At Celiac’s Choice, we’re passionate about promoting gluten-free awareness and supporting the celiac community. Our platform allows users to share their favorite gluten-free restaurants and cafés, complete with mouthwatering photos and precise locations. Plus, you can engage with other users by commenting on their posts and building your own Selected Choices list.
          </p>
          <h3>How It Works</h3>
          <ol>
            <li>
              Register: Sign up to become a part of our vibrant community. Share your gluten-free discoveries and connect with fellow foodies.
            </li>
            <li>
              Post Your Experiences: After dining at a gluten-free gem, create a post! Include a photo, location details, and a brief description of your experience.
            </li>
            <li>
              Explore and Engage: Browse through other users’ posts, discover new places, and leave comments. Sharing your insights helps others make informed choices.
            </li>
            <li>
              Selected Choices: Save your favorite posts to your Selected Choices list. Easily access them by clicking on the post title.
            </li>
          </ol>
          <h3>Join Us!</h3>
          <p>
            Ready to embark on a gluten-free adventure? Register now and start sharing your culinary escapades with the Celiac’s Choice community!
          </p>
        </Col>
        <Col xs={12} md={4}>
          {/* Högerkolumn för bild */}
          <Image
          className={`${appStyles.FillerImage}`}
          src={about}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About