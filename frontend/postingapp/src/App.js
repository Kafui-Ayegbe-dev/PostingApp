import { Routes, Route, Outlet, Navigate} from 'react-router-dom';
import "./bigstyle.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";


// components
import LandingPage2 from './components/Landing/LandingPage2';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/SignUp/LoginPage';
import FeedChannel from "./components/Channels/FeedChannel";
import ChannelsList from "./components/Channels/ChannelsList";
import TimeLine from "./components/Timeline/Timeline";
import Admin from "./components/Admin/Admin";


import LeftBar from './components/Constants/LeftBar';
import RightBar from './components/Constants/RightBar';
import TopBar from './components/Constants/TopBar';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from "react-query";



function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const DoLayout = ()=>{
    return (
      <QueryClientProvider client={queryClient}>
    
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <TopBar/>
          <div style = {{display: "flex"}}>
            <div style={{flex:1}}>
              <LeftBar/>
            </div>
            <div style={{flex:5}}>
              <Outlet />
            </div>
          </div>
    
        </div>
      </QueryClientProvider>
    )
  }


  // Enforce login to protect routes
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/loginPage"/>
    }

    return children;
  }

  return (
    <div className="App">
      <div>
          <Routes>
            <Route path='/' element={<LandingPage2 />}/>
            <Route path='/signUpPage' element={<SignUpPage />}/>
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/admin" element={<Admin />} />
            

            {/* nested routes */}
            <Route path="/mainFeed/*" element={ <ProtectedRoute> <DoLayout /> </ProtectedRoute>} >
              <Route path="pubFeed" element={<TimeLine/>} />
              <Route path="channelslist" element={<ChannelsList />} />
              <Route path="channels/:ChannelID" element={<FeedChannel />} />
            </Route>

          </Routes>
        </div>
    </div>
  );
}

export default App;
