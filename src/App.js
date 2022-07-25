import React, { Component } from "react";
import Header from "components/common/header/Header";
import Main from "components/common/main/Main";
import AddGist from "pages/AddGist/AddGist";
import GistList from "pages/GistList/GistList";
import GistView from "pages/GistView/GistView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "pages/Profile/Profile";
import MainLayout from "layouts/MainLayout";
import AppRoutes from "routes/AppRoutes";

class App extends Component {
  render() {
    return (
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    );
  }
}

export default App;
