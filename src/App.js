import './App.css';
import { css, Global } from "@emotion/react";

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
            font-family: 'Inter', sans-serif;
            box-sizing: border-box;
            text-decoration: none;
          }
          body {
            background-color: #fafafa;
          }
        `}/>
      <p>Hello World</p>
      
    </>
  );
}

export default App;
