# Rebel Pomodoro
Web base countdown timer.

## Functions
### Operational functions include:
+ Setting break intervals
+ Setting session intervals
+ Counting down break and session iterations
+ Start and pause timer
+ Clear and reset timer

## Display
The display component is located in the central unit of the timer. It
contains the the break and session length values, which are update from 
the set increase and dercrease components. The countdown timer value is 
updated and displayed at the center of the display component. The timer 
value is display in a mm:ss format. There is also the session length 
label, the break length label and the timer interval label within the display.

## Funtionality
+ The Rebel Pomodoro can be operated by the click of the Mouse or by the Tab button.
+ Break length is increased by clicking the left up arrow ⮝.
+ Break length is decreased by clicking the left down arrow ⮟.
+ Session length is increased by clicking the right up arrow ⮝.
+ Session length is decreased by clicking the right down arrow ⮟.
+ Press play button ▶️ to start the timer.
+ Press pause button ⏸️ to stop or pause the timer.
+ Press the reset button 🔄 to reset / initialize the timer values.
+ Maximum length for break and session is 60 minutes.
+ Minimum length for break and session is 1 minute.
+ An alarm is sounded when the timer reaches 00:00 for each iteration.

## Implementation
The following languages, framework and libraries were used in the creation:
+ Html5
+ Css3
  + Grid box (for layout and responsiveness)
+ JavaScript ES6
+ React
+ [create-react-app](https://github.com/facebook/create-react-app)

## Screenshot
![Rebel Pomodoro Screenshot](./public/clock.png)

## Credit
+ created by [Nial Hope](https://github.com/nhope123)
  + [Portfolio](https://nhope123.github.io/)

## Acknowledgement
+ Thanks to [Freecodecamp.org](https://www.freecodecamp.org/) for the project idea.
+ Thanks to [orangefreesounds](http://www.orangefreesounds.com/) for the sample track.

## License
+ Calculator is an open source software licensed as [GNU General Public License v3.0](LICENSE)
+ The sound effect is licensed under [Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](./public/Read.txt)
