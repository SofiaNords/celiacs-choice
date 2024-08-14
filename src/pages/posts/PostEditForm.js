import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        location: "",
        score: "",
        content: "",
        image: "",
    });
    const { title, location, content, score, image } = postData;

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const { title, location, score, content, image, is_owner } = data;
                // If the user is not the owner, redirect to home page
                is_owner ? setPostData({ title, location, score, content, image }) : history.push("/");
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        // Update state based on input changes
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
             // Revoke existing object URL and set new image URL
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("location", location);
        formData.append('score', score);
        formData.append("content", content);

        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        try {
            // Submit form data and redirect to post details page
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            {/* Title input */}
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* Display title validation errors */}
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            {/* Location input */}
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* Display location validation errors */}
            {errors?.location?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            {/* Score input */}
            <Form.Group>
                <Form.Label>Score</Form.Label>
                <Form.Control
                    as="select"
                    name="score"
                    value={score}
                    onChange={handleChange}
                >
                    <option value="OK">Okay</option>
                    <option value="GD">Good</option>
                    <option value="GT">Great</option>
                </Form.Control>
            </Form.Group>
            {/* Content textarea */}
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* Display content validation errors */}
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            {/* Cancel button */}
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            {/* Save button */}
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                save
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                {/* Left column for mobile view */}
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {/* Display image */}
                            <figure>
                                <Image className={appStyles.Image} src={image} rounded />
                            </figure>
                            <div>
                                {/* Change image button */}
                                <Form.Label
                                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>

                            {/* Image upload input */}
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />
                        </Form.Group>
                        {/* Display image validation errors */}
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        {/* Render text fields for mobile view */}
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                {/* Right column for desktop view */}
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostEditForm;