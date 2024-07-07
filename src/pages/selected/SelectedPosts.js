import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from '../../styles/SelectedPosts.module.css'
import { Link } from "react-router-dom";

const SelectedPosts = ({ mobile }) => {
    const [postData, setPostData] = useState({
        pagePost: { results: [] },
        selectedPosts: { results: [] },
    });
    const [isLoading, setIsLoading] = useState(true);
    const { selectedPosts } = postData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            setIsLoading(true);
            try {
                const { data } = await axiosReq.get(
                    `/posts/?select__owner__profile=${currentUser.profile_id}&ordering=-select__created_at`
                );
                setPostData((prevState) => ({
                    ...prevState,
                    selectedPosts: data,
                }));
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };

        handleMount();
    }, [currentUser]);

    return (
        <Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'}`}>
            {isLoading ? (
                <Asset spinner />
            ) : selectedPosts.results.length ? (
                <>
                    <p>Selected Choices List</p>
                    {selectedPosts.results.map((post) => (
                        <div key={post.id}>
                            <i className={`fa-solid fa-circle-check ${styles.Select}`} />
                            <Link to={`/posts/${post.id}`}>{`"${post.title}" by ${post.owner}`}</Link>
                        </div>
                    ))}
                </>
            ) : (
                <>
                <p>Selected Choices List</p>
                <p>The list is empty for now. Please make your selections to replenish the list.</p>
                </>
            )}
        </Container>
    );
};

export default SelectedPosts;