// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Header from './Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact';
import InforTeacher from './components/InforTeacher';
import HomeAdmin from './Pages/Admin/HomeAdmin';
import ManagementStudent from './Pages/Admin/ManagementStudent';
import Profile from './Pages/Admin/Profile';
import HomeStudent from './Pages/Student/HomeStudent';
import ManagementTopic from './Pages/Student/ManagementTopic';
import ProfileST from './Pages/Student/ProfileST';
import RegisterTopicSt from './Pages/Student/RegisterTopicSt';
import HomeHead from './Pages/Head/HomeHead'
import ProfileHe from './Pages/Head/ProfileHe'
import ManageHead from './Pages/Head/MannageHead'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />  {/* Outlet sẽ render nơi các con đường con (nested routes) sẽ được hiển thị */}
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info-teacher" element={<InforTeacher />} />
        </Route>

        {/* Tách riêng trang Login không hiển thị Header và Footer */}

        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/profileAdmin" element={<Profile />} />
        <Route path="/managermentStudent" element={<ManagementStudent />} />
        
        <Route path="/homeStudent" element={<HomeStudent />} />
        <Route path="/managermentTopicStudent" element={<ManagementTopic />} />
        <Route path="/profileStudent" element={<ProfileST />} />
        <Route path="/registerTopic" element={<RegisterTopicSt />} />

        <Route path="/homeHead" element={<HomeHead />} />
        <Route path="/profileHead" element={<ProfileHe />} />
        <Route path="/managermentTopicHead" element={<ManageHead />} />

      </Routes>
    </>
  );
}

export default App;
