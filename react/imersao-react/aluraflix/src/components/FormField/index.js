import React from "react";

export default function FormField({ label, type, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        {type === "textarea" ? (
          <textarea value={value} onChange={onChange} />
        ) : (
          <input type={type} value={value} onChange={onChange} />
        )}
      </label>
    </div>
  );
}
