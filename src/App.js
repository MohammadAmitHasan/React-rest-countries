import logo from './logo.svg';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Mobile from './components/Mobile/Mobile';
import Todo from './components/Todo/Todo';
import Todos from './components/todos/Todos';

const blogHeaderStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '20px',
}

function App() {
  return (
    <div className="App">
      <article className='blog'>

        <h2 style={blogHeaderStyle}>Faija wanna color her hair</h2>
        <p>
          Hasan is suggesting gorur lenja color or sea beach color
        </p>
        <p style={{ color: 'red', padding: '20px', border: '2px solid red' }}>
          It will be done later.
        </p>
      </article>


      <Blogs></Blogs>

      <Mobile></Mobile>

      <Todos></Todos>

    </div>
  );
}

export default App;
