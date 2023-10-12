import "./App.css";
import Navbar from "./components/Navbar";
import CrystalBall from "./components/CrystalBall";
import projects from "./data/projects.json";
import ProjectItem from "./components/ProjectItem";
import ContactForm from "./components/ContactForm";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="about">
          <CrystalBall
            style={{
              height: "32rem",
              width: "auto",
              overflow: "visible",
              padding: "2.5rem 5rem 0 5rem",
            }}
          />
          <div>
            <h2>About</h2>
            <p>
              I&apos;m <span className="highlight">Christina K. Boyt</span>, a
              front-end web developer with extensive graphic design and digital
              media experience. In addition to my BFA in graphic design, I have
              received a certificate in Full Stack Web Development from Georgia
              Tech. My combination of formal education and self-teaching has
              given me the ability to both design and code websites and apps
              completely from scratch. In particular, I am very comfortable
              creating custom CSS, though I am also experienced with using
              frameworks, especially Tailwind, on collaborative projects.
            </p>
            <p>
              If you&apos;d like to add my unique designer-developer skillset to
              your team, please reach out to{" "}
              <a href="mailto:me@ckboyt.com">me@ckboyt.com</a> or via{" "}
              <a
                href="https://www.linkedin.com/in/ckboyt/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              ! I am open to both volunteer work for open source projects as
              well as paid opportunities.
            </p>
          </div>
        </section>
        <section id="work">
          <h2>Work</h2>
          <div id="proj-grid">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                img={project.img}
                live={project.live}
                gitHub={project.github}
                name={project.name}
                langs={project.langs}
              />
            ))}
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <ContactForm />
        </section>
      </main>
      <footer>Footer</footer>
      {/* <div>
        <CrystalBall
          className="logo"
          style={{
            height: "40rem",
            width: "auto",
            overflow: "visible",
            paddingTop: "5rem",
          }}
        />
      </div>
      <h1>I see a bright future ahead...</h1>
      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Until then: <FaGithub style={{ fill: "rgb(var(--accent)" }} />{" "}
          <a
            href="https://github.com/CKBoytGT"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          | <FaLinkedin style={{ fill: "rgb(var(--accent)" }} />{" "}
          <a
            href="https://www.linkedin.com/in/ckboyt/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div> */}
    </>
  );
}

export default App;
