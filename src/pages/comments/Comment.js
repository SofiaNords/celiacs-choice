import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        id,
        setPost,
        setComments,
    } = props;

    // State to control whether the edit form is displayed
    const [showEditForm, setShowEditForm] = useState(false);

    // Get the current user from context
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    // Handle comment deletion
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);

            // Update post comments count
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            // Remove the deleted comment from the comments list
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) { 
            // Handle error (if needed)
        }
    };

    return (
        <>
            <hr />
            <Media>
                {/* Link to user profile */}
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    {/* Display comment owner and timestamp */}
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>

                    {/* Display comment content or edit form */}
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>

                {/* Display more options dropdown for comment owner */}
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

export default Comment;
