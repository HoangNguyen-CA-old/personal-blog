import React from 'react';

import Input from '../Input/Input';

const FormInputs = (props) => {
  const formElements = [];
  for (let control in props.controls) {
    formElements.push({ id: control, config: props.controls[control] });
  }
  return (
    <>
      {formElements.map((el) => {
        return (
          <Input
            key={el.id}
            label={el.id}
            type={el.config.type}
            config={el.config.config}
            value={el.config.value}
            changed={(e) => props.handleInputChanged(e, el.id)}
          />
        );
      })}
    </>
  );
};

export default FormInputs;
