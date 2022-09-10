import { useSelector } from 'react-redux';
import { HomePage } from './pages/HomePage';

function App() {
  const colorScheme = useSelector((state) => state);
  return (
    <div className={colorScheme}>
      <HomePage />
    </div>
  );
}

export default App;
