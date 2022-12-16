# 💡 Challenge: Lightbulb

As a developer, you are tasked with creating a light switch application. The application will display an image of a lightbulb and its corresponding switch. When the user clicks the switch the images will toggle between a light switch and corresponding bulb that are "off" and a light switch and corresponding bulb that are "on".

### ▶️ Getting Started

- clone repository to your desktop
- cd into the repository
- add dependencies $ `yarn`
- fire up the server $ `yarn start`
- stops the server `control + c`
- opens a new terminal tab `control + t`
- read up on [importing and displaying images in a React component](https://bobbyhadz.com/blog/react-import-image)

### 📚 User Stories

As a developer, it is important to break a problem down into small, manageable steps. Often this will include creating code that will eventually be replaced by different code as your application grows and your logic evolves.

When creating an application it is important to think about the organization of your code. It is best practice to compartmentalize all the actions in your code by separating logic and display components. `App.js` should be in control of all the top level logic, rendering other components, and passing data to other components.

**Branch**: setup-on-off

- As a user, I can see a square box on the screen with a black border and a white background.
- As a user, I can see the word "off" inside the box.
- As a user, every time I click on the box the word toggles between the word "off" and the word "on."
- As a user, when I see the word "off" the background color of the box is white.
- As a user, when I see the word "on" the background color of the box is yellow.
- As a user, I can see many boxes on the page all acting independently of one another.

**Branch**: add-images

- As a user, instead of seeing a box I can see a picture of a light switch in the "off" position.
- As a user, when I click on the light switch it turns "on".
- As a user, when the light switch is "off" I see a white light bulb.
- As a user, when I turn the switch "on" I see a yellow light bulb.

### 🏔 Stretch Goals

**Branch**: additional-switches

- As a user, I can start with no light bulbs or switches on the screen.
- As a user, I can see a button to add a light bulb and corresponding switch.
- As a user, I can see a button to remove a light bulb and corresponding switch.
- As a user, every time I click the add button, I can add an additional light bulb and corresponding switch that acts independently of the other light bulbs and corresponding switches.
- As a user, every time I click the remove button, I can remove the last light bulb and corresponding switch in the series.

### 🗂 Assets

It is a best practice to keep all images in folder called assets. The assets folder will be inside the `src` folder. The images below can be used for the application or you can find your own images to add to the assets folder.

- [Switch On](./assets/switchOn.png)
- [Switch Off](./assets/switchOff.png)
- [Light On](./assets/lightOn.png)
- [Light Off](./assets/lightOff.png)
