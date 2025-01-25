import React from 'react';

const FormInput = ({ label, type, placeholder, value, onChange, name, required = true }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
};

export default FormInput;
