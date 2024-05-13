import {Route, Routes} from "react-router-dom";

function Home() {
    return(
      <Routes>
          <Route path = "/" element={ <Header/> } />
      </Routes>
    );
}