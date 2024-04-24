import React from "react";

const QuantityCounter = () => {
  return (
    <div className="inline-flex rounded-md border-2 border-primary" role="group">
      <button
        type="button"
        className="inline-block px-2 py-1 text-xs font-medium"
      >
        +
      </button>
      <button
        type="button"
        className="inline-block px-3 py-1 text-xs font-medium"
      >
        1
      </button>
      <button
        type="button"
        className="inline-block px-2 py-1 text-xs font-medium"
      >
        -
      </button>
    </div>
  );
};

export default QuantityCounter;
