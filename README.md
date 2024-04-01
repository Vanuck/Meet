**Meet App**

**Objective**
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

**Context**
Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to be the future of web development. By combining these two concepts, your app will not only work as a normal web application, but it will also reap the benefits of both serverless architecture and PWAs:

● Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.
● PWAs:Instantloading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.

**Key Features**
● Filter Events by City.
● Show/Hide Event Details.
● Specify Number of Events.
● Use the App When Offline.
● Add an AppShortcut to the Home Screen.
● Display Charts Visualizing Event Details.
**Features Defined**

**1: Filter Events by City**

Scenario: When on home screen User can filter events by specific city

Given the user is on the Meet App Home screen
When the "Filter" option is selected and a city is chosen
Then the Meet App will display events from that selected city.

**2: Show/Hide Event Details**

Scenario: User sees event details

Given the user is seeing the list of events
When the users selects a specific event
Then the Meet App will display details of that specific event.

**3: Specify number of Events**

Scenario: User may select the numbner of events to see

Given the User is on the Meet App home screen
When the user selects the numebr of events to see
Then the Meet App will show only that number of events

**4: Use the Meet App when Offline**

Scenario: User should have the ability to use the Meet App when offline or in poor service areas

Given the user has used the Meet App while online previously
When the user opens the Meet App without internet access
Then the Meet App will display previoulsy cached data.

**5: Add an App Shortcut to the Home Screen**

Scenario: User should have ability to install a Meet App shortcut on thier home screen.

Given the Meet App is installed on users device
When the user chooses to add the Meet App to thier home screen
Then the Meet App will create a shortcut for easy access to the Meet App.

**6: Display Charts Visualizing Event Details**

Scenario: Select a chart to show the number of events in a specific city

Given the Meet App is open
When the user selects the "Charts" option
Then the Meet App will show the number of upcoming events in that city via a chart.

**Using serverless functions:**

This Meet App will use serverless functions that will be responsible for securely managing user access, obtaining and refreshing OAuth2 tokens, and ensuring the security of interactions between your React application and the Google Calendar API. The serverless architecture offers benefits such as easy scalability, efficient resource utilization, and cost-effectiveness, as you only pay for the actual execution of functions rather than maintaining a dedicated server infrastructure. AWS Lambda will be the chosen cloud-service provider for implementing these serverless functions, making the app's architecture more scalable and cost-effective.
