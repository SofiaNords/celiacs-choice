import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from '../../styles/Post.module.css'
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        select_count,
        selected_id,
        title,
        location,
        content,
        image,
        updated_at,
        postPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return <Card className={styles.Post}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} />
                </Link>
                <div className="d-flex align-items-center">
                    <span>{updated_at}</span>
                    {is_owner && postPage && "..."}
                </div>
            </Media>
        </Card.Body>
        <Link to={`/posts/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            {location && <Card.Text className="text-center">Location: {location}</Card.Text>}
            {content && <Card.Text>{content}</Card.Text>}
            <div className={styles.PostBar}>
                {is_owner ? (
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>You can't like your own post!</Tooltip>}
                    >
                        <i class="fa-solid fa-circle-check" />
                    </OverlayTrigger>
                ) : selected_id ? (
                    <span onClick={() => { }}>
                        <i className={`fa-solid fa-circle-check ${styles.Select}`} />
                    </span>
                ) : currentUser ? (
                    <span onClick={() => { }}>
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
                {select_count}
                <Link to={`/posts/${id}`}>
                    <i className="far fa-comments" />
                </Link>
                {comments_count}
            </div>
        </Card.Body>
    </Card>
};

export default Post