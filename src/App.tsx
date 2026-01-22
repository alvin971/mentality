import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';
import AssessmentIntroPage from './pages/AssessmentIntroPage';
import CompleteTestOrchestratorPage from './pages/CompleteTestOrchestratorPage';
import CompleteTestResultsPage from './pages/CompleteTestResultsPage';
import ChatPage from './pages/ChatPage';

// Pages de tests individuels (à implémenter)
import MatricesTestPage from './pages/tests/MatricesTestPage';
import CubesTestPage from './pages/tests/CubesTestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/assessment-intro" element={<AssessmentIntroPage />} />
        <Route path="/complete-test" element={<CompleteTestOrchestratorPage />} />
        <Route path="/results" element={<CompleteTestResultsPage />} />
        <Route path="/chat" element={<ChatPage />} />

        {/* Tests individuels */}
        <Route path="/test/matrices" element={<MatricesTestPage />} />
        <Route path="/test/cubes" element={<CubesTestPage />} />
        {/* TODO: Ajouter les 10 autres tests */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
