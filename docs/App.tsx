import TheHeader from './components/TheHeader';
import TheSidebar from './components/TheSidebar';
import TheMain from './components/TheMain';
import TheFooter from './components/TheFooter';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return (
    <>
      <TheHeader />
      <div className="app-layout">
        <TheSidebar />
        <div className="main-wrapper">
          <TheMain />
          <TheFooter />
        </div>
      </div>
      <ThemeToggleButton />
    </>
  );
}

export default App;