import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  function handleSave(data: unknown) {
    const extractData = data as { name: string; age: string };
    console.log(extractData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
