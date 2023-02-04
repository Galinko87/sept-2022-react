import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayout} from "./layouts";
import {PostDetails, Posts} from "./components";
import {LoginPage} from "./pages/loginPage/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";


function PostsDetails() {
    return null;
}

function App() {
  return (
      <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'home'}/>}/>
          <Route path={'home'}  element={<HomePage/>}/>
          <Route path={'users'} element={<UsersPage/>}/>
          <Route path={'posts'} element={
              <RequireAuth>
                  <PostsPage/>
              </RequireAuth>
                  }>
              <Route path={':postId'} element={<PostDetailsPage/>}/>
          </Route>
          <Route path={'about'} element={<AboutPage/>}/>
          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
      </div>
  );
}

export default App;
