import { useEffect } from "react";

export default function useSiteEffects() {

  // ✅ Loader fade & hide
  useEffect(() => {
    const loader = document.querySelector(".loader-wrapper");
  
    if (!loader) return;
  
    // show first
    loader.classList.add("active");
  
    const fadeTimer = setTimeout(() => {
      loader.classList.remove("active");
  
      const hideTimer = setTimeout(() => {
        loader.style.display = "none";
      }, 500);
  
      return () => clearTimeout(hideTimer);
    }, 2000);
  
    return () => clearTimeout(fadeTimer);
  }, []);

  // ✅ Header scroll effect
  useEffect(() => {
    const header = document.querySelector(".header");
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 100) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // ✅ Intersection Observer (Animations)
  useEffect(() => {
    const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const animate = (elements, delay = false) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const timeout = delay ? index * 200 : 0;
            setTimeout(() => {
              entry.target.classList.add("animated");
            }, timeout);
          }
        });
      }, options);

      elements.forEach((el) => observer.observe(el));
    };

    animate(document.querySelectorAll(".project-card"), true);
    animate(document.querySelectorAll(".timeline-content"));
    animate(document.querySelectorAll(".achievement-card"), true);

  }, []);


  // ✅ Smooth Scroll
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (e) => {
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    };

    links.forEach((link) => link.addEventListener("click", smoothScroll));

    return () => links.forEach((link) => link.removeEventListener("click", smoothScroll));
  }, []);
}