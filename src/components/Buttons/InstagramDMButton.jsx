import React from "react";

// Instagram DM Button Component
const InstagramDMButton = ({ username }) => {
  const handleInstagramDM = () => {
    const appUrl = `instagram://direct/new?username=${username}`;
    const webUrl = `https://www.instagram.com/direct/new/?username=${username}`;

    // Check if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Try to open the Instagram app
      window.location.href = appUrl;

      // Fallback to web link after a short delay
      setTimeout(() => {
        window.open(webUrl, "_blank");
      }, 500);
    } else {
      // Desktop - open web link
      window.open(webUrl, "_blank");
    }
  };

  return (
    <button
      onClick={handleInstagramDM}
      className="instagram-dm-button"
      style={{
        backgroundColor: "#E1306C",
        color: "white",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        marginLeft: "auto", // Push button to right
      }}
    >
      Message me on Instagram
    </button>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav
      className="navbar-container"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        background: "#f8f8f8",
      }}
    >
      {/* Example logo / brand */}
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>My Website</div>

      {/* Instagram DM Button */}
      <InstagramDMButton username="yourusername" />
    </nav>
  );
};

export default Navbar;
