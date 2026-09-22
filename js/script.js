"use strict";

/* =====================================================
   AYUSH MISHRA PORTFOLIO
   Version : 3.0
   Author  : Ayush Mishra
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       Sticky Navbar
    ===================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    /* =====================================
       Mobile Menu
    ===================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    /* =====================================
       Active Menu
    ===================================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

    /* =====================================
       Typed.js
    ===================================== */

    if (document.querySelector("#typing")) {

        new Typed("#typing", {

            strings: [
                "Front-End Developer",
                "Web Developer",
                "JavaScript Developer",
                "React Learner",
                "Cyber Security Learner"
            ],

            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true

        });

    }

    /* =====================================
       AOS
    ===================================== */

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,
            once: true,
            offset: 80

        });

    }

    /* =====================================
       Scroll Reveal
    ===================================== */

    if (typeof ScrollReveal !== "undefined") {

        ScrollReveal().reveal(
            ".hero-left,.hero-right,.section-title,.project-card,.skill-card,.education-card,.certificate-card,.timeline-item,.resume-card,.contact-info,.contact-form,.footer-box",
            {
                distance: "60px",
                duration: 1000,
                easing: "ease",
                origin: "bottom",
                interval: 150
            }
        );

    }

    /* =====================================
       Vanilla Tilt
    ===================================== */

    if (typeof VanillaTilt !== "undefined") {

        VanillaTilt.init(
            document.querySelectorAll(".skill-card,.project-card,.certificate-card"),
            {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.2
            }
        );

    }

    /* =====================================
       Scroll To Top
    ===================================== */

    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});