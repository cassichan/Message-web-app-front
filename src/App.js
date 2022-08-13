import "./App.css";
import AddMessage from "./Components/AddMessage";
import MessageCard from "./Components/MessageCard";
import Header from "./Components/Header";
import MessageList from "./Components/MessageList";

function App() {
  return (
    <>
      <Header />
      <MessageList />
      <MessageCard />
      <AddMessage />
    </>
  );
}

export default App;
