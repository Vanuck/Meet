import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { render, within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";
const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When the user hasn’t specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("a user has not specified the number of events", () => {
      AppComponent = render(<App />);
    });

    when("the user views the events section", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then(/^(\d+) events are shown by default$/, (arg0) => {
      expect(eventList.length).toEqual(32);
    });
  });

  test("When the user specifies the number of events.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("a user has specified the number of events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("the user views the events section", async () => {
      const button = AppComponent.queryByTestId("numberOfEventsInput");

      await userEvent.type(button, "{backspace}{backspace}10");
    });

    then(
      "the app displays exactly as many events as the user specified",
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList.length).toEqual(10);
      }
    );
  });
});
