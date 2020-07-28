# Recipe search app

Before starting this project, I had very limited knowledge about React. I wanted to go more in-depth with React and found that the MERN stack would be perfect since it would allow me to focus on Javascript. A 3rd party API (<https://www.edamam.com/>) was used to get the recipes.

Tech stack:

- MongoDB
- Express
- React
- NodeJs

## Backend

The backend was not the main focus of this project, I created a simple REST API. This API lets me communicate with the 3rd party API without revealing the API key to the public. It also lets me keep personal data about each user in a database.

### Database

I used mongoose for more simple interaction between javascript objects and the MongoDB database. I had to think about what information to store in my database. There was no need to store recipes in the database since they could be fetched from the 3rd party API. All I had to do was to store the list of users who would use the app. In the 'users' collection, I could store users' username, email, password(hashed), and their favourite recipes.

### Routes

The first API routes(/users & /auth) handle user registration and login. For registration, the server hashes the password with Bcrypt and stores the information in MongoDB. For login, the server hashes the received password and compares it with the one in the database, if it is a match, the login is successful. Once the user is logged in(verified), the server sends the frontend a JSON web token. The JSON web token would be required by the backend to access protected routes. The recipe route (/recipes) would handle all requests related to the recipes. The main route dealing with the 3rd party API would receive all request parameters and then return all corresponding recipes. other routes will handle posting, deleting, and getting the user's favourite recipes (stored in the database).

## Frontend

There was a lot of research I had to do for the frontend to make this a very easy to maintain and scalable application. The packages that I found were very useful were:

- react-router-dom
- Redux & redux-thunk
- styled-components

I used react-router-dom to easily switch between frontend views (search, favourites, recipe results).
I used Redux to maintain a global store and to persist state(recipes, auth token, etc) between the whole app.
I used Redux thunk to make async requests to the backend and to store the results in the Redux store.
I used styled-components for dynamic styling & a cleaner project structure.

### Redux

Redux is an essential part of the frontend, maintaining the most essential state. Redux was very useful in this project since it makes each component less cluttered. The Redux store would handle keeping track of important state and delivering the state to the components that need it. Without Redux, an application can get messy really fast since components would have to pass state to one another through props chains.

I kept the store separated into different reducers, one for the user information, one for the favourites, and one for the recipes. Errors are also stored in each corresponding reducer to be displayed when something goes wrong. by using Redux, I could access the state in all parts of the application, for example, both the navbar and favourites view needs to keep track of if the user is authenticated or not. Normally this would be very hard since the state would have to be passed through multiple components for these specific components to receive the correct information. With Redux, the components can just connect to the store and the authentication state.

The use of action creators also makes code more maintainable. Action creators can be kept in their corresponding files, and only components that need them will import them. These action creators are the only things that can change the Redux store, so all Redux queries are easy to debug. The action creators return actions to be dispatched, either synchronously or asynchronously with redux-thunk. By using redux-thunk, the frontend can send API requests to the backend and store the results in the Redux store.

### React Router

React router makes switching between the views of the application much easier. It conditionally renders React components based on the URL path. This allows the switching between views to be almost instantaneous instead of having to reload the page in traditional web apps.

### Styled Components

styled-components make styling in React much simpler. It allows CSS to be stored in Javascript. Since Javascript can be embedded within the styling, dynamic styling or conditional styling is made much easier. I made use of the ThemeProvider component in the package which allows a global object storing styles to be set. The global styles can then be accessed anywhere within the app, this keeps the styling of the app consistent and easy to manage or change.

### Forms

Forms are an essential part of this app since it is how users will make requests. Several different forms are used, the recipe search form, and the login/logout form. The logout/login forms are generated dynamically within the local state. This allows for better flexibility, modularity, and dynamic form-authentication. Doing this makes creating a new form very easy, you just need to create one javascript object and the new form field will be dynamically generated. The form authentication state is also stored within that object and is checked every time the user's input changes.

## Takeaways

This project was a very beneficial learning experience. There were many very useful things that I learned about React.

One of the most useful things I learned was the concept of container/component folder structure. All React related Javascript files will be stored in either the container or component folder. The containers will contain all of the state and logic of the view, and the components will be very modular and strictly presentational. Components should only take input in the form of props or children and then return a presentational view to be displayed. Containers should interact with node packages like Redux or react-router along with keeping local state.

Another useful thing I learned was the single responsibility principle. Every file should only be responsible for one thing; this allows the project to be easily maintained and clean. I found the importance of keeping code clean after I had to refactor the code in this project. Before, I would write code fast without thinking of the consequences in the future. When I had to refactor it, I sometimes got confused about the purpose of some code. After that, I refactored all my code with best practices that I had researched (keeping files short, using self-describing variable names, etc...).

I also learned more about various ways of styling React components. Originally, I would import global CSS files to style components but quickly found out that this was a bad idea. The global CSS classes would conflict with one another and this causes all CSS classes to have different names. To fix this, I found the styled-components library, which dynamically generates class names. This allows each component to have different styles that don't conflict. I now prefer styled-components since it provides an easier workflow.
