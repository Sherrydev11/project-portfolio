import './App.css'
import { Intro } from "./Components/Intro";
import { Tech } from "./Components/Tech";
import theWeatherApp from "./assets/the-weather-app.jpeg";
import { FeaturedProjects } from "./Components/FeaturedProjects";
import { MyWords } from "./Components/MyWords";
import { Skills } from "./Components/Skills";
import { LetsTalk } from "./Components/LetsTalk";
import { Marquee } from "./Components/Marquee";




function App() {
  return (
    <div>
      <Intro />
      <Tech />
      <FeaturedProjects
        projects={[
          {
            title: "The Weather App Project",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description: "This is a weather app that I created using external API.",
            demoUrl: "",
            codeUrl: "",
            tech: ["HTML", "CSS", "JavaScript"],
          },
        ]}
      />

      <div className="waves" />

      <MyWords
        posts={[
          {
            id: 1,
            title: "How to stop being scared: Learning to love code",
            date: "2025-02-09",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description:
              "Writing code is less about “just working”. Instead, it’s much more about creativity...",
            url: "",
          },
          {
            id: 2,
            title: "Another post",
            date: "2025-03-05",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description: "More thoughts...",
            url: "",
          },
        ]}
      />

      {/* 👇 Now Skills is below MyWords */}
      <Skills />
      <LetsTalk />
      <Marquee />

    </div>
  );
}

export default App;

