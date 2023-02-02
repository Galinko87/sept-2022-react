import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayout} from "./layouts";
import {PostDetails} from "./components";


function PostsDetails() {
    return null;
}

function App() {
  return (
      <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'posts'}/>}/>
          <Route path={'home'}  element={<HomePage/>}/>
          <Route path={'users'} element={<UsersPage/>}/>
          <Route path={'posts'} element={<PostsPage/>}>
            <Route path={':postId'} element={<PostDetailsPage/>}/>
          </Route>
          <Route path={'about'} element={<AboutPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
      </div>
  );
}

export default App;
