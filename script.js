// theme toggle (light / dark)
const rootEl = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");
const SUN =
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.4"/><path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.13 1.13M4.23 11.67L3.1 12.9M12.9 12.9l-1.13-1.13M4.23 4.33L3.1 3.1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';
const MOON =
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 9.3A5.6 5.6 0 1 1 6.7 2.5a4.4 4.4 0 0 0 6.8 6.8z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>';

function applyTheme(theme) {
  rootEl.setAttribute("data-theme", theme);
  themeBtn.innerHTML = theme === "dark" ? SUN : MOON;
  themeBtn.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
}
applyTheme(rootEl.getAttribute("data-theme") || "dark");

themeBtn.addEventListener("click", () => {
  const next = rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

// mobile nav (simple show/hide of links as a stacked menu)
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = navLinks.style.display === "flex";
  navLinks.style.display = open ? "none" : "flex";
  navLinks.style.cssText += open
    ? ""
    : "position:absolute;top:60px;left:0;right:0;flex-direction:column;background:var(--surface);padding:20px 28px;border-bottom:1px solid var(--border);gap:18px;";
});

// scroll reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  },
  { threshold: 0.15 },
);
document
  .querySelectorAll(".reveal, #hero-trace")
  .forEach((el) => io.observe(el));

// tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const panels = {
  code: document.getElementById("tab-code"),
  arch: document.getElementById("tab-arch"),
  chat: document.getElementById("tab-chat"),
};
const dashFile = document.getElementById("dash-file");
const fileNames = { code: "retry.ts", arch: "architecture", chat: "ask" };
let chatTyped = false;

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    Object.values(panels).forEach((p) => p.classList.remove("active"));
    const key = btn.dataset.tab;
    panels[key].classList.add("active");
    dashFile.textContent = fileNames[key];
    if (key === "chat" && !chatTyped) {
      typeReply();
      chatTyped = true;
    }
    if (key === "arch") drawArch();
  });
});

// typed chat reply
const replyText =
  "Retrying 3 times with exponential backoff protects orders from transient Stripe timeouts. A single failed attempt was causing checkout drop-offs during traffic spikes — this was added after the March 2023 incident, in commit a3f9c1.";
function typeReply() {
  const el = document.getElementById("bot-reply");
  let i = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    el.textContent = replyText;
    return;
  }
  const cursor = document.createElement("span");
  cursor.className = "cursor-blink";
  function tick() {
    if (i <= replyText.length) {
      el.textContent = replyText.slice(0, i);
      el.appendChild(cursor);
      i += 2;
      setTimeout(tick, 14);
    } else {
      cursor.remove();
    }
  }
  tick();
}

// architecture line draw-in
function drawArch() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("#arch-svg .arch-line").forEach((path, idx) => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = reduced ? 0 : len;
    if (!reduced) {
      path.style.transition = "none";
      void path.offsetWidth;
      path.style.transition = `stroke-dashoffset 1s ease ${idx * 0.15}s`;
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = 0;
      });
    }
  });
}
