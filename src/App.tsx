import { Button } from "./Button.tsx";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        alignItems: "flex-start",
      }}
    >
      <Button size="sm">Small</Button>
      <Button>Medium</Button>
      <Button size="lg">Large</Button>
      <Button As="a" href="/">
        Link
      </Button>
    </div>
  );
}
