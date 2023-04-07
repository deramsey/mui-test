import * as r from 'react';
import '@fontsource/roboto/500.css';
import "./App.css"
import {Button, Container, Avatar} from "@mui/material";
import {indigo} from "@mui/material/colors";

function App(){
  return(
    <div>
      <Container className="container" maxWidth="sm">
      <Avatar className="av" sx={{bgcolor: indigo[900]}}>DR</Avatar>
      <Button sx={{bgcolor:indigo[500]}} size="large" className="center" variant="contained" onClick={()=>{alert("Hello World!")}}>Hello world!</Button>
      </Container>
    </div>
  )
}

export default App;
