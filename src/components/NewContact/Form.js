import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { v4 as uuidv4 } from "uuid";
import useStyles from "./styles";

const Form = ({ onFormSubmit }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    website: ""
  });

  const onChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const onSubmit = () => {
    onFormSubmit({ ...values, id: uuidv4() });
  };

  return (
    <ValidatorForm autoComplete="off" onSubmit={onSubmit}>
      <TextValidator
        id="name"
        label="Name"
        fullWidth
        value={values.name}
        onChange={onChange("name")}
        margin="normal"
        variant="outlined"
        name="name"
        validators={["required"]}
        errorMessages={["This field is required"]}
      />
      <TextValidator
        id="email"
        label="Email"
        type="email"
        fullWidth
        value={values.email}
        onChange={onChange("email")}
        margin="normal"
        variant="outlined"
        name="email"
      />
      <TextValidator
        id="phone"
        label="Phone"
        fullWidth
        value={values.phone}
        onChange={onChange("phone")}
        margin="normal"
        variant="outlined"
        name="phone"
        validators={["required"]}
        errorMessages={["This field is required"]}
      />
      <TextValidator
        id="website"
        label="Website"
        fullWidth
        value={values.wensite}
        onChange={onChange("website")}
        margin="normal"
        variant="outlined"
        name="website"
      />
      <div className={classes.submit}>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add
        </Button>
      </div>
    </ValidatorForm>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func
};

export default Form;
