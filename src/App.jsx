import { BrowserRouter, Routes, Route  } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { ViewPage } from "./Pages/ViewPage";
import { ViewCategory } from "./Pages/ViewCategory";
import { Profile } from "./Pages/Profile";
import { NotFoudPage } from "./Pages/NotFoundPage";
import { ProfilePage } from "./Pages/ProfilePage";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:productId/view" element={<ViewPage />} />
          <Route path="/category/:slug" element={<ViewCategory />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoudPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export { App };
