import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der JSON Datei.

  //Aufgabe 1
  console.log("Aufgabe 1:");
  console.log(data[data.length - 1]);
  const letzterUnfall = data[data.length - 1];
  const letzterUnfallInfos = `${letzterUnfall.id_unfall} : ${letzterUnfall.schwere}`;

  //Aufgabe 2
  console.log("Aufgabe 2:");
  const unfaelleNebenstrassen = unfaelle.filter(
    (unfall) => unfall.strasseart === "Nebenstrasse",
  );
  console.log(unfaelleNebenstrassen);

  //Aufgabe 3
  console.log("Aufgabe 3:");
  const unfallNov2015 = unfaelle.find(
    (unfall) =>
      unfall.jahr === "2015" &&
      unfall.monat === 11 &&
      unfall.fahrrd_bet === true,
  );
  console.log(unfallNov2015);

  //Aufgabe 4

  return (
    <div className="App">
      <div>{letzterUnfallInfos}</div>
      <ol>
        {unfaelle.map((unfall) => (
          <li>{unfall.id_unfall}</li>
        ))}
      </ol>
    </div>
  );
}
