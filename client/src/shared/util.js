export const handleInputChanged = (event, controlName) => {
  const updatedControls = {
    ...this.state.controls,
    [controlName]: {
      ...this.state.controls[controlName],
      value: event.target.value,
    },
  };

  this.setState({
    controls: updatedControls,
  });
};
