import React from "react";
import {Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayout} from "./layouts";


function App() {
  return (
      <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'users'} element={<UsersPage/>}/>
          <Route path={'posts'} element={<PostsPage/>}/>
          <Route path={'about'} element={<AboutPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
      </div>
  );
}

export default App;
