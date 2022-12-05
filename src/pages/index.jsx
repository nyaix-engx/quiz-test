import { useState } from "react";
import ReviewAnswers from "@components/ReviewAnswers";
import MainScreen from "@components/MainScreen";
import ResultScreen from "@components/ResultScreen";

import styles from "@styles/pages/_index.module.scss";

const data = [
  {
    q: "In which Italian city can you find the Colosseum?",
    a: "Rome",
    o: ["Venice", "Naples", "Rome", "Milan"],
  },
  {
    q: "In the TV show New Girl, which actress plays Jessica Day?",
    a: "Zooey Deschanel",
    o: [
      "Kaley Cuoco",
      "Zooey Deschanel",
      "Jennifer Aniston",
      "Alyson Hannigan",
    ],
  },
  {
    q: "What is the largest canyon in the world?",
    a: "Grand Canyon, USA",
    o: [
      "Verdon Gorge, France",
      "King’s Canyon, Australia",
      "Fjaðrárgljúfur Canyon, Iceland",
      "Grand Canyon, USA",
    ],
  },
  {
    q: "How long is the border between the United States and Canada?",
    a: "5,525 miles",
    o: ["3,525 miles", "4,525 miles", "5,525 miles", "6,525 miles"],
  },
  {
    q: "What is the largest active volcano in the world?",
    a: "Mouna Loa",
    o: ["Mount Etna", "Mount Vesuvius", "Mouna Loa", "Mount Batur"],
  },
  {
    q: "When did Lenin die?",
    a: "21 January 1924",
    o: [
      "21 January 1924",
      "21 January 1934",
      "21 January 1944",
      "21 January 1954",
    ],
  },
  {
    q: "In which US state did the ​​Scopes Monkey Trial happen?",
    a: "Tennessee",
    o: ["Maryland", "Tennessee", "South Dakota", "Indiana"],
  },
  {
    q: "When was the book “To Kill a Mockingbird” by Harper Lee published?",
    a: "1960",
    o: ["1950", "1970", "1980", "1960"],
  },
  {
    q: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
    a: "Le Louvre",
    o: [
      "Uffizi Museum",
      "British Museum",
      "Le Louvre",
      "Metropolitan Museum of Art",
    ],
  },
  {
    q: "In which city can you find the Prado Museum?",
    a: "Madrid",
    o: ["Buenos Aires", "Barcelona", "Santiago", "Madrid"],
  },
];

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [endTest, setEndTest] = useState(false);

  return (
    <div className={styles.container}>
      {!endTest ? (
        <>
          <ReviewAnswers answeredQuestions={answeredQuestions} />
          <MainScreen
            totalQuestions={data}
            currentQuestion={currentQuestion}
            answeredQuestions={answeredQuestions}
            setAnsweredQuestions={setAnsweredQuestions}
            setCurrentQuestion={setCurrentQuestion}
            setEndTest={setEndTest}
          />
        </>
      ) : (
        <ResultScreen
          answeredQuestions={answeredQuestions}
          totalQuestions={data}
        />
      )}
    </div>
  );
};

export default Home;
