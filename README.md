# Dobble

### Summary
Dobble (also known as Spot It!) is a popular family card game.
It is a simple pattern recognition game where the players try to find matching symbols on two different cards.
For this project, the aim was to make a browser adaption of the game as part of a small team. This is the result. 
We undertook this project with a deadline of 1 week to use for our JavaScript group projects for our studies at CodeClan.

Credit also goes to @T-Nawrocki, @helenakolberg & @rud-y

### Technologies
#### Front-end
* Vue
* JavaScript
* CSS(Vanilla)
#### Back-end
* Express.js
* JavaScript/Node.js
* MongoDB

### How To Run
To run this app on your local machine:
* Clone this repository.
* Have Node.js installed, then use NPM to install MongoDB and Vue (npm install vue)(npm install mongodb) in the command line.
* In the 'server' folder, run 'npm i' (or npm install) in the command line, repeat this process in the 'client' folder, This should install the needed dependancies locally.
* In the 'server' folder, run 'npm start' in the command line, this should start the back-end server.
* In the 'client' folder, run 'npm run serve' in the command line.
* Now open up your internet browser and go to address 'localhost:port number', the standard port that vue uses for the client-side is 8080.
* Now it should be running!

### Screenshots
#### Main Menu
![Main Menu](/screenshots/main_menu.png)
The user is greeted with this simple main menu screen with a couple of options in the apps current state.
The user can start a new game, view the high score page or view the tutorial page.

#### Tutorial
![Tutorial](/screenshots/tutorial.png)
This is the tutorial page which the user can view to learn how the game works.

#### Game Board
![Game Board](/screenshots/game_board.png)
This is the game board screen that appears after the user starts a new game. It is composed of a simple UI which displays the current score, the time remaining and the two cards themselves that the user will interact with. There is also a Main Menu button if the user wants to quit the game for any reason.

#### Game Over
![Game Over](/screenshots/game_over.png)
This is the game over screen that appears once the time runs out during a game. It displays the users final score and an option to type their name and save their score. The user can then restart the game again, go back to the main menu, or view the high score page.

#### High Scores
![High Scores](/screenshots/high_scores.png)
The high scores page is exactly that. It displays all the users stored high scores with the option to reset them if desired. Here we can see some of the scores on my local version of the game from the testing team(a.k.a other devs, family & friends)!
