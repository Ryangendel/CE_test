### 1. Students Do -> 01-numberCount-Unsolved (10 minutes)
    
    *   Create an app using only useState in a funcitonal component that will allow a user to press on a button which will add one to a total count in state. 

    *   First create a button that can be clicked and set a method to handle the click. Once the button is working change the state of the functional component to keep track of how many times the button has been pushed. 

    *   Set a display in the DOM to show the number of times the button as been pushed which updates everytime someone clicks on it. 


### 2. Instructor Review -> 01-numberCount-Solved: (10 minutes)

*  Since students are now comfortable using Classes, onClicks, styling, and the foundations of React, we are now going to intoduce students to React hooks. Up until now we have only used class based components to manage state but this is the introduction being able to use state within functional components.

    *   This activity will provide the most important concepts of working with the useState hook, how to both give a state to a function and how to manipulate it. 

    *   Make sure highlight that when using the useState it is necessary to put it equal to a variable. This is because the useState returns an array of two items: 1. the data that is in the state (can be of any datatype) and 2. the function in which to call to change the state. 
 
    *   Point out the fact that we can use only one variable and keep putting an indicie appended to the variable name to both get the information from the state ([0]) and a callback function([1]) to set the state a different time. However it is easier to keep track of both of these by dynamically storing variables returned from useState and setting them equal to a name that is indicative of what each of them are and do, like `usersInput` and `setState` looks like: 
    
    ```
        const [usersInput, setState] = useState({
        userGuess: 0,
        randomRoll: "https://i.imgur.com/lbswV46.png"
        })
    
    *This syntax will come in handy when there are multiple states that are being tracked. Feel free to show students how it would work in this example. 
    
    ```

    *  Go ove the code in `srcAddOne`, and make sure to point out that the inputState is == 0 and to retrieve that value all you need to do is inputState[0]. However to change the state the code needs to reference inputState[1]() becasue this is the function that is required to run when changing the value of state. 

    *   In this example, the onClick fires off the inputState[1]() function that will change the values, and when its fired off the code needs to pass in the  value of what the code should be set to. Which is why we are getting the value of the previous state then adding one to it and setting the state to that value. 

    *   Make sure to do plenty of console logs in order for students to see the flow of information. 

### 3. Students do 02-guessDiceRoll-Unsolved (15 minutes)
    
    * Make a game that will take user's input and compare it to a randomally generated roll a of a dice. 

    * Compare the user's guess and the randomly generated computer choice, and if the user guessed the correct number alert them that they have won. 

    * There are guides in the starter code as to how to manage the state by only using the useState hooks. 

### 4. Instructor Review -> 02-guessDiceRoll-Solved: (10 minutes)

*   This exercise is a bit like the last one in terms of only using the useState hook. Here we are adding a bit of complexity in the form of using an object as the state, using two variables as highlighed above, preforming a little logic to create a game, and render a picture based on what number the dice was randomly generated on.    
    
    *   The most important parts of this exercise are showing students how to change state using the function returned from useState and that the entire state will be overwritten when using the create state function. This is the main difference between class based state and state in a function. In function based state management the state will be overwritten to whatever you declare will be there, in class based state management only the items that are specified while using setState will be changed. This is highlighted on line 53 and 60 of the srcDiceGuess activity. 

    *    Let students know that retrieving information from the state is different using hooks then the tradional way of doing so. If the useState has an object inside it, all you need to do is use dot notation on the variable that contains the state and specify which key you want to get the value of. Using the hook: 

    ```
    `const [inputState, setState] = useState({
    userGuess: 0,
    randomRoll: "https://i.imgur.com/lbswV46.png"
    })`
    ```

    the user can get the value of userGuess by `inputState.userGuess` and same thing with randomRoll. 

    *   Make sure to go over just exactly how we are getting the picture of the dice to show up, this is on line 82. 

### 5. Students do 03-Craps-Unsolved (15 minutes)
    
    *   Welcome to Vegas. We are going to be making a craps game using hooks. There are two hooks youre going to need: 1.useState 2. useEffect.

    *   The rules of this craps game is if the player has two dice and they roll both to kick everything off. On the first roll of both of the dice, if both die add up to either 2, 3, or 7, they win automatically. If that doesn't happen they are stuck with the number that they rolled. For every subsequent roll, they can either win, loose, or keep rolling. To win they need to roll what number they rolled on their first roll, or they loose if they roll a 2, 3, or 12 on their rolls subsequent to the first. If they roll anything that doesnt match any of those numbers they roll again.

    *   Make a game that will take user's input and compare it to a randomally generated number between 1-6 for two dice. 

    *   Have them roll both dice for every turn that they have until they either win or lose. 

    *   Allow users to type in their name with how much money they have. 

    *   There is a lot of starter code so you need to make sure to manage the state well using the code provided.    


### 6. Instructor Review 03-Craps-Solved (15 minutes)

*   This is taking the guessing dice roll to the next level, we are adding more complex logic, dealing with multiple states, a new hook (`useEffect`), and deconstruction to maintain the current state while updating only a few other states of the functional component. 
    
    *   As long as students have a good foundation for React and how to work with forms a lot of this will be review. Even if it is make sure to hit on the points of when we use `useState` we get back two items in an array, the first is the state which was set and the second is a callback function to reset the state.          

    * The new hook that we are using is `useEffect` and this works on completely differnt parameters than `useState`. **important** `useEffect` is similar to lifecycle methods in classes in the way that they are fired off. In the first argument you specify what function you would like to run, the second is an optional listener that is put in []. When there is data in the brackets that function will ONLY be fired off when the state of that specific item is changed. If it is left empty it will fire off anytime some state is changed. These are very powerful and can be liberally used. An example is used on lines 77-85.  

    *  **important** Remind students that when they set the state all key value pairs need to be included because when you call the set state function using hooks it replaces everything in the state, not just one thing. So when we are setting the state with only one thing changed we need to have the rest of the state that was previously there. To do that we use deconstruction of the previous state. This is illustrated on line 64, 68, 109, and 114. 

    *   Notice how we have two event handlers when the user's input field is submitted. One sets the state of user to use the information to run other logic in it and the other allows us to be able to clear out the form. 
  
    *   Point out how in the solution we are modularizing the functions so that we can check to see what someone has rolled and create the ways to handle each roll. 

     