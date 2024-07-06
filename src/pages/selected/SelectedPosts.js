import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

const SelectedPosts = ({ mobile }) => {
    const [postData, setPostData] = useState({
        // we will use the pagePost later!
        pagePost: { results: [] },
        selectedPosts: { results: [] },
    });
    const { selectedPosts } = postData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
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
        };

        handleMount();
    }, [currentUser]);

    return (
        <Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'}`}>
            {selectedPosts.results.length ? (
                <>
                    <p>Selected Choices List</p>
                    {selectedPosts.results.map((post) => (
                        <div key={post.id}>
                            <Link to={`/posts/${post.id}`}>{`"${post.title}" by ${post.owner}`}</Link>
                        </div>
                    ))}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default SelectedPosts;