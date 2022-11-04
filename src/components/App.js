import { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="custom-container">
          <Sidebar />
          <MainContent />
        </div>
      </>
    );
  }
}

export default App;
