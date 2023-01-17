import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Other from './components/Other';
import Hero from './components/Hero';
import ErrorPage from './components/ErrorPage';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>routing </h1>
      <Link to={"/home"}>Home</Link> &nbsp;
      <Link to={"/hello"}>Hello</Link> &nbsp;
      <Link to={"/people/1"}>Luke Skywalker</Link> &nbsp;
      <hr />
      <Routes >
        <Route path='/form' element={<Form/>}/>
        <Route path="*" element={
          <main style={{ padding: "1rem"}}>
            <p>There's nothing here!</p>
            <ErrorPage/>
          </main>
        }/>
        <Route path="/error" element={<ErrorPage/>}/>
        <Route path='/people/:heroId' element={<Hero/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/hello' element={
          <>
            <h1>The word is: hello</h1>
            {/* <Other />
            <Home /> */}
          </>
        } />
      </Routes>
    </div>
  );
}
export default App;
