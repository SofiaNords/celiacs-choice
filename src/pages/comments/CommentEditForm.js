import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;

  // State for edited comment content
  const [formContent, setFormContent] = useState(content);

  // Handle input changes
  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  // Handle comment update
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Update the comment content
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });

      // Update the comments list with the edited comment
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id ? {
            ...comment,
            content: formContent.trim(),
            updated_at: "now",
          }
            : comment;
        }),
      }));

      // Hide the edit form
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        {/* Editable comment input */}
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        {/* Cancel button */}
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        {/* Save button */}
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
