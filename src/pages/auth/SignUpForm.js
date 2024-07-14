import React, { useState } from "react";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import hero from "../../assets/hero.jpg";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
    // Redirect to the home page if the user is already logged in
    useRedirect('loggedIn');

    // State for sign-up form data
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2 } = signUpData;

    // State for form validation errors
    const [errors, setErrors] = useState({});

    const history = useHistory();

    // Handle input changes
    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
            history.push('/signin');
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    {/* Sign-up form header */}
                    <h1 className={styles.Header}>sign up</h1>
                    <Form onSubmit={handleSubmit}>
                        {/* Username input */}
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}
                        {/* Password input */}
                        <Form.Group controlId="password1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}
                        {/* Confirm password input */}
                        <Form.Group controlId="password2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}
                        {/* Sign-up button */}
                        <Button className={`${btnStyles.Button} ${btnStyles.Green} ${btnStyles.Black} ${btnStyles.Wide}`} type="submit">
                            Sign up
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert variant="warning" key={idx} className="mt-3">{message}</Alert>
                        ))}
                    </Form>
                </Container>
                {/* Sign-in link */}
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
                    </Link>
                </Container>
            </Col>
            {/* Display image on larger screens */}
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={hero}
                />
            </Col>
        </Row>
    );
};

export default SignUpForm;