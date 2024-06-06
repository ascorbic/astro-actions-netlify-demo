import { actions } from "astro:actions";

export default function() {
  return (
    <button
      onClick={async () => {
        const res = await actions.sayHello();
        console.log(res);
      }}
    >
      click me
    </button>
  );
}
