import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from '../../styles/Post.module.css';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { axiosRes } from '../../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { MoreDropdown } from '../../components/MoreDropdown';

const Post = (props) => {
    // Destructure props
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        select_count,
        select_id,
        title,
        location,
        content,
        score_display,
        image,
        updated_at,
        postPage,
        setPosts,
        category,
    } = props;

    // Get the current user
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

     // Handle edit action
    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };
    
    // Handle delete action
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    // Handle select action
    const handleSelect = async () => {
        try {
            const { data } = await axiosRes.post("/selected/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id ?
                        { ...post, select_count: post.select_count + 1, select_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    // Handle unselect action
    const handleUnSelect = async () => {
        try {
            await axiosRes.delete(`/selected/${select_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id ?
                        { ...post, select_count: post.select_count - 1, select_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                {/* Display user profile information */}
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {/* Show edit and delete options for the post owner */}
                        {is_owner && postPage && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                </Media>
            </Card.Body>
            {/* Link to the post details page */}
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {/* Display post title, score, category, location and content */}
                {title && <Card.Title className="text-center">{title}</Card.Title>}
                {score_display && <Card.Text className="text-center">Score: {score_display}</Card.Text>}
                {category && <Card.Text className="text-center">Category: {category}</Card.Text>}
                {location && <Card.Text className="text-center">Location: {location}</Card.Text>}
                {content && <Card.Text>{content}</Card.Text>}
                {/* Show select/unselect options based on user interactions */}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't select your own post!</Tooltip>}
                        >
                            <i className="fa-solid fa-circle-check" />
                        </OverlayTrigger>
                    ) : select_id ? (
                        <span onClick={handleUnSelect}>
                            <i className={`fa-solid fa-circle-check ${styles.Select}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleSelect}>
                            <i className={`fa-solid fa-circle-check ${styles.SelectOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to select posts!</Tooltip>}
                        >
                            <i className="fa-solid fa-circle-check" />
                        </OverlayTrigger>
                    )}
                    {/* Display select count and link to post comments */}
                    {select_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;