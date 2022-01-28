import { PersonModel } from "./test-components/models/PersonModel";
import PersonUI from "./test-components/PersonUI";

const initData = new PersonModel();

function App() {
  console.log("App");
  return <PersonUI initialModel={initData} />;
}

export default App;
