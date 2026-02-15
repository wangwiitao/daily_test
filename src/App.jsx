import { Card } from "./Card";

export default function App() {
  return (
    <Card secret="Top secret">
      <Card.Header padding="2rem">
        <h1 style={{ margin: "0" }}>Header</h1>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nihil
        animi ipsa quisquam, repellendus ullam voluptatem, praesentium quae quod
        distinctio libero! Provident maxime dolorem id sunt consequatur ea
        dignissimos sint.
      </Card.Body>
      <Card.Footer>
        <button>Ok</button>
        <button>Cancel</button>
      </Card.Footer>
    </Card>
  );
}
