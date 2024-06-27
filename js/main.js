gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-section-2-img-2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero-section-2-img-2",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".hero-section-2-img-2",
        { scale: 1, opacity: 0 },
        {
          scale: 1.1,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".stats-section-container-1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".stats-section-container-1",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".stats-section-container-1",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".stats-section-container-2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".stats-section-container-2",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".stats-section-container-2",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".stats-section-container-3", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".stats-section-container-3",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".stats-section-container-3",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".stats-section-container-4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".stats-section-container-4",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".stats-section-container-4",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".about-us-animation", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-us-animation",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".about-us-animation",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-mission-animation", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-mission-animation",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-mission-animation",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-journey-section-container-1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-journey-section-container-1",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-journey-section-container-1",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-journey-section-container-2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-journey-section-container-2",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-journey-section-container-2",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-journey-section-container-3", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-journey-section-container-3",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-journey-section-container-3",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-journey-section-container-4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-journey-section-container-4",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-journey-section-container-4",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-partner-div-1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-partner-div-1",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-partner-div-1",
        { top: 50, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-partner-div-2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-partner-div-2",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-partner-div-2",
        { top: 50, opacity: 0, delay: 0.1 },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".our-partner-div-3", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-partner-div-3",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".our-partner-div-3",
        { top: 50, opacity: 0, delay: 0.2 },
        {
          top: 0,
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".press-main-container", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".press-main-container",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".press-main-container",
        { top: 50, opacity: 0, delay: 0.2 },
        {
          top: 0,
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to("#footer_section_one", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#footer_section_one",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        "#footer_section_one",
        { top: 50, opacity: 0, delay: 0.2 },
        {
          top: 0,
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

gsap.to(".copyRightDiv", {
  scrollTrigger: {
    trigger: ".copyRightDiv",
    start: "top center",
    end: "bottom center",
    toggleActions: "play",
    onEnter: () => {
      gsap.fromTo(
        ".copyRightDiv",
        { top: 50, opacity: 1, delay: 0.2 },
        {
          top: 0,
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    },
    once: true,
  },
});

document.querySelectorAll(".trigger-div").forEach((trigger) => {
  const sideBarContainer = trigger.querySelector(".side-bar-container");
  const sideBarContainerMain = trigger.querySelector(
    ".side-bar-container-main"
  );
  const closeIcon = sideBarContainer.querySelector(".close-icon");

  closeIcon.addEventListener("click", (e) => {
    e.stopPropagation()
    gsap.to(sideBarContainerMain, {
      opacity: 0,
      visibility: "hidden",
      x: "100%",
      duration: 0.7,
      ease: "power4.out",
    });
    gsap.to(sideBarContainer, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.7,
      ease: "power4.out",
    });
  });

  trigger.addEventListener("click", () => {
    gsap.to(sideBarContainerMain, {
      opacity: 1,
      visibility: "visible",
      x: 0,
      duration: 0.7,
      ease: "power4.out",
    });
    gsap.to(sideBarContainer, {
      opacity: 1,
      visibility: "visible",
      duration: 0.7,
      ease: "power4.out",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    "body",
    { top: -20, duration: 1, opacity: 0 },
    { top: 0, duration: 1, opacity: 1 }
  );
  gsap.fromTo(".navMain", { top: -20 }, { top: 0, duration: 1 });
  gsap.fromTo(".navMainContainer", { top: -100 }, { top: 0, duration: 0.6 });
  gsap.fromTo(
    ".hero-section-title",
    { top: 50, opacity: 0, delay: 0.7 },
    { top: 0, opacity: 1, duration: 0.6, delay: 0.7 }
  );

  gsap.fromTo(
    ".hero-section-heading",
    { top: 50, opacity: 0, delay: 0.8 },
    { top: 0, opacity: 1, duration: 0.6, delay: 0.8 }
  );

  gsap.fromTo(
    ".hero-section-para",
    { top: 50, opacity: 0, delay: 1 },
    { top: 0, opacity: 1, duration: 0.6, delay: 1 }
  );

  gsap.fromTo(
    ".hero-section-2-main-img",
    { scale: 1, opacity: 0, delay: 1.2 },
    {
      scale: 1.1,
      opacity: 1,
      duration: 0.5,
      delay: 1.2,
      ease: "power4.out",
    }
  );

  gsap.fromTo(
    ".customHeroSectionBoxShadow2",
    { scale: 1, opacity: 0, delay: 1.3 },
    {
      scale: 1.1,
      opacity: 1,
      duration: 0.5,
      delay: 1.4,
      ease: "power4.out",
    }
  );
});

const nav = document.querySelector(".navMain");
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollThreshold = 70;

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    gsap.to(nav, { top: "-100%", duration: 0.5, delay: 0.5 });
  } else {
    gsap.to(nav, { top: 0, duration: 0.5 });
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

window.addEventListener("scroll", handleScroll);
