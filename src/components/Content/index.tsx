// import npm libs
import { Route, Routes } from "react-router";
// import local libs
import MyAccount from "../../pages/MyAccount";
import EditAccount from "../../pages/EditAccount";
import Settings from "../../pages/Settings";
import { ContentProps } from "../../types";
import basepathes from "../../basePathes.json";
// import styles

const Content = (props: ContentProps) => {
  return (
    <main>
      <nav></nav>
      <Routes>
        <Route path={basepathes.home} element={props.children} />
        <Route path={basepathes.view} element={<MyAccount />}></Route>
        <Route path={basepathes.edit} element={<EditAccount />}></Route>
        <Route path={basepathes.settings} element={<Settings />}></Route>
      </Routes>
    </main>
  );
};

export default Content;
