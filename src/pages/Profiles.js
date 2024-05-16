import React from "react";
import {Link, Routes, Route, Outlet } from 'react-router-dom'
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <Link to="/profiles/ycLee">ycLee</Link> | <Link to="/profiles/gildong">gildong</Link>
            <br/>
            <br/>
            <Outlet />
            {/* <Routes>
                <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
                <Route path=":username" element={<Profile />} />
            </Routes> */}
            <br/>

        </div>
    )
}

export default Profiles;