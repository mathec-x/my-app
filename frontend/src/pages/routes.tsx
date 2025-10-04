import { createBrowserRouter } from "react-router";
import Layout from '../app/Layout';
import './styles.css'

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <>Home Component</>
      },
    ]
  }
])
