import { createBrowserRouter } from "react-router"
import RootLayout from "./RootLayout"
import Home from "./pages/Home"
import AboutSection from "./pages/About"
import ContactPage from "./pages/Contact"
// import ProjectDetail from "./pages/ProjectDetail"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: AboutSection,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      // { path: ":slug", Component: ProjectDetail },
    ],
  },
])
