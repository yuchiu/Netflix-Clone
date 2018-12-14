import React from "react";

import validateField from "./validateField";

const HOCForm = getInitialState => WrappedComponent => {
  class newForm extends React.Component {
    constructor(props) {
      super(props);
      const normalizedState = this.normalizeState();
      this.state = { ...normalizedState };
    }

    /**
     * normalize initial State, check for errors
     */
    normalizeState = () => {
      const normalizedState = getInitialState();
      if (!normalizedState.fieldsToValidate) {
        normalizedState.fieldsToValidate = [];
      }
      if (!normalizedState.fieldErrors) {
        normalizedState.fieldErrors = {};
      }
      if (!normalizedState.formOptions) {
        normalizedState.formOptions = {};
      }
      if (!normalizedState.formFields) {
        console.error(
          "formFields of type object is required to be passed in with HOC Form as initial state"
        );
        normalizedState.formFields = {};
      }
      return normalizedState;
    };

    /**
     * methods to reset internal states
     */
    resetForm = () => {
      const normalizedState = this.normalizeState();
      this.setState({
        ...normalizedState
      });
    };

    resetFormFields = () => {
      const initialState = getInitialState();
      this.setState({
        formFields: { ...initialState.formFields }
      });
    };

    resetFormOptions = () => {
      const initialState = getInitialState();
      this.setState({
        formOptions: { ...initialState.formOptions }
      });
    };

    resetFieldErrors = () => {
      const initialState = getInitialState();
      this.setState({
        fieldErrors: { ...initialState.fieldErrors }
      });
    };

    /**
     * methods to update internal states directly
     */
    updateFormFields = receivedFields => {
      const { formFields } = this.state;
      const fieldList = { ...formFields, ...receivedFields };
      this.setState({
        formFields: { ...fieldList }
      });
    };

    updateFormOptions = receivedOptions => {
      const { formOptions } = this.state;
      const optionList = { ...formOptions, ...receivedOptions };
      this.setState({
        formOptions: optionList
      });
    };

    updateFieldErrors = receivedErrors => {
      const { fieldErrors } = this.state;
      const errorList = { ...fieldErrors, ...receivedErrors };
      this.setState({
        formOptions: errorList
      });
    };

    /**
     * methods to set internal states directly
     */
    setFormFields = formFields => {
      this.setState({
        formFields
      });
    };

    setFormOptions = formOptions => {
      this.setState({
        formOptions
      });
    };

    setFieldErrors = fieldErrors => {
      this.setState({
        fieldErrors
      });
    };

    /**
     * method for handle form field's value changes
     */
    handleFieldChange = e => {
      const { formFields } = this.state;
      const { name, value } = e.target;
      formFields[name] = value;
      this.setState({
        formFields
      });
    };

    /**
     * method for validates form fields's values using validateField function
     */
    fieldsValidation = () => {
      const { fieldsToValidate, formFields } = this.state;
      let errorList = {};
      fieldsToValidate.map(field => {
        const error = validateField(field, formFields[field]);
        if (error) {
          errorList = { ...errorList, [field]: error };
        }
        return field;
      });
      this.setState({
        fieldErrors: errorList
      });
      return errorList;
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          updateFormFields={this.updateFormFields}
          updateFormOptions={this.updateFormOptions}
          updateFieldErrors={this.updateFieldErrors}
          setFormFields={this.setFormFields}
          setFormOptions={this.setFormOptions}
          setFieldErrors={this.setFieldErrors}
          resetForm={this.resetForm}
          resetFormFields={this.resetFormFields}
          resetFormOptions={this.resetFormOptions}
          resetFieldErrors={this.resetFieldErrors}
          handleFieldChange={this.handleFieldChange}
          fieldsValidation={this.fieldsValidation}
        />
      );
    }
  }
  return newForm;
};

export default HOCForm;
