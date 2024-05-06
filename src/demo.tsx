import generate from "./generator";

export default function Demo() {
  return (
    <div>
      <p>This is a magic</p>
      <button onClick={() => generate()}>Click me to export</button>
    </div>
  );
}
