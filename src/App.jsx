import ProfileCardSection from "./components/ProfileCardSection";
import { UsersProvider } from "./contexts/UsersContext";
import "./App.css";

function App() {
  return (
    <div className="App h-screen min-w-screen pb-20 overflow-x-hidden bg-slate-900  ">
      <header className="py-4 px-8 w-full">
        <h1 className="text-center text-4xl text-white font-bold">User Profile Cards</h1>
        <div className="flex">
          <div className="ml-auto rounded-md text-slate-50 text-right mr-8 text-2xl px-8 py-4 font-semibold bg-blue-300/70 backdrop:blur">
            Made By: <span>Aditya Mishra</span>
          </div>
        </div>
      </header>
      <UsersProvider>
        <ProfileCardSection />
      </UsersProvider>
    </div>
  );
}

export default App;
