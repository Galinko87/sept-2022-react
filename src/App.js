import React from "react";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {RouterEndpoints} from "./routerEndPoints/RouterEndpoints";
import {HomePage} from "./pages/HomePage/HomePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {PostByCommentPage} from "./pages/postByCommentPage/PostByCommentPage";
import {CommentsPage} from "./pages/CommentDetailsPage/CommentsPage";


function App () {
  return (
    <Routes>
      <Route path={RouterEndpoints.index} element={<MainLayout/>}>
        <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
        <Route path={RouterEndpoints.todos} element={<TodosPage/>}/>
        <Route path={RouterEndpoints.albums} element={<AlbumsPage/>}/>
        <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
            <Route path={RouterEndpoints.commentById} element={<PostByCommentPage/>}/>
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
