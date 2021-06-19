# netflix-clone

This is a web application built with React IU and Firebase backend. 

## Technologies
It implements technologies like "styled-components" for UI styling, "prop-types" for static checking of props, "react-router-dom" for handling routes and "fuse.js" for lightweight fuzzy search. 

## Patterns
As best practices this app follows React patterns such as separating presentational components from display components and component composition. It also implements PropTypes checking and "eslint-plugin-react" rules.

## React Tools
The entire app is built with functional components, hooks and custom hooks.  
State is managed with Context mechanism and useContext hook. 
Higher order component Rect.memo is used for rendering container components not because is needed in every case but to prepare them to be used by larger applications, specially those components called "generics" wich were built to be highly reusable and scalable.
Mechanisms as useMemo and useCallback hooks were not needed to be implemented due there is not expensive caculations to memoize between renders and the use of "eslint-plugin-react" rules avoids need to using useCallback in this app.

## Material Source
Material and guiedance were provided by Karl Hadwen at https://www.youtube.com/watch?v=x_EEwGe-a9o, however this app uses a different approach regarding the way of structuring it.
Thanks Karl for spreading knowledge.

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
