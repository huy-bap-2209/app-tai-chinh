import "./App.css";
import { Routes, Route } from "react-router-dom";

import publicRoutes from "./routes";
import DefaultLayout from "./components/layout/defaultLayout/DefaultLayout";
import { Fragment } from "react";

export default function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Pages = route.component;
          // const Layout = DefaultLayout;

          let StyleLayout = DefaultLayout;
          if (route.style) {
            StyleLayout = route.style;
          } else if (route.style === null) {
            StyleLayout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <StyleLayout>
                  <Pages />
                </StyleLayout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}
