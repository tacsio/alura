import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

export default function FormField({
  id,
  label,
  type,
  value,
  onChange,
  suggestions,
}) {
  const isTextArea = type === "textarea";
  const tag = isTextArea ? "textarea" : "input";

  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>
        <Input
          as={tag}
          id={id}
          value={value}
          type={type}
          onChange={onChange}
          autoComplete={hasSuggestions ? "off" : "on"}
          list={hasSuggestions ? `suggestionFor_${id}` : "on"}
        />
        <Label.Text>{label}:</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${id}`}>
            {suggestions.map((suggestion) => (
              <option
                key={`suggestionFor_${id}_option_${suggestion}`}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
