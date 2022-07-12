/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-text mx-3">Admin Angkasa</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Nav Item - Charts */}
      <li className={`nav-item`}>
        <Link to="/airlanes">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-table" />
            <span>Kelola Airlanes</span>
          </a>
        </Link>
      </li>
      <li className="nav-item ">
        <Link to="/country">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-table" />
            <span>Kelola Countries</span>
          </a>
        </Link>
      </li>
      <li className="nav-item ">
        <Link to="/flights">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-table" />
            <span>Kelola Fligths</span>
          </a>
        </Link>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Booking</span>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Data User</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
};

export default Sidebar;
