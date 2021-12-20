import './App.css';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import { DetailContent } from './components/index';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={2} />
        <Grid xs={12} sm={8}>
          {/* <Grid xs={12} sm={4}> */}
          <Router>
            <Routes>
              <Route exact path="/" element={<Content />}></Route>
              <Route path="/detail/:id" element={<DetailContent />}></Route>
            </Routes>
          </Router>
        </Grid>
        <Grid sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
