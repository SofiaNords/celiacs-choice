# Celiac's Choice - Introduction
Celiac's Choice is a platform for gluten-free dining experiences. The site promotes gluten-free awareness and supporting the celiac community. The platform allows users to share their favorite gluten-free restaurants and cafés, complete with mouthwatering photos and locations. The user can engage with other users by commenting on their posts and building their own Selected Choices list. 

View the full website [here.](https://celiacs-choice-1569a3d67327.herokuapp.com/)

![responsive](docs/images/responsive.png)

The application is developed using the Django Rest framework for the back end and React for the front end.

This is the front end part of the project, the back end part can be found [here.](https://github.com/SofiaNords/celiacs-api)

## Table of Content

- [Celiac's Choice - Introduction](#celiacs-choice---introduction)
- [Table of Content](#table-of-content)
- [User Experience - UX](#user-experience---ux)
    - [User Stories](#user-stories)
    - [Project Planning](#project-planning)
        - [Agile Methodologies](#agile-methodologies)
            - [Kanban Board](#kanban-board)
            - [Milestones](#milestones)
            - [Epics](#epics)
            - [User Stories in GitHub](#user-stories-in-github)
    - [Design](#design)




## User Experience - UX

### User Stories

1. As a logged in user I can create posts so that I can share my choices of gluten free food and location with other users.

2. As a logged in user, I want to be able to mark the posts that interest me, so that I can easily find them next time I log in.

3. As a user I can view the details of a single post so that I can learn more about it.

4. As a new user, I would like to register on the site, so that I can make full use of the site.

5. As a user I can tell if I am logged in or not so that I can log in if I need to.

6. As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.

7. As a user I can view a navbar form every page so that I can navigate easily between pages.

8. As a logged out user I can see sign in and sign up options so that I can sign in/ sign up

9. As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh

10. As a logged in user I can see a list of the titles of my selected posts so that I can easily navigate to any one of them.

11. As a registered user, I would like to be able to navigate to a page where only my selected posts are displayed, so that I can easily browse through the posts I have selected.

12. As a visitor to the site, I want to be able to read about what the site is for so that I know whether I want to become a user or not.

13. As a user I can see how long ago a comment was made so that I know how old a comment is.

14. As a logged in user I can add comments to a post so that I can share my thoughts about the post.

15. As an owner of a comment I can delete my comment so that I can control removal of my comment from the application

16. As an owner of a comment I can edit my comment so that I can fix or update my existing comment

17. As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created.

18. As a user I can view the posts page so that I can read the comments about the post.

19. As a user I can read comments on posts so that I can read what other users think about the posts

20. As a user I can keep scrolling through the posts on the site, that are loaded for me automatically so that I don't have to click in "next page" etc.

21. As a visitor to the site, I want to be able to read other users posts so that I know what the content of the page look like.

22. As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content

23. As a visitor to the site, I want to be able to search through the posts, so that I can easily find what interests me.

24. As a visitor of the site, I can see that I have to log in to be able to add posts to my list with selected posts so that I understand that I have to create an account to fully utilise the site

25. As a logged in user I can edit my profile so that I can change my profile picture and bio

26. As a logged in user I can select and unselect other users posts so that I can see and remove posts in my list with selected posts.

27. As a logged in user I can edit my profile so that I can change my profile picture and bio

28. As a logged in user I can select and unselect other users posts so that I can see and remove posts in my list with selected posts.

29. As a user I can view my own profile so that I can see my collected posts

30. As a user I can view my own statistics about how many posts I have posted and how many others posts I selected.

31. As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

### Project planning

#### Agile Methodologies

##### Kanban Board

I have used the [project board in Git Hub](https://github.com/users/SofiaNords/projects/6/views/1?filterQuery=-status%3A%22Ready+for+Back+End%22) for my project planning. It has helped me to get an overview of the project and to see the progress. I added a column named "Ready for Front End" and one named "Ready for Back End", so when I was done with the Back End parts of the user story, I moved it to "Ready for Front End". In hindsight, I didn't need the "Ready for Back End" column because I started with the Back End part for all user stories. During the project I have chosen to hide this column to get a better overview of my Kanban Board.

![kanban](docs/images/kanban.png)

I also included Issues for tasks that are not directly linked to a specific user story, e.g. tasks linked to project planning and workspace installation, and labelled them "Setup etc.". 

![setup](docs/images/setup-label.png)

##### Milestones

My milstones in this project are:

- Project planning
- Back End
- Front End
- Testing
- README

since these large delimited parts of the project gave me an overview of how I was doing in broad terms.

![milestones](docs/images/milestones.png)

##### Epics

I categorised and labelled the user stories into the following epics:

![epics](docs/images/epics.png)

##### User Stories in GitHub

You can access User Stories in Git Hub [here.](https://github.com/SofiaNords/celiacs-api/issues?q=label%3A%22User+Story%22) In the picture below you can see how I've labelled them with epics and a label showing that it is a user story.

![user-stories](docs/images/user-stories.png)

### Design

#### Wireframes

Home page when signed out
![wireframe 1](docs/images/wf-1.png)

Home page when signed in
![wireframe 2](docs/images/wf-2.png)

Selected posts
![wireframe 3](docs/images/wf-3.png)

Post detail
![wireframe 4](docs/images/wf-4.png)

Profile page
![wireframe 5](docs/images/wf-5.png)

Add post
![wireframe 6](docs/images/wf-6.png)

About page
![wireframe 7](docs/images/wf-7.png)

Sign up
![wireframe 8](docs/images/wf-8.png)

## Bugs

Warning didn't appear under username in Sign in ....

## Technologies Used


### Frameworks, Libraries, Tools & Programs

- [Axios](https://axios-http.com/docs/intro) - Used for handeling requests to the API
- [Git](https://git-scm.com/) - Used for version control
- [GitHub](https://github.com/) - Used to store the code
- [GitPod](https://www.gitpod.io/) - Used as the IDE for development
jwt decode
- [React](https://react.dev/) - Used for building user interface
- [React Bootstrap](https://react-bootstrap.netlify.app/) - Used for styling the project
- [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component) - Used for infinite scroll feature
- [React Router](https://reactrouter.com/en/6.24.0/web/guides/quick-start) - Used for handling routing in the application

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)