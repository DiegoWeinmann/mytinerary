import React from "react";
import { Link } from "react-router-dom";
import styles from "./DropDownMenu.module.css";

// const menuStyle = {
// 	backgroundColor: '#eee',
// 	width: '3rem',
// 	height: '3rem',
// 	position: 'absolute'
// };

const DropDownMenu = props => {
  // const { items } = props;
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      {props.children(setOpen, isOpen)}
      {isOpen && (
        <div className={styles.dropDownMenu}>
          <Link to="/singup">Create account</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </>
  );
};

export default DropDownMenu;
