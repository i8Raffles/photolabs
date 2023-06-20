# Photolabs

Photolabs is a single page application for the purpose of viewing photos. The project was primarily created using React. Users are able to view photos on the page, filter those photos by categories and like photos.

## Screenshots

![PhotoLabs - HomePage](https://github.com/i8Raffles/photolabs/blob/main/docs/Home-Page.PNG?raw=true)

![PhotoLabs - Modal](https://github.com/i8Raffles/photolabs/blob/main/docs/Modal.PNG?raw=true)

![PhotoLabs - Topics + Favorites](https://github.com/i8Raffles/photolabs/blob/main/docs/Favorite_and_Categories.PNG?raw=true)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Server

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
## [Browser] Running Application
Navigate to http://localhost:3000/ on a browser of your choice to view PhotoLabs

## Using the Application
- You can favorite a photo by clicking on the heart icon, which then turns red
- You are able to click on any photo and a modal opens up showing a larger version of that photo along with related photos underneath
- You can click on any topic on the navigation bar to show photos under that topic

## Dependencies

### Frontend
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

### Backend
    "body-parser": "^1.18.3",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0",
    "express": "^4.16.4",
    "helmet": "^3.18.0",
    "pg": "^8.5.0",
    "socket.io": "^2.2.0",
    "ws": "^7.0.0"