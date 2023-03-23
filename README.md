# blog-post-front-end

To begin working on the backend side of a project, follow these steps:

* go to a directory where you want to save the Project and run these commands :

  ````
  mkdir BlogPost
  cd BlogPost
  git clone git@github.com:Blog-Post-Group-1/blog-post-front-end.git
  cd blog-post-front-end
  ````

* run these commands to install librarys :

  ````
  npm install @mui/material @emotion/react @emotion/styled
  npm install react-bootstrap bootstrap
  npm install react-router-dom@6
  npm install @auth0/auth0-react

  incase you face issues with .env

  npm install dotenv
  ````

* Create a .env file in the root directory run this commands

  ````
  touch .env
  ````

* add this to .env file

  ````
  REACT_APP_AUTH0_DOMAIN=dev-bndosol1eh368202.eu.auth0.com
  REACT_APP_AUTH0_CLIENT_ID=9LkXcNOYLMjZKMrPAXbkFyn8KJtiakAo
  ````

* start the server

  ````
   npm start
  ````

* Test The Routes

  ````
  http://localhost:3006/
  ````