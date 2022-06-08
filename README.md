
<div align="center">
  <img src="https://user-images.githubusercontent.com/87027579/172620363-824ebd42-1a13-4b6a-8aac-05dfab6ceb4c.PNG">
  
# LightsOut Video

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ea74d87-9b8e-416e-9504-c0bce3525be5/deploy-status)](https://app.netlify.com/sites/lightsout-video/deploys)
  ![Orca UI](https://img.shields.io/badge/SuperCharged%20by-Orca%20UI-%2300B2CA)
</div>


## Table of Contents

- [About](#about)
- [Technologies used](#-technologies-used)
- [Features](#features)
- [Live link](#live-link)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Connect with me](#-connect-with-me)

## About
 - Get everything going on in F1 at one place.

## 🛠 Technologies used
- ReactJS
- [OrcaUI](https://orcaui.netlify.app/) component library
- [Mockbee](https://mockbee.netlify.app/) for backend
- React Router

## Live link
[LightsOut Video](https://lightsout-video.netlify.app/)

## Features
**Home Page**: 
- The home page consists of different categories, clicking them navigates the user to the video listing page with that category applied as a filter.

**Video Listing (Explore)**
- On this page, users can see all the videos and can watch the video by clicking on them. 

**Video details**
- After a user clicks on any video in video listing page, it will navigate to this page, where user can:
  - Watch the video
  - Can like the video
  - Add the video into watch later, playlist and can create a playlist
  - Add video to watch later
  - Create new playlist
 
 **Playlist Management**
 - On this page user can view all the playlists.
 - On clicking on any one open's that playlist, where user get option to:
    - Delete the playlist
    - Remove video from playlist

**Watch later**
- Users can add any video into watch later if a video is already in watch later then the user can remove it.

**Like video**
- Users can like any video, if the video is already liked then the user can remove it from liked videos.

**History**
- Once the user watches the video it gets added to watch history. On the history page, the user can clear all history.

**Authentication**
- LightsOut Video also has login, signup and logout feature
  - For Signup, form validation is done for all the fields.


## Getting Started

- Clone the repository on your local machine with the command below in your terminal, and cd into the **lightsout-video** folder

```sh
https://github.com/hiteshverma27/lightsout-video.git
cd lightsout-video
```

- Install dependencies (if you are using **yarn** then do with that)

```sh
npm install
```

- Create a `.env` file at the root level of the directory (at the level of `package.json`) and create a environment variable

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
```

- Start the server🚀

```
npm start
```

## Screenshots
![lo-video-home](https://user-images.githubusercontent.com/87027579/172619862-6fcd6199-3dde-488c-aee5-f06f05a22f67.PNG)
![lo-video-videolisting](https://user-images.githubusercontent.com/87027579/172619909-711d047e-305e-4acc-a475-7a0cb69d1c0c.PNG)
![lo-video-singlevideo](https://user-images.githubusercontent.com/87027579/172619931-d2e60a07-27cd-43c8-b463-d0976b9935ad.PNG)
![lo-video-playlist](https://user-images.githubusercontent.com/87027579/172619960-96e76454-bc98-42b2-8dbd-bd4fb3dbf92f.PNG)


## 👨‍💻 Connect with me 

<a href="https://twitter.com/hitesh27v"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/hitesh-verma-8727921b2/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
