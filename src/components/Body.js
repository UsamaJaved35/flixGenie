import Browse from "./Browse";
import Login from "./Login";
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";  
import MoviePlayer from "./MoviePlayer";
const Body=()=>{
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/movie/:id",
            element: <MoviePlayer/>
        }
    ])
    return(
        <>
        <div className="min-h-screen flex flex-col">
            <RouterProvider router={appRouter} />
        </div>
        </>
    );
}
export default Body;