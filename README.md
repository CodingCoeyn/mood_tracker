# Mood Tracker

## Stack
Frontend: React, D3.js, Bootstrap <br>
Server: Express, Node <br>
Database: PostgresQL <br>
ORM: Sequelize

## Project Description
This mood tracker will record and graph the user's mood over time. The goal is to track and anticipate changes in mood. React & Bootstrap are our frontend frameworks and D3.js will do the calculations for our graph. Serverside we have Express.js and Node.js. We'll be using Postgres as our database and Sequelize to feed in our starting data.

## How to Install and Run the Project

### How to install
[Node](https://nodejs.org/en/download/)<br>
[Express](https://expressjs.com/) npm install express --save<br>
[PostgresQL](https://www.postgresql.org/download/) npm install --save pg pg-hstore<br>
[Sequelize](https://sequelize.org/docs/v6/getting-started/) npm install --save sequelize<br>

### How to run


## How to Use the Project
The Mood Tracker is a dashboard that consists of a graph and an area for user input.

The user will use the dashboard to record their mood and condition. Your mood is how you feel and your condition is how you're feeling on a scale of “Great” to “Spiraling”. You might be in the midst of a depressive episode and want to take note of a happy moment - 3/13/2024 4:00pm | Mood: Happy | Condition: Spiraling, or you're feeling sad but would rate it as "Blah" instead of "Unwell".

The user will click the Add button and a modal will appear with inputs for Mood and Condition. The user types in their mood and selects their condition from a dropdown.

The graph is plotted based on the user's condition. Each condition has an integer value - Great = 3, Good = 2, Fine = 1, Okay = 0, Blah = -1, Unwell = -2, Spiraling =-3 - that determines where it falls on the graph's y-axis. The x-axis is time in months.

Records can be read, added, edited and deleted all from the dashboard. Removing a record from the list, removes it from the graph.

## License
[GNU GENERAL PUBLIC LICENSE](LICENSE)
