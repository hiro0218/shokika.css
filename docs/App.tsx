import { StrictMode } from 'react';
import TheHeader from './components/TheHeader';
import TheSidebar from './components/TheSidebar';
import TheMain from './components/TheMain';
import TheFooter from './components/TheFooter';
import ThemeToggleButton from './components/ui/ThemeToggleButton';

function App() {
  return (
    <StrictMode>
      <div className="app">
        <div className="app-container">
          <TheHeader />
          <div className="app-content">
            <div className="app-layout">
              <TheSidebar />
              <div className="main-wrapper">
                <TheMain />
              </div>
            </div>
          </div>
          <TheFooter />
        </div>
        <ThemeToggleButton />
      </div>
    </StrictMode>
  );
}

export default App;
