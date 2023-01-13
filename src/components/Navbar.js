import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { GiMegabot } from "react-icons/gi";

import i18n from "../i18n";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} tytle="Home" className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                style={{ fontSize: "14px" }}
              >
                <AiOutlineHome
                  style={{ marginBottom: "2px", fontSize: "12px" }}
                />{" "}
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ fontSize: "14px" }}
              >
                <AiOutlineUser
                  style={{ marginBottom: "2px", fontSize: "12px" }}
                />{" "}
                {i18n.t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ fontSize: "14px" }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", fontSize: "12px" }}
                />{" "}
                {i18n.t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
                style={{ fontSize: "14px" }}
              >
                <AiOutlineContacts
                  style={{ marginBottom: "2px", fontSize: "12px" }}
                />{" "}
                {i18n.t("navbar.contact")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={{ fontSize: "14px" }}
              >
                <CgFileDocument
                  style={{ marginBottom: "2px", fontSize: "12px" }}
                />{" "}
                {i18n.t("navbar.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://chatgpt-ek.vercel.app/"
                onClick={() => updateExpanded(false)}
                style={{ fontSize: "14px" }}
              >
                <GiMegabot
                  style={{
                    marginBottom: "2px",
                    fontSize: "24px",
                    color: "rgb(51, 255, 255)",
                  }}
                />{" "}
                ChatGPT3
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://ekisler.github.io"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "14px" }}
              >
                <ImBlog style={{ marginBottom: "2px", fontSize: "12px" }} />{" "}
                Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/ekisler/kislerportfolio"
                target="_blank"
                className="fork-btn-inner"
                variant="primary"
              >
                <CgGitFork style={{ fontSize: "1em" }} />{" "}
                <AiFillStar style={{ fontSize: "1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
