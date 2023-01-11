import React from "react";
import { useSelector } from "react-redux";

export default function Reader() {
  const count = useSelector((state) => state.counter.value);
  
  return (
    <div>
      <h3>Reader - Desde otro componente: {count}</h3>
    </div>
  );
}
