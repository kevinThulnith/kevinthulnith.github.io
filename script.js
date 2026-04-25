(function () {
  var skills = [
    // Ring 1 — Core Languages
    {
      id: "python",
      name: "Python",
      ring: 1,
      angle: 0,
      cat: "backend",
      level: 95,
      lt: "Expert",
      yrs: "4+ yrs",
      desc: "Django, FastAPI, ML pipelines, automation",
    },
    {
      id: "javascript",
      name: "JavaScript",
      ring: 1,
      angle: 1.57,
      cat: "frontend",
      level: 90,
      lt: "Expert",
      yrs: "3+ yrs",
      desc: "React, Node.js, ES6+, async patterns",
    },
    {
      id: "typescript",
      name: "TypeScript",
      ring: 1,
      angle: 3.14,
      cat: "frontend",
      level: 82,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "React + Vite projects, type-safe APIs",
    },
    {
      id: "java",
      name: "Java",
      ring: 1,
      angle: 4.71,
      cat: "backend",
      level: 75,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "Spring Boot, JPA, REST API design",
    },
    // Ring 2 — Frameworks
    {
      id: "django",
      name: "Django",
      ring: 2,
      angle: 0.5,
      cat: "backend",
      level: 95,
      lt: "Expert",
      yrs: "3+ yrs",
      desc: "DRF, Channels, Celery, WebSockets",
    },
    {
      id: "react",
      name: "React",
      ring: 2,
      angle: 1.55,
      cat: "frontend",
      level: 85,
      lt: "Advanced",
      yrs: "3+ yrs",
      desc: "Vite, Hooks, Context API, Redux",
    },
    {
      id: "springboot",
      name: "Spring Boot",
      ring: 2,
      angle: 2.6,
      cat: "backend",
      level: 65,
      lt: "Intermediate",
      yrs: "1+ yr",
      desc: "JPA, Thymeleaf, Spring Security",
    },
    {
      id: "fastapi",
      name: "FastAPI",
      ring: 2,
      angle: 3.65,
      cat: "backend",
      level: 80,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "Async APIs, Pydantic, SQLAlchemy",
    },
    {
      id: "laravel",
      name: "Laravel",
      ring: 2,
      angle: 4.7,
      cat: "backend",
      level: 60,
      lt: "Intermediate",
      yrs: "1+ yr",
      desc: "Breeze, Eloquent ORM, Blade templates",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      ring: 2,
      angle: 5.75,
      cat: "frontend",
      level: 90,
      lt: "Expert",
      yrs: "3+ yrs",
      desc: "Utility-first CSS, responsive design",
    },
    // Ring 3 — Data & Infrastructure
    {
      id: "docker",
      name: "Docker",
      ring: 3,
      angle: 0.3,
      cat: "devops",
      level: 80,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "Compose, multi-stage builds, networking",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      ring: 3,
      angle: 1.35,
      cat: "backend",
      level: 85,
      lt: "Advanced",
      yrs: "3+ yrs",
      desc: "Query optimization, indexing, migrations",
    },
    {
      id: "mysql",
      name: "MySQL",
      ring: 3,
      angle: 2.4,
      cat: "backend",
      level: 75,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "Stored procedures, replication, InnoDB",
    },
    {
      id: "redis",
      name: "Redis",
      ring: 3,
      angle: 3.45,
      cat: "backend",
      level: 70,
      lt: "Intermediate",
      yrs: "1+ yr",
      desc: "Caching, pub/sub, WebSocket channels",
    },
    {
      id: "nginx",
      name: "Nginx",
      ring: 3,
      angle: 4.5,
      cat: "devops",
      level: 75,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "Reverse proxy, SSL termination, load balancing",
    },
    {
      id: "aws",
      name: "AWS",
      ring: 3,
      angle: 5.55,
      cat: "devops",
      level: 60,
      lt: "Intermediate",
      yrs: "1+ yr",
      desc: "EC2, S3, CloudFront, Route 53",
    },
    // Ring 4 — Tools & Platforms
    {
      id: "php",
      name: "PHP",
      ring: 4,
      angle: 0.8,
      cat: "backend",
      level: 65,
      lt: "Intermediate",
      yrs: "1+ yr",
      desc: "CRUD APIs, session mgmt, MySQL integration",
    },
    {
      id: "github_actions",
      name: "GitHub Actions",
      ring: 4,
      angle: 2.37,
      cat: "devops",
      level: 70,
      lt: "Intermediate",
      yrs: "2+ yrs",
      desc: "CI/CD workflows, automated testing",
    },
    {
      id: "vercel",
      name: "Vercel",
      ring: 4,
      angle: 3.94,
      cat: "devops",
      level: 75,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "Edge deployments, serverless functions",
    },
    {
      id: "nodejs",
      name: "Node.js",
      ring: 4,
      angle: 5.5,
      cat: "frontend",
      level: 78,
      lt: "Advanced",
      yrs: "2+ yrs",
      desc: "Express, SSR, npm ecosystem, APIs",
    },
  ];

  var isMobile = window.innerWidth <= 768;
  var isSmall = window.innerWidth <= 480;
  var ringRadii = isSmall
    ? { 1: 45, 2: 80, 3: 115, 4: 148 }
    : isMobile
      ? { 1: 55, 2: 100, 3: 145, 4: 185 }
      : { 1: 90, 2: 165, 3: 240, 4: 310 };
  var orbSpeeds = { 1: 0.0004, 2: 0.00025, 3: 0.00015, 4: 0.0001 };
  var container = document.getElementById("orbitViz");
  var detailPanel = document.getElementById("skillDetail");
  var toggleBtn = document.getElementById("orbitToggle");
  var resetBtn = document.getElementById("orbitReset");
  var centerNode = document.getElementById("orbitCenter");
  var isPaused = false,
    pausedElapsed = 0,
    startTime = Date.now();
  var activeCategory = null,
    activeSkillId = null;
  var els = {};

  // Create skill DOM nodes
  skills.forEach(function (s) {
    var el = document.createElement("div");
    el.className = "skill-orb ring-" + s.ring;
    el.dataset.skill = s.id;
    el.dataset.category = s.cat;
    el.dataset.ring = s.ring;
    el.textContent = s.name;
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      showDetail(s);
    });
    container.appendChild(el);
    els[s.id] = el;
  });

  // Animation loop
  function animate() {
    var elapsed = isPaused ? pausedElapsed : Date.now() - startTime;
    skills.forEach(function (s) {
      var a = s.angle + elapsed * orbSpeeds[s.ring];
      var r = ringRadii[s.ring];
      var x = Math.cos(a) * r;
      var y = Math.sin(a) * r;
      els[s.id].style.transform =
        "translate(calc(-50% + " +
        x.toFixed(1) +
        "px), calc(-50% + " +
        y.toFixed(1) +
        "px))";
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Detail panel
  function showDetail(s) {
    document.querySelectorAll(".skill-orb.active-skill").forEach(function (e) {
      e.classList.remove("active-skill");
    });
    if (activeSkillId === s.id) {
      hideDetail();
      return;
    }
    activeSkillId = s.id;
    els[s.id].classList.add("active-skill");
    document.getElementById("detailName").textContent = s.name;
    document.getElementById("detailYears").textContent = s.yrs;
    document.getElementById("detailLevel").textContent = s.lt;
    document.getElementById("detailPercent").textContent = s.level + "%";
    document.getElementById("detailDesc").textContent = s.desc;
    var fill = document.getElementById("detailLevelFill");
    fill.style.width = "0%";
    requestAnimationFrame(function () {
      fill.style.width = s.level + "%";
    });
    detailPanel.classList.add("visible");
  }
  function hideDetail() {
    activeSkillId = null;
    document.querySelectorAll(".skill-orb.active-skill").forEach(function (e) {
      e.classList.remove("active-skill");
    });
    detailPanel.classList.remove("visible");
  }

  // Pause / Resume
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (isPaused) {
      startTime = Date.now() - pausedElapsed;
      isPaused = false;
    } else {
      pausedElapsed = Date.now() - startTime;
      isPaused = true;
    }
    toggleBtn.querySelector(".material-symbols-outlined").textContent = isPaused
      ? "play_arrow"
      : "pause";
  });

  // Reset
  function resetAll() {
    activeCategory = null;
    hideDetail();
    startTime = Date.now();
    pausedElapsed = 0;
    if (isPaused) {
      isPaused = false;
      toggleBtn.querySelector(".material-symbols-outlined").textContent =
        "pause";
    }
    document.querySelectorAll(".category-card").forEach(function (c) {
      c.classList.remove("active");
      c.querySelectorAll(".prof-fill").forEach(function (f) {
        f.style.width = "0";
      });
    });
    document.querySelectorAll(".skill-orb").forEach(function (e) {
      e.classList.remove("highlighted", "dimmed");
    });
    document.querySelectorAll(".orbit-ring-visual").forEach(function (r) {
      r.classList.remove("active");
    });
  }
  resetBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    resetAll();
  });
  centerNode.addEventListener("click", function (e) {
    e.stopPropagation();
    resetAll();
  });

  // Click outside to close detail
  container.addEventListener("click", function (e) {
    if (
      !e.target.closest(".skill-orb") &&
      !e.target.closest(".skill-detail-panel") &&
      !e.target.closest("button") &&
      !e.target.closest(".orbit-center")
    ) {
      hideDetail();
    }
  });

  // Category cards
  document.querySelectorAll(".category-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var cat = card.dataset.category;
      if (activeCategory === cat) {
        activeCategory = null;
        card.classList.remove("active");
        card.querySelectorAll(".prof-fill").forEach(function (f) {
          f.style.width = "0";
        });
        document.querySelectorAll(".skill-orb").forEach(function (e) {
          e.classList.remove("highlighted", "dimmed");
        });
        document.querySelectorAll(".orbit-ring-visual").forEach(function (r) {
          r.classList.remove("active");
        });
      } else {
        activeCategory = cat;
        document.querySelectorAll(".category-card").forEach(function (c) {
          c.classList.remove("active");
          c.querySelectorAll(".prof-fill").forEach(function (f) {
            f.style.width = "0";
          });
        });
        card.classList.add("active");
        var rings = {};
        document.querySelectorAll(".skill-orb").forEach(function (e) {
          if (e.dataset.category === cat) {
            e.classList.add("highlighted");
            e.classList.remove("dimmed");
            rings[e.dataset.ring] = true;
          } else {
            e.classList.remove("highlighted");
            e.classList.add("dimmed");
          }
        });
        document.querySelectorAll(".orbit-ring-visual").forEach(function (r) {
          if (rings[r.dataset.ring]) r.classList.add("active");
          else r.classList.remove("active");
        });
        setTimeout(function () {
          card.querySelectorAll(".prof-fill").forEach(function (f) {
            f.style.width = f.dataset.width + "%";
          });
        }, 100);
      }
      hideDetail();
    });
  });
})();

// === Scroll Reveal Observer ===
(function () {
  var revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();

// === Stat counter animation ===
(function () {
  var statEls = document.querySelectorAll(".stat-number");
  if (!statEls.length) return;
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.target, 10);
          var suffix = el.dataset.suffix || "";
          var duration = 1500;
          var start = 0;
          var startTime = null;
          function step(ts) {
            if (!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  statEls.forEach(function (el) {
    observer.observe(el);
  });
})();

// === Burger menu toggle ===
(function () {
  var btn = document.getElementById("burgerBtn");
  var menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    menu.classList.toggle("open");
    document.body.style.overflow = menu.classList.contains("open")
      ? "hidden"
      : "";
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      btn.classList.remove("active");
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
})();

// === Resize orbit radii ===
window._lastWidth = window.innerWidth;
window.addEventListener("resize", function () {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(function () {
    if (window.innerWidth !== window._lastWidth) {
      location.reload();
    }
  }, 300);
});

// Form functionality
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const formError = document.getElementById("formError");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button[type='submit']");
  const original = btn.textContent;
  btn.textContent = "SENDING...";
  btn.disabled = true;

  const res = await fetch(contactForm.action, {
    method: "POST",
    body: new FormData(contactForm),
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    contactForm.reset();
    formSuccess.classList.remove("hidden");
    formError.classList.add("hidden");
  } else {
    formError.classList.remove("hidden");
    formSuccess.classList.add("hidden");
  }

  btn.textContent = original;
  btn.disabled = false;
});
