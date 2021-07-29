import React from "react"

function ErrorAlert({ error }) {
    return (
      error && (
        <div>Error: {error.message}</div>
      )
    );
  }
  
  export default ErrorAlert;