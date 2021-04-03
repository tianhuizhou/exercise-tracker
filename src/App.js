import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import exerciseList from "./components/exercise-list";
import editExercise from "./components/edit-exercise";
import createUser from "./components/create-user";
import createExercise from "./components/create-exercise";
function App() {
  return (
      <Router>
          <div className={'container'}>
        <Navbar />
        <br/>
        <Route path="/" exact component={exerciseList}/>
        <Route path="/edit/:id" component={editExercise}/>
        <Route path="/create" component={createExercise}/>
        <Route path="/user" component={createUser}/>
          </div>
      </Router>

  );
}

export default App;
