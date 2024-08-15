import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
    // Redirect if user is logged out
    useRedirect('loggedOut');
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        location: "",
        content: "",
        score: "",
        image: "",
    });

    const { title, location, content, score, image } = postData;

    const imageInput = useRef(null);
    const history = useHistory();

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

        formData.append('title', title);
        formData.append('location', location);
        formData.append('content', content);
        formData.append('score', score);
        formData.append('image', imageInput.current.files[0]);

        const newErrors = {};

        // Validate form fields
        if (!title) {
            newErrors.title = ["This field may not be blank."];
        }
        if (!location) {
            newErrors.location = ["This field may not be blank."];
        }
        if (!content) {
            newErrors.content = ["This field may not be blank."];
        }
        if (!score) {
            newErrors.score = ["Choose a Score!"];
        }
        if (!image) {
            newErrors.image = ["The submitted data was not a file. Check the encoding type on the form."];
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // Submit form data and redirect to post details page
            const { data } = await axiosReq.post('/posts/', formData);
            history.push(`/posts/${data.id}`);
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
            {/* Score input */}
            <Form.Group>
                <Form.Label>Score</Form.Label>
                <Form.Control
                    as="select"
                    name="score"
                    value={score}
                    onChange={handleChange}
                >
                    <option value="">Choose a Score!</option>
                    <option value="OK">Okay</option>
                    <option value="GD">Good</option>
                    <option value="GT">Great</option>
                </Form.Control>
            </Form.Group>
            {/* Display score validation errors */}
            {errors?.score?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            {/* Cancel button */}
            <Button
                className={`${btnStyles.Button} ${btnStyles.Green} ${btnStyles.Black}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            {/* Create button */}
            <Button className={`${btnStyles.Button} ${btnStyles.Green} ${btnStyles.Black}`} type="submit">
                create
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
                            {/* Display image if available */}
                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image} src={image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                            htmlFor="image-upload"
                                        >
                                            Change the image
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >
                                    <Asset
                                        src={Upload}
                                        message="Click or tap to upload an image"
                                    />
                                </Form.Label>
                            )}
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

export default PostCreateForm;
