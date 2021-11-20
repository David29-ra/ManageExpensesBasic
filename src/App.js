import './App.css';
import { css, Global } from "@emotion/react";
import { ContainerApp } from './components/containers';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Expense } from './pages/Expenses';

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap');
          * {
            margin: 0;
            padding: 0;
            border: 0;
            font-family: 'Roboto', sans-serif;
            box-sizing: border-box;
            text-decoration: none;
          }
          body {
            background-color: #fafafa;
          }
        `}/>
      <Router>
        <ContainerApp>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/expenses" component={Expense} />
            <Route path="/income" component={Expense} />
          </Switch>
        </ContainerApp>
      </Router>
    </>
  );
}

export default App;
