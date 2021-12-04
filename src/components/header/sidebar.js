import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

export default props => {
  return (
    <Menu >
      <Link to="/">Сообщения</Link>
      <Link to="/editPage">Профиль</Link>
    </Menu>
  );
};