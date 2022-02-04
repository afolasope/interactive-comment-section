import './styles/App.scss';
import CommentSection from './CommentSection';
import ChatBox from './ChatBox';
import { UseGlobalContext } from './context';

function App() {
  const { data } = UseGlobalContext();

  return (
    <main>
      <CommentSection />
      <ChatBox />
    </main>
  );
}

export default App;
