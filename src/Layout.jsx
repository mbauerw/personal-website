import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Layout() {
  return (
    <div class="flex flex-col ">
      <div id="header-wrap">
        <Header></Header>
      </div>
      <main class="pt-18">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;