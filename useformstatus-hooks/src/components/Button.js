import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();

  return <button type="submit">{pending ? "Logging in..." : ""}</button>;
};

export default Button;
