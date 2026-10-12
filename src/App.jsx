import { Routes, Route } from "react-router-dom";

import MyNavigation from "./MyNavigation.jsx";

import Home from "./Home.jsx";
import Games from "./MyGames.jsx";
//import About from "./pages/About";
//import Articles from "./pages/Articles";
//import Contact from "./pages/Contact";
import Gallery from "./SermonAudio.jsx";
import GitHubRepositoriesPage from "./GitHubRepositoriesPage.jsx";


function App() {
  return (
    <>
      <MyNavigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermonaudio" element={<Gallery />} />
        <Route path="/mygames" element={<Games />} />
        <Route path="/githubrepositoriespage" element={<GitHubRepositoriesPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/articles" element={<Articles />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
