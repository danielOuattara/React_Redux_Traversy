import './App.css';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
