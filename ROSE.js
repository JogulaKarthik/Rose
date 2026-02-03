 const btn = document.getElementById("noBtn");

    // Center button on load
    function centerButton() {
      const rect = btn.getBoundingClientRect();
      btn.style.left = `${(window.innerWidth - rect.width) / 2}px`;
      btn.style.top = `${(window.innerHeight - rect.height) / 2}px`;
    }

    // Move button randomly
    function moveButton() {
      const rect = btn.getBoundingClientRect();
      const padding = 20;

      const maxX = window.innerWidth - rect.width - padding;
      const maxY = window.innerHeight - rect.height - padding;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
    }

    // Trigger when mouse is close
    document.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
      );

      if (distance < 120) {
        moveButton();
      }
    });

    // Mobile support
    btn.addEventListener("touchstart", moveButton);

    window.addEventListener("resize", centerButton);

    centerButton();