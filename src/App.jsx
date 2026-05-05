// src/App.jsx – CHỈ THÊM id, KHÔNG ĐỘNG VÀO FONT, CLASSNAME, GÌ HẾT!
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  CV,
} from "./components";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero – giữ nguyên class cũ */}
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>

                {/* About – thêm id="about" */}
                <div
                  id="about"
                  className="bg-about bg-cover bg-center bg-no-repeat "
                >
                  <About />
                </div>

                {/* Tech – thêm id="tech" */}
                <div
                  id="tech"
                  className="bg-tech bg-cover bg-center bg-no-repeat pb-10"
                >
                  <Tech />
                </div>

                {/* Projects – thêm id="projects" */}
                <div id="projects">
                  <Projects />
                </div>

                {/* Experience – giữ nguyên class cũ, chỉ thêm id="experience" */}
                <div
                  id="experience"
                  className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]"
                >
                  <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                    <Experience />
                  </div>
                </div>

                {/* Contact – thêm id="contact" */}
                <div id="contact" className="relative z-0">
                  <Contact />
                </div>
              </>
            }
          />

          <Route path="/cv" element={<CV />} />
          <Route
            path="*"
            element={
              <div className="text-white text-center mt-40 text-4xl">404</div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </LanguageProvider>
  );
};

export default App;
