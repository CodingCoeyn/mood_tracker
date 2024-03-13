# Mood Tracker

## Stack
Frontend: React, D3.js, Bootstrap <br>
Server: Express, Node <br>
Database: PostgresQL <br>
ORM: Sequelize

## Project Description
This mood tracker will record and graph the user's mood over time. Te goal is to track and anticipate changes in mood. React & Bootstrap are our frontend frameworks and D3.js will do the calculations for our graph. Serverside we have Express.js and Node.js. We'll be using PostgresQl as our database and Sequelize to feed in our starting data.

## How to Install and Run the Project
[Node](https://nodejs.org/en/download/)<br>
[Express](https://expressjs.com/) npm install express --save<br>
[PostgresQL](https://www.postgresql.org/download/) npm install --save pg pg-hstore<br>
[Sequelize](https://sequelize.org/docs/v6/getting-started/) npm install --save sequelize<br>

## How to Use the Project
This program will be a single page that consists of a graph and an area for user input.

The user will click the ADD button to record their mood and condition. Your mood is how you feel right now and your condition how you feel *overall*. You might be in the midst of a depressive episode and want to take note of a happy moment - 3/13/2024 4:00pm | Mood: Happy | Condition: Spiraling.

The user types in their mood and selects their condition from a dropdown.

The graph is plotted based on the user's condition. Each condition has an integer value - 3, 2, 1,...,-3 - that determine's where it falls on the graphs y-axis. The x-axis is time in months.

<div style="display: none;">
## Credit

<p style="color:orangered;" >Ask about this part</p>
</div>

## License
[GNU GENERAL PUBLIC LICENSE](LICENSE)
