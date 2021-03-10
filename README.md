# SymptoMate
## Overview

_**SymptoMate** SymptoMate is a platform where users can login, browse through illnesses and share their symptoms/experiences regarding the illness of their choice. As a registered user, one can post, edit, and delete one's symptoms/experiences. With SymptoMate, I hope to create a platform of discourse for those who seek real experiences and real symptoms._


<br>

## MVP



- [ ] Have a thoroughly developed README.md file.
- [ ] Build a Ruby on Rails server, exposing RESTful JSON endpoints
- [ ] Consume data from your Ruby on Rails API, and render that data in your components.
- [ ] Functional CRUD
- [ ] Functional authorization
- [ ] Three tables with atleast one association between tables.
- [ ] Have a working, interactive React app, built using npx create-react-app.
- [ ] Responsiveness front-end with atleast two media-queries for two screens
- [ ] Utilize proper linting
- [ ] Deploy back-end via Heroku and front-end via Surge or Netlify

<br>

### Libraries and Dependencies

> 

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end library |
|   React Router   | Allows for client-side routing |
| Axios | Allows for API calls|
|     React-Split-Pane     | Allows for split screen |
|   |  |

<br>

### Client (Front End)

#### Wireframes



[Complete Wireframe flow](https://lucid.app/lucidchart/invitations/accept/31c7f198-04b7-48db-bd69-8a9c3e15778e)







#### Component Tree


[Component Tree](https://whimsical.com/symptoms-5BsrVtXuUvWWeEfbReBmzi)

![Component Tree](https://i.ibb.co/WfKTQxZ/Screen-Shot-2021-03-05-at-2-10-54-AM.png)

#### Component Hierarchy

 

``` structure

src
|__ screens/
      |__ Register.jsx
      |__ Login.jsx
      |__ SymptomCreate.jsx
      |__ Illnesses.jsx
|__ components/
      |__ Symptoms.jsx.
      |__ SymptomsEdit.jsx
|__ containers/
      |__ MainContainer.jsx
|__layouts
      |__Layout.jsx

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Make Tables with Appropriate Associations   |    H     |     1 hrs      |      TBD    |     TBD    |
| Create Back-end Architecture |    H     |     2 hrs      |     TBD     |     TBD     |
| Create Seed               |       H   |     2 hrs      |     TBD    |     TBD     |
| Authorization               |    H      |     2 hrs      |     TBD    |     TBD     |
| Full CRUD Back-end              |     H     |     4 hrs      |     TBD    |     TBD     |
| Create Front-end Architecture   | H           |     6 hrs     |     TBD      |     TBD    |     TBD     |
| Full CRUD Front-end              |    H      |     6 hrs      |     TBD    |     TBD     |
| CSS Styling               |     H     |     6 hrs      |     TBD    |     TBD     |
| TOTAL              |     H     |     35 hrs      |     TBD    |     TBD     |



<br>

### Server (Back End)

#### ERD Model


[SymptoMate ERD](https://app.diagrams.net/#G1t8KrwEQgF-0WHvOmqP9IGG-CJVW4l0eS)

![SymptoMate ERD](https://i.ibb.co/WgPttzR/Screen-Shot-2021-03-05-at-11-52-22-AM.png)
<br>

***

## Post-MVP
* Add a carousel with user symptoms as cards 
* Incorporate a split screen npm package
* Add a contact page


***

## Code Showcase



## Code Issues & Resolutions

