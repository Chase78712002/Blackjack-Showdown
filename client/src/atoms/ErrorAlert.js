import React from 'react';

function ErrorAlert({ error }) {
  return error && <div className='error-alert'>Error: {error.message}</div>;
}

export default ErrorAlert;
