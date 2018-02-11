# AmaFlow - A mini stackoverflow-like application

## Installation

### Database

Launch an instance of mongoDB by executing `mongod` in a terminal
*Note1: the command must be executed on the same disk a the one on which the app will be launched*
*Note2: a folder data/db must exists at the root of the disk on which the command is executed*

### App

Launch the app by executing `npm start` in a terminal at the root of the project.
This will install all the required dependencies and start a local server on port 3000.

You can now access the application at [http://localhost:3000](http://localhost:3000).


## Missing features

* The global search in the navbar is not yet implemented
* The vote system is not yet implemented
* The fake login is not yet implemented (all question/answer are created by *author*)
* The answer deletion is not yet implemented