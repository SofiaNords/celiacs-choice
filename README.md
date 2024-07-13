# Celiac's Choice - Introduction
Celiac's Choice is a platform for gluten-free dining experiences. The site promotes gluten-free awareness and supporting the celiac community. The platform allows users to share their favorite gluten-free restaurants and cafés, complete with mouthwatering photos and locations. The user can engage with other users by commenting on their posts and building their own Selected Choices list. 

View the full website [here.](https://celiacs-choice-1569a3d67327.herokuapp.com/)

![responsive](docs/images/responsive.png)

The application is developed using the Django Rest framework for the Back end and React for the Front end.

This is the Front end part of the project, the Back end part can be found [here.](https://github.com/SofiaNords/celiacs-api)

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
        - [Wireframes](#wireframes)
        - [Colour Scheme](#colour-scheme)
- [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks Libraries Tools & Programs Used](#frameworks-libraries-tools--programs)
- [Testing](#testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
    - [Code Used](#code-used)
    - [Inspiration](#inspiration)
    - [Acknowledgements](#acknowledgements)




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

##### Home page when signed out
![wireframe 1](docs/images/wf-1.png)

##### Home page when signed in
![wireframe 2](docs/images/wf-2.png)

##### Selected posts
![wireframe 3](docs/images/wf-3.png)

##### Post detail
![wireframe 4](docs/images/wf-4.png)

##### Profile page
![wireframe 5](docs/images/wf-5.png)

##### Add post
![wireframe 6](docs/images/wf-6.png)

##### About page
![wireframe 7](docs/images/wf-7.png)

##### Sign up
![wireframe 8](docs/images/wf-8.png)

#### Colour Scheme

![colour scheme](docs/images/color-scheme.png)

## Features

### Existing Features

#### Home Page when signed out
![home page](docs/images/feature_1.png)

- The page visitor has direct access to the posts and can click on an optional story to access the detailed view of the story.
- The visitor is informed that they must be logged in to select posts in the Selected Choices list.


#### The About Page
![about page](docs/images/feature_2.png)

- A user can read about the website's purpose an get instructions in how it works to use the site. The About page can be accessed whether you are logged in or not. 


#### Post Page when signed out
![post page](docs/images/feature_3.png)

- When page visitor click on an optional post they can read the comments of the post.
- The visitor is informed that you must log in to select a post.


#### Sign up page
![sign up page](docs/images/feature_4.png)

- A page visitor can click on Sign up in the Navbar an fill out the Sign up form.
- The user will be redirected to the login page when they click on the Register button provided the details are authorised.


#### Sign in page
![sign in page](docs/images/feature_5.png)

- A registered user can sign in by filling in the Sign in form.


#### Select & Unselect posts
![select posts](docs/images/feature_6.png)

- When logged in a user can click on the select button to select a post. The button turns green and the post title and author shows up in the "Selected Choices List" after refreshing the page. 

![selected choices list](docs/images/feature_7.png)

- If the user wants to unselect a post, they just click the select button again and the button turns grey and the title and author disappear from the "Selected Choices List" after refreshing the page.

#### View Selected Posts
![view select posts](docs/images/feature_8.png)

- When the user clicks on Selected Posts in the Navbar, a feed is presented with only the posts that the current user has added to their list.
- The user can always access a specific selected post by clicking on the title in the "Selected Choices List".


#### Comment a post
![comment a posts](docs/images/feature_9.png)

- When logged in, the user can click on a post to access the option to leave a comment.
- The user can edit and delete their own comments by clicking on the three dots to the right of the comment.


#### Create a post
![create a posts](docs/images/feature_10.png)

- A logged in user has access to the "Add post" button. When the user clicks on "Add post", they can create their post with title, location, content and upload an image. After clicking "create" the post is visible in the feed at the Home page.
- A logged in user can edit och delete a story they have created themselves by clicking on the post and then the three dots to the right in the head of the post.

#### Edit profile
![Edit profile](docs/images/feature_11.png)

- Users can edit their profile on the profile page. 
- They can add a profile picture and a "bio".
- They also have the option to change their username or password.

#### Navigate and Log out
![Navigate & Log out](docs/images/feature_12.png)

- The user navigates in the Navbar at the top of the page.
- When logged in the user can click on the "Sign out" icon to log out.

### Future Features

#### Messages in Selected Choices List
In the existing feature the Selected Choices List shows the same message whether you are logged in or not. In a future feature I would display different messages whether you are logged in or not. If you are logged out the message would say something like "Log in to view your Selected Choices List" while the logged in message would say "The list is empty for now. Please make your selections to add posts to the list."

#### Links in the About Page
In the existing feature you have to use the Sign in and Sign up icons in the Navbar to reach the Sign in page or the Sign up page. In a future feature I would add links to the pages in the text about "How It Works" and "Join Us".

#### Overlay trigger Comments
In the existing feature, when the visitor to the page hovers over the select button in the post view, they are informed that they need to log in to select a post. [See image here.](#post-page-when-signed-out)
In a future feature I would add a similar overlay trigger to the comment icon that says you have to log in to write a comment.

#### Selected Posts List
In the existing feature, the user has to refresh the page after selecting a post in order to see the post in the "Selected Choices List".
In a future feature I would add a useEffect function to update the component SelectPosts when the user clicks the select button. This way the page would not need to be refreshed before the title becomes visible in the list.

#### Selected Posts Count
In the existing feature, the list of selected posts does not show how many posts the user has selected. In a future feature I would display how many posts the user has selected to the right of the title. [See wireframe here.](#profile-page)

## Technologies Used

### Languages Used

- HTML
- CSS
- JavaScript
- JSX (JavaScript XML)

### Frameworks, Libraries, Tools & Programs

- [Axios](https://axios-http.com/docs/intro) - Used for handeling requests to the API
- [Balsamiq](https://balsamiq.cloud/) - Used to create wireframes
- [Font Awsome](https://fontawesome.com/) - Used for navigation icons
- [Git](https://git-scm.com/) - Used for version control
- [GitHub](https://github.com/) - Used to store the code
- [GitPod](https://www.gitpod.io/) - Used as the IDE for development
jwt decode
- [Pexels](https://www.pexels.com/) - Used as an image source
- [React](https://react.dev/) - Used for building user interface
- [React Bootstrap](https://react-bootstrap.netlify.app/) - Used for styling the project
- [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component) - Used for infinite scroll feature
- [React Router](https://reactrouter.com/en/6.24.0/web/guides/quick-start) - Used for handling routing in the application
- [Tinify](https://tinypng.com/) - Used to convert and reduce the size of images

## Testing

[Test Document](https://docs.google.com/spreadsheets/d/1cT4z1t5p8EcwzSDX7WlpFXLf3zcVW32OgnlrwBf_hpk/edit?usp=sharing)

## Bugs

I noticed that there was no warning for when you have not filled in the username even though code for this has been added.

![warning sign in](docs/images/bug_1.png)
![warning sign in](docs/images/bug_2.png)

The same was true for Content in the form to create a post.

![warning sign in](docs/images/bug_3.png)

To solve this, I got help from Tutor Assistance to add the following controls to the handleSubmit function.

![warning sign in](docs/images/bug_4.png)

After that, I was able to add the corresponding controls myself in the function to create new posts.

![warning sign in](docs/images/bug_5.png)

## Deployment

## Credits

### Code Used

### Inspiration

### Acknowledgements
