import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "book/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch(`/public/booksData.json`)
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch(`/public/booksData.json`) 

      }
    ]
  },
  
]); 


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
