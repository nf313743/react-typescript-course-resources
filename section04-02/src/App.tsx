import Button from "./components/Button";

function App() {
  return (
    <main>
      <p>
        <Button el="button">A Buton</Button>
      </p>
      <p>
        <Button el="anchor" href="http://google.com">
          A link
        </Button>
      </p>
    </main>
  );
}

export default App;
