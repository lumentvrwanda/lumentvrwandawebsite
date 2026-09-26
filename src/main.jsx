import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu,
  X,
  Play,
  Radio,
  ArrowRight,
  Church,
  Send,
  Mail,
  Youtube,
  Facebook,
  Instagram
} from "lucide-react";
import "./styles.css";

const videos = [
  {
    title: "Igitambo cya Misa",
    category: "MISA",
    image:
      "https://images.unsplash.com/photo-1548625361-ec5c2c6c2e1c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Amakuru ya Kiliziya Gatolika",
    category: "AMAKURU",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Ibiganiro bya Lumen TV Rwanda",
    category: "IKIGANIRO",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Ubuzima bw'Abatagatifu",
    category: "DOCUMENTAIRE",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=900&q=80"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("home");

  const navigate = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => navigate("home")}>
            <span className="brandMark">✦</span>

            <span>
              <b>Lumen TV</b>
              <small>RWANDA</small>
            </span>
          </button>

          <button
            className="mobileMenu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "navLinks open" : "navLinks"}>
            <button onClick={() => navigate("home")}>Ahabanza</button>
            <button onClick={() => navigate("live")}>Live TV</button>
            <button onClick={() => navigate("news")}>Amakuru</button>
            <button onClick={() => navigate("videos")}>Videos</button>
            <button onClick={() => navigate("about")}>Turi bande?</button>
            <button
              className="navCta"
              onClick={() => navigate("contact")}
            >
              Twandikire
            </button>
          </nav>
        </div>
      </header>

      {page === "home" && <Home navigate={navigate} />}
      {page === "live" && <Live />}
      {page === "news" && <News />}
      {page === "videos" && <Videos />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}

      <Footer navigate={navigate} />
    </div>
  );
}

function Home({ navigate }) {
  return (
    <main>
      <section className="hero">
        <div className="heroOverlay"></div>

        <div className="container heroContent">
          <span className="eyebrow">
            <Radio size={16} />
            LUMEN TV RWANDA
          </span>

          <h1>
            Urumuri rw'ukuri,
            <br />
            <span>ijwi ry'icyizere.</span>
          </h1>

          <p>
            Amakuru, Igitambo cya Misa, ibiganiro,
            documentaire n'ubutumwa bwa Kiliziya Gatolika mu Rwanda.
          </p>

          <div className="heroActions">
            <button
              className="primary"
              onClick={() => navigate("live")}
            >
              <Play size={18} />
              Reba Live
            </button>

            <button
              className="secondary"
              onClick={() => navigate("videos")}
            >
              Reba Videos
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="kicker">LIVE NOW</span>
              <h2>Reba Lumen TV Live</h2>
            </div>

            <button
              className="textBtn"
              onClick={() => navigate("live")}
            >
              Fungura Live
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="liveCard">
            <div className="liveVisual">
              <div className="livePulse">LIVE</div>

              <Play size={52} />

              <p>Lumen TV Rwanda</p>
            </div>

            <div className="liveInfo">
              <span className="liveBadge">● LIVE</span>

              <h3>Livestream ya Lumen TV Rwanda</h3>

              <p>
                Kurikirana ibiganiro n'amasengesho
                bitambutswa ako kanya.
              </p>

              <button
                className="primary"
                onClick={() => navigate("live")}
              >
                Reba ubu
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="kicker">IBISHYA</span>
              <h2>Video zigezweho</h2>
            </div>

            <button
              className="textBtn"
              onClick={() => navigate("videos")}
            >
              Zose
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="cards">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                video={video}
                navigate={navigate}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container missionInner">
          <Church size={42} />

          <div>
            <span className="kicker">INTEGO</span>

            <h2>Kuba urumuri mu itangazamakuru.</h2>

            <p>
              Dushaka gutanga amakuru yizewe no guteza imbere
              indangagaciro za Gikristu binyuze mu itangazamakuru.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function VideoCard({ video, navigate }) {
  return (
    <article
      className="videoCard"
      onClick={() => navigate("videos")}
    >
      <div className="thumb">
        <img src={video.image} alt={video.title} />

        <span>
          <Play size={16} />
        </span>
      </div>

      <small>{video.category}</small>

      <h3>{video.title}</h3>
    </article>
  );
}

function Live() {
  return (
    <main className="page">
      <div className="container">
        <span className="kicker">LUMEN TV RWANDA</span>

        <h1>Live TV</h1>

        <p className="lead">
          Kurikirana livestream ya Lumen TV Rwanda.
        </p>

        <div className="player">
          <div>
            <Play size={64} />

            <h3>Lumen TV Rwanda Live</h3>

            <p>
              Aha ni ho tuzashyira YouTube Live embed
              ya Lumen TV Rwanda.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function News() {
  return (
    <main className="page">
      <div className="container">
        <span className="kicker">AMAKURU</span>

        <h1>Amakuru</h1>

        <p className="lead">
          Amakuru n'ibikorwa bya Kiliziya n'umuryango.
        </p>

        <div className="newsGrid">
          {videos.map((video, index) => (
            <article className="newsCard" key={index}>
              <img src={video.image} alt={video.title} />

              <div>
                <small>
                  26/09/2026 · Lumen TV Rwanda
                </small>

                <h3>{video.title}</h3>

                <p>
                  Inkuru n'amakuru agezweho bitangirwa
                  kuri Lumen TV Rwanda.
                </p>

                <button className="textBtn">
                  Soma byinshi
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

function Videos() {
  return (
    <main className="page">
      <div className="container">
        <span className="kicker">MEDIA</span>

        <h1>Videos</h1>

        <p className="lead">
          Reba ibiganiro, Misa, documentaire n'ibindi.
        </p>

        <div className="cards videoPageGrid">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              video={video}
              navigate={() => {}}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="page">
      <div className="container narrow">
        <span className="kicker">LUMEN TV RWANDA</span>

        <h1>Turi bande?</h1>

        <p className="lead">
          Lumen TV Rwanda ni urubuga rw'itangazamakuru
          rugamije kugeza ku Banyarwanda amakuru, ibiganiro,
          amasengesho n'ubutumwa bwa Kiliziya Gatolika.
        </p>

        <div className="infoBox">
          <Church />

          <h2>Inshingano yacu</h2>

          <p>
            Gukoresha itangazamakuru nk'igikoresho cyo kugeza
            ku bantu ukuri, icyizere, ukwemera n'indangagaciro nziza.
          </p>
        </div>
      </div>
    </main>
  );
}

function Contact() {
  const submitForm = (event) => {
    event.preventDefault();

    alert("Murakoze! Ubutumwa bwanyu bwakiriwe.");
  };

  return (
    <main className="page">
      <div className="container narrow">
        <span className="kicker">TUVUGISHE</span>

        <h1>Twandikire</h1>

        <p className="lead">
          Dufite igitekerezo, inkuru cyangwa ikibazo?
          Twandikire.
        </p>

        <form onSubmit={submitForm}>
          <label>
            Izina
            <input
              required
              placeholder="Andika izina"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              required
              placeholder="email@example.com"
            />
          </label>

          <label>
            Ubutumwa
            <textarea
              required
              rows="6"
              placeholder="Andika ubutumwa..."
            ></textarea>
          </label>

          <button className="primary" type="submit">
            <Send size={18} />
            Ohereza
          </button>
        </form>

        <div className="contactLine">
          <Mail size={20} />
          info@lumentvrwanda.rw
        </div>
      </div>
    </main>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="footerBrand">
            ✦ Lumen TV Rwanda
          </div>

          <p>
            Itangazamakuru ryubaka ukwemera,
            ukuri n'ubumwe.
          </p>
        </div>

        <div>
          <h4>Links</h4>

          <button onClick={() => navigate("live")}>
            Live TV
          </button>

          <button onClick={() => navigate("news")}>
            Amakuru
          </button>

          <button onClick={() => navigate("videos")}>
            Videos
          </button>
        </div>

        <div>
          <h4>Imbuga nkoranyambaga</h4>

          <div className="socials">
            <a
              href="https://youtube.com/@lumentvrwanda"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>

            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 Lumen TV Rwanda. All rights reserved.
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);
