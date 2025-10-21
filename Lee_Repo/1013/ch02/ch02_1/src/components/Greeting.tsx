import React from "react";

interface GreetingProps {
  name: string;
  age?: number;
}

export default function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <h2>안녕하세요, {name}님!</h2>
      {age && <p>나이: {age}세</p>}
    </div>
  );
}
