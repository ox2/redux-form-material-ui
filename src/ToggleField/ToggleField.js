import React, { PropTypes } from 'react';
import { default as MaterialToggleField } from '@ox2/material-ui/ToggleField';

/**
 * ToggleField Component
 */
const ToggleField = ({ input, label, disabled }) => (
  <MaterialToggleField
    disabled={disabled}
    label={label}
    onToggle={input.onChange} // eslint-disable-line react/jsx-handler-names
    toggled={input.value ? true : false} // eslint-disable-line no-unneeded-ternary
  />
);

ToggleField.propTypes = {
  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your <input/> component.
   */
  input: PropTypes.any,
  /**
   * Input label text
   */
  label: PropTypes.string,
};

export default ToggleField;
