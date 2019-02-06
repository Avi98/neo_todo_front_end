import React from "react";
import { Input } from "semantic-ui-react";

export function TodoContentEdit({ list }) {
  return <Input placeholder={list} />;
}
