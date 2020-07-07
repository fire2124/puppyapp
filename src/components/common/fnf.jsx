import React, { Component } from "react";
import { Field } from "react-final-form";

const fnf = ({fieldName,validate}) => (
    <Field name={fieldName} validate={validate}>
      {({ input }) => {
        const increase = () => {
          const hodnota = input.value;
          const novaHodnota = hodnota + 1;
          input.onChange(novaHodnota);
        };
        const decrease = () => {
          const hodnota = input.value;
          const novaHodnota = hodnota - 1;
          input.onChange(novaHodnota);
        };
        return (
          <>
            <button onClick={increase}>+</button>
            <input type="text" name={fieldName} />
            <button onClick={decrease}>-</button>
          </>
        );
      }}
    </Field>
  );

  export default fnf;