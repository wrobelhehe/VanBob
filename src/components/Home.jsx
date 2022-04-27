import React from "react";
import "./home.css";
import ad1 from "../assets/header.png";
import ad2 from "../assets/header.png";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="home__container">
          <div className="about">
            <h1 className="vanbob">Van Bob</h1>
            <h1>Hodowla rasowych świnek morskich CH Teddy</h1>
            <h2>O HODOWLI SŁÓW KILKA</h2>
            <h3>
              Hodowla zarejestrowana jest pod numerem CCP/212/2016 w Polskim
              Klubie Rasowych Świnek Morskich – Cavies Club of Poland (CCP),
              który jako jedyny w Polsce jest członkiem Europejskiego
              Stowarzyszenia Hodowców Drobiu, Gołębi, Ptaków Ozdobnych, Królików
              i Świnek Morskich – Entente Européenne (EE). Hodowla zajmuje się
              świnkami rasy CH Teddy (Swiss), a od 2020 roku również rasą self w
              umaszczeniu złotym (z różowym okiem, p.e.). Hodowla mieści się w
              Krakowie.
            </h3>
          </div>
          <div className="rewards-container">
            <h1>Nagrody</h1>
          <div className="rewards">
            <div className="reward-item">
              <a href="/">ZŁOTA HODOWLA 2020 ROKU</a>
              <h3>
                W 2020 roku hodowla Van Bob uzyskała tytuł Złotej Hodowli Cavies
                Club of Poland.
              </h3>
            </div>
            <div className="reward-item">
              <a href="/">ZŁOTA HODOWLA 2020 ROKU</a>
              <h3>
                W 2020 roku hodowla Van Bob uzyskała tytuł Złotej Hodowli Cavies
                Club of Poland.
              </h3>
            </div>
            <div className="reward-item">
              <a href="/">ZŁOTA HODOWLA 2020 ROKU</a>
              <h3>
                W 2020 roku hodowla Van Bob uzyskała tytuł Złotej Hodowli Cavies
                Club of Poland.
              </h3>
            </div>
          </div>
          <div className="ads">
            <div className="ads-item"></div>

            <div className="ads-item"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
