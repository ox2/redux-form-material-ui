import React, { PropTypes } from 'react';
import { RadioButtonGroup as MaterialRadioButtonGroup } from 'material-ui/RadioButton';

/**
 * RadioGroup Component
 */
const RadioGroup = ({ input, ...rest }) => (
  <MaterialRadioButtonGroup
    onChange={(event, value) => input.onChange(value)}
    valueSelected={input.value}
    {...input}
    {...rest}
  />
);

RadioGroup.propTypes = {
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your <input/> component.
   */
  input: PropTypes.any,
};

export default RadioGroup;
