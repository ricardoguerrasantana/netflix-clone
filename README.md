# Netflix-Clone

This is a purely demonstrative web app built with React UI and Firebase backend, emulating the well-designed Netflix.com web app UI.

## Technologies
This app implements technologies like "styled-components" for UI styling, "prop-types" for static checking of props, "react-router-dom" for handling routes and "fuse.js" for lightweight fuzzy search. 

## Patterns
As best practices, this app follows React patterns such as separating presentational components from display components and component composition. It also implements PropTypes checking and "eslint-plugin-react" rules.

## React Tools
The entire app is built with functional components, hooks, and custom hooks. State is managed with the Context mechanism and useContext hook.

The higher-order component React.memo is used for rendering container components, not because it's needed in every case, but to prepare them to be used by larger applications, specifically those components called "generics" which were built to be highly reusable and scalable.

It was not necessary to implement mechanisms like useMemo and useCallback because there are no expensive calculations to memorize between renderings, and the use of the "eslint-plugin-react" rules avoids the need to use useCallback in this application.

## Material Source
Material and guidance were provided by Karl Hadwen at https://www.youtube.com/watch?v=x_EEwGe-a9o, however, this app uses a different approach to how to structure it.

Thanks Karl for spreading knowledge.

##

# Browse
![browse](https://user-images.githubusercontent.com/67863886/122634071-7e6a0200-d11f-11eb-9c0f-855c55978c62.png)

# Home
![home](https://user-images.githubusercontent.com/67863886/122634096-993c7680-d11f-11eb-9fdc-1fe9c43e5235.png)

# Sign In
![sing-in](https://user-images.githubusercontent.com/67863886/122634100-a8232900-d11f-11eb-87ab-a3e1f8d5a0af.png)

# Sign Up
![sign-up](https://user-images.githubusercontent.com/67863886/122634114-bb35f900-d11f-11eb-8877-695643d2c313.png)

# Profiles
![profiles](https://user-images.githubusercontent.com/67863886/122634123-c5f08e00-d11f-11eb-9bb9-fc306ee9db6c.png)

# Loading
![loading](https://user-images.githubusercontent.com/67863886/122634130-d0128c80-d11f-11eb-9688-a4dc63405625.png)
