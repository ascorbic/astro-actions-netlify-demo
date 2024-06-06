import { actions } from "astro:actions";
import { useState } from "react";

export default function() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <button
        onClick={async () => {
          const res = await actions.sayHello();
          console.log("server says:", res);
          setMessage(res);
        }}
      >
        Say hello
      </button>
      <p>{message}</p>
    </div>
  );
}
