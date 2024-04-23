import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";

import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningError] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningError("");
    } else {
      // set the warning alert message to a non-empty string
      setWarningError("You are gone offline, events are loaded from cache!");
    }
    fetchData();
    // eslint-disable-next-line no-use-before-define
  }, [currentCity, currentNOE, fetchData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
      </div>
      <div className="alerts-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <div className="alerts-container">
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>

      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />

      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />

      <EventList events={events} />
    </div>
  );
};

export default App;
