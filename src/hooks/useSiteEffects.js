import { useEffect, useRef } from "react";

export default function useSiteEffects() {

  // ✅ Loader fade & hide
  useEffect(() => {
    const loader = document.getElementById("site-loader");
    if (!loader) return;

    const fadeTimer = setTimeout(() => {
      loader.classList.add("fade-out");
      const hideTimer = setTimeout(() => {
        loader.classList.add("hidden");
      }, 700);
      return () => clearTimeout(hideTimer);
    }, 2200);

    return () => clearTimeout(fadeTimer);
  }, []);

  // ✅ Header scroll effect
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const handleScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Custom cursor
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    // Disable custom cursor on touch devices for performance
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchDevice || !dot || !ring) {
      if (dot) dot.style.display = 'none';
      if (ring) ring.style.display = 'none';
      return;
    }

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    // Grow ring on hoverable elements
    const onEnter = () => {
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.borderColor = "rgba(236, 72, 153, 0.5)";
    };
    const onLeave = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(99, 102, 241, 0.6)";
    };

    const hoverEls = document.querySelectorAll("a, button, .skill-item, .project-card");
    hoverEls.forEach(el => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      hoverEls.forEach(el => { el.removeEventListener("mouseenter", onEnter); el.removeEventListener("mouseleave", onLeave); });
    };
  }, []);

  // ✅ Scroll-reveal (generic .reveal / .reveal-left / .reveal-right)
  useEffect(() => {
    const selectors = [".reveal", ".reveal-left", ".reveal-right"];
    const elements = document.querySelectorAll(selectors.join(", "));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ✅ Project card entrance animation (staggered)
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("animated"), i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // ✅ Timeline content animation (staggered)
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-content");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("animated"), i * 120);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // ✅ Smooth scroll for anchor links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = href === "#home" ? 0 : target.offsetTop - 90;
      window.scrollTo({ top: offset, behavior: "smooth" });
    };

    links.forEach(link => link.addEventListener("click", smoothScroll));
    return () => links.forEach(link => link.removeEventListener("click", smoothScroll));
  }, []);
}