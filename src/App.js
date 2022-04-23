import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./routes/Main";
import Title from "./routes/Title";
import Transcript from "./routes/Transcript";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Main}/>
      <Route path="/title" exact component={Title}/>
      <Route path="/title/transcript" exact component={Transcript}/>
    </HashRouter>
  );
}

export default App;

/*
  Click: Crawling Dictionary When a Certain Word Is Clicked
  Signup & Login: For Saving Vocabularies by User
  Save: Vocabularies with Example Sentences, and Meaning (From External Dictionary)
*/
