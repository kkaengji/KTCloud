import Greeting from "../components/Greeting";

export default function Home() {
  return (
    <div>
      <Greeting name="남경진" age={30} />
      <Greeting name="React 입문자" />
    </div>
  );
}
