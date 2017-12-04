/* @flow */
import * as React from 'react';
import { reduxForm, Field, type FormProps } from 'redux-form';
import styled from 'styled-components';

import { Back } from '../components';
import type { Category } from '../utils/types';

const Form = styled.form`
  padding: 2rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  .field:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  .label:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`;

const Header = styled.div`
  margin-bottom: 1.8rem;
`;

type Props = {
  onSubmit: () => void,
  handleSubmit: Function,
  categories: Array<Category>,
  type: 'create' | 'edit',
};

const PostCreateForm = ({
  onSubmit,
  handleSubmit,
  categories,
  type,
}: Props) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Header>
        <Back to="/">Back</Back>
      </Header>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Pick a good title"
            className="input"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Your name"
            className="input"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Category</label>
        <div className="control">
          <div className="select">
            <Field name="category" component="select" type="text">
              <option>Select category</option>
              {categories.map(category => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Field>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Body</label>
        <div className="control">
          <Field
            name="body"
            component="textarea"
            type="text"
            placeholder="Your message"
            className="textarea"
          />
        </div>
      </div>
      <div className="control">
        <button className="button is-link" type="submit">
          {`${type === 'create' ? 'Create' : 'Edit'} post`}
        </button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'POST_CREATE_FORM',
})(PostCreateForm);
