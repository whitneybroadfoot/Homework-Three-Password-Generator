# Welcome!

![image of numbers](https://user-images.githubusercontent.com/55456375/70283065-19d59500-177d-11ea-9e50-03a5d752dc79.png)

## Assignment Overview
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.
The user will be prompted to choose from the following password criteria:

Length (must be between 8 and 128 characters)
Character type:
Special characters (see examples)
Numeric characters
Lowercase characters
Uppercase characters

The application should validate user input and ensure that at least one character type is selected.
Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
As a bonus, the user should also have the option to click a button to copy the password to their clipboard.
Your application should have a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.
Your application should be deployed to GitHub Pages.
Your application's GitHub repository should contain a README.md file explaining the purpose and functionality of the application. The README.md file should include a screenshot of the completed application as well as a link to the deployed GitHub Pages URL.


## User Story
AS AN employee with access to sensitive data I WANT to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security

## Business Context
For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data.

## Acceptance Criteria
GIVEN that a user needs a new, secure password
WHEN prompted for password criteria
THEN a password is generated


Commit Early and Often
One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:
* Your commit history is a signal to employers that you are actively working on projects and learning new skills.
* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.


## Follow these guidelines for committing:
Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.
Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.
Don't commit half-done work, for the sake of your collaborators (and your future self!).
Test your application before you commit to ensure functionality at every step in the development process.
We would like you to have well over 200 commits by graduation, so commit early and often!




In this specific example we are using 
- functions, 
- arrays, 
- Math.random() (and everything that comes with it!!!)
- eventListeners
​
​
Step 1: 
1. create an array of lowerCase characters
2. create an array of upperCase characters
3. create an array of numbers
4. create an array of special characters
​
Step 2: 
1. create a function that asks the user about the specifics of the password:
    -length
    -lowerCase characters
    -upperCase characters
    -numbers
    -special characters
    Save each of these specifications in a variable. Now we know password specifics!
  
2. once we know the password's specifics, we can now create another variable
    that will include ALL the characters that the user wants to include. For example, 
    if the user wants to include numbers and special characters only, this new variable will have ONLY 
    numbers and special characters. Where are these coming from? --See Step 1.
​
Step 3:
1. create another function that will take two parameters (length and specifiedCharacters), 
    and inside this function create a new variable and assign an empty array to it. 
    This new variable will hold your generated password. 
    
2. this function will also include your loop and push a randomly selected 
    character from specifiedCharacters into a new variable that you just created. So, how many time does this loop run?
​
3. make sure to return the variable after the loop, but still inside the function. This variable may not come in the format you want. 
    You may want to google .join() method. Use it on this variable. 
    Notice how we return a variable from this function!!!
    This means that when we execute/invoke this function, we can assign the returned value of this function to a variable. 
​
Step 4:
1. go back to your first function from Step 2, and inside it execute the function from Step 3 while passing 
    two parameters (length and specifiedCharacters). Create a new variable; assign the returned value of the function to this variable. 
​
2. now, take this variable and display it in a div or p tag.
​
Step 5: 
1. target your button from html and add an click event listener to it, and execute/invoke the function from Step 1. 
​
!!! ***CONSOLE.LOG() often to see what you are working with*** !!!
!!! if it's not working, open CONSOLE and see the error !!!
​
This is your MVP: minimum viable product!
​
On your own, take it a step further to validate the user's responses: certain length and at least one response should be true. 
