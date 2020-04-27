import React from "react";
import { PropTypes } from "prop-types";

const Checkbox = ({ label, selected, onChange, styleClass, error }) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    onChange(checked);
  };
  return (
    <div className={`form-group ${styleClass}`}>
      <label>
        {label}
        <input
          type="checkbox"
          defaultChecked={selected}
          value={selected}
          onChange={handleChange}
        />
      </label>
      {error && (
        <div className="alert alert-danger">{JSON.stringify(error)}</div>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  styleClass: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  styleClass: "",
};

export default Checkbox;
