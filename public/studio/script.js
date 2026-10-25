/**
 * AJITH A - SCROLLYTELLING VIDEO RESUME CONTROLLER
 * Synchronizes a continuous 10.0-second 16:9 character video with page scroll and UI phases.
 */

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('characterVideo');
  const hudProgressFill = document.getElementById('hudProgressFill');
  const hudProgressBar = document.querySelector('.hud-progress-bar');
  const currentTimeDisplay = document.getElementById('currentTimeDisplay');
  const stagePhaseLabel = document.getElementById('stagePhaseLabel');
  const sceneBtns = document.querySelectorAll('.scene-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.scroll-section');
  const playbackToggleBtn = document.getElementById('playbackToggleBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');

  const VIDEO_DURATION = 10.0;
  let targetTime = 0.0;
  let currentRenderTime = 0.0;
  let isAutoPlaying = false;
  let isDraggingHUD = false;

  // Phase Definitions matching the physical video actions
  const PHASES = [
    { start: 0.0, end: 2.5, label: "PHASE: 01 // HERO POSE & DIRECTION", sectionId: "hero" },
    { start: 2.5, end: 5.0, label: "PHASE: 02 // SEATING TRANSITION", sectionId: "about" },
    { start: 5.0, end: 7.5, label: "PHASE: 03 // ACTIVE WORK & TYPING", sectionId: "experience" },
    { start: 7.5, end: 10.0, label: "PHASE: 04 // FINAL SMILE & STAND", sectionId: "contact" }
  ];

  // 1. Calculate Target Video Time from Scroll Position
  function calculateTargetTimeFromScroll() {
    if (isAutoPlaying) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - windowHeight;

    if (docHeight <= 0) return;

    // Linear global progress (0.0 to 1.0)
    const rawProgress = Math.min(Math.max(scrollY / docHeight, 0), 1);
    targetTime = rawProgress * VIDEO_DURATION;

    // Highlight current active section in nav
    updateActiveSectionOnScroll(scrollY, windowHeight);
  }

  function updateActiveSectionOnScroll(scrollY, windowHeight) {
    let currentActiveId = 'hero';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // If section is in the middle third of the viewport
      if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.2) {
        currentActiveId = section.id;
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentActiveId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // 2. Smooth Lerp Loop via requestAnimationFrame
  function renderLoop() {
    if (!isAutoPlaying) {
      // Smoothly interpolate towards targetTime
      const delta = targetTime - currentRenderTime;
      if (Math.abs(delta) > 0.005) {
        currentRenderTime += delta * 0.12; // Easing speed
        if (video.readyState >= 1) {
          video.currentTime = currentRenderTime;
        }
      }
    } else {
      currentRenderTime = video.currentTime;
      targetTime = video.currentTime;
      if (video.currentTime >= VIDEO_DURATION - 0.05) {
        video.currentTime = 0; // Loop seamlessly
      }
    }

    updateHUD(currentRenderTime);
    requestAnimationFrame(renderLoop);
  }

  // 3. Update HUD Display
  function updateHUD(time) {
    const clampedTime = Math.min(Math.max(time, 0), VIDEO_DURATION);
    const progressPercent = (clampedTime / VIDEO_DURATION) * 100;

    // Update Progress Bar & Timer
    hudProgressFill.style.width = `${progressPercent}%`;
    currentTimeDisplay.textContent = `${clampedTime.toFixed(2)}s`;

    // Determine current phase
    const activePhase = PHASES.find(p => clampedTime >= p.start && clampedTime < p.end) || PHASES[PHASES.length - 1];
    stagePhaseLabel.textContent = activePhase.label;

    // Update Scene Pills active state
    sceneBtns.forEach(btn => {
      const btnTime = parseFloat(btn.dataset.time);
      if (Math.abs(clampedTime - btnTime) < 1.25) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // 4. Quick Scene Buttons Click Handler
  sceneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const time = parseFloat(btn.dataset.time);
      seekToTime(time);
      scrollToMatchingSection(time);
    });
  });

  // 5. Nav Links Click Handler
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const timeStr = link.getAttribute('data-time');
      if (timeStr) {
        const time = parseFloat(timeStr);
        seekToTime(time);
      }
    });
  });

  function seekToTime(time) {
    targetTime = time;
    if (isAutoPlaying) {
      pauseVideo();
    }
  }

  function scrollToMatchingSection(time) {
    const phase = PHASES.find(p => time >= p.start && time < p.end) || PHASES[0];
    const targetElement = document.getElementById(phase.sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // 6. Interactive HUD Progress Bar Click / Scrub
  hudProgressBar.addEventListener('click', (e) => {
    const rect = hudProgressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.min(Math.max(clickX / rect.width, 0), 1);
    const scrubTime = ratio * VIDEO_DURATION;
    seekToTime(scrubTime);
    scrollToMatchingSection(scrubTime);
  });

  // 7. Auto Play / Pause Toggle
  function playVideo() {
    isAutoPlaying = true;
    video.play().catch(() => {});
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  }

  function pauseVideo() {
    isAutoPlaying = false;
    video.pause();
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }

  playbackToggleBtn.addEventListener('click', () => {
    if (isAutoPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  });

  // 8. Event Listeners
  window.addEventListener('scroll', calculateTargetTimeFromScroll, { passive: true });
  window.addEventListener('resize', calculateTargetTimeFromScroll, { passive: true });

  // Initialize Video
  video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
    calculateTargetTimeFromScroll();
  });

  // Start smooth loop
  calculateTargetTimeFromScroll();
  requestAnimationFrame(renderLoop);
});
