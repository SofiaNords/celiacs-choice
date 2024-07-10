import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import About from './pages/about/About';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          {/* Home page */}
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          {/* Selected posts page */}
          <Route
            exact
            path="/selected"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword or select a post."
                filter={`select__owner__profile=${profile_id}&ordering=-select__created_at&`}
              />
            )}
          />
          {/* About page */}
          <Route exact path="/about" render={() => <About />} />
          {/* Sign-in page */}
          <Route exact path="/signin" render={() => <SignInForm />} />
          {/* Sign-up page */}
          <Route exact path="/signup" render={() => <SignUpForm />} />
          {/* Create post page */}
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          {/* Individual post page */}
          <Route exact path="/posts/:id/" render={() => <PostPage />} />
          {/* Edit post page */}
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          {/* Profile page */}
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          {/* Edit username page */}
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          {/* Edit password page */}
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          {/* Edit profile page */}
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          {/* Page not found */}
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div >
  );
}

export default App;
