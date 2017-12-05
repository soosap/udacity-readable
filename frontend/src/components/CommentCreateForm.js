/* @flow */
import * as React from 'react';
import { reduxForm, Field, type FormProps } from 'redux-form';
import styled from 'styled-components';

const Form = styled.form`
  .field:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  .label:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`;

type Props = FormProps & {
  type: 'create' | 'edit',
};

const CommentCreateForm = ({ onSubmit, handleSubmit, type }: Props) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <Field
            name="author"
            component="input"
            className="input"
            type="text"
            placeholder="Who is this?"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <Field
            name="body"
            component="textarea"
            className="textarea"
            placeholder="What's on your mind?"
          />
        </div>
      </div>
      <div className="control">
        <button className="button is-link" type="submit">
          {`${type === 'create' ? 'Create' : 'Edit'} comment`}
        </button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'COMMENT_CREATE_FORM',
  enableReinitialize: true,
})(CommentCreateForm);
