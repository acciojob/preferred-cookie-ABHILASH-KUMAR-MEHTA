//your JS code here. If required.
// Utility to set a cookie
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Utility to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return decodeURIComponent(val);
  }
  return null;
}

// Apply font preferences from cookies (if available)
function applyPreferences() {
  const fontSize = getCookie("fontsize") || "16";
  const fontColor = getCookie("fontcolor") || "#000000";

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Set form fields to match current settings
  document.getElementById("fontsize").value = fontSize;
  document.getElementById("fontcolor").value = fontColor;
}

// Save preferences and apply them immediately
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  applyPreferences();
});

// Apply on page load
applyPreferences();
