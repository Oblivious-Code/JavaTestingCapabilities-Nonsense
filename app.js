
Object.assign(document.body.style, {
  margin: "0",
  padding: "0",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  backgroundColor: "#ffffff",
  color: "#222222",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh"
});

// 2. Main container
const container = document.createElement("main");
Object.assign(container.style, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "600px",
  padding: "20px",
  boxSizing: "border-box"
});

// 3. Logo & Brand Title Wrapper
const brandWrapper = document.createElement("div");
Object.assign(brandWrapper.style, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "28px"
});

// DuckDuckGo-style Orange Circle Icon
const logoCircle = document.createElement("div");
Object.assign(logoCircle.style, {
  width: "84px",
  height: "84px",
  borderRadius: "50%",
  backgroundColor: "#DE5833",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "14px",
  boxShadow: "0 4px 12px rgba(222, 88, 51, 0.25)"
});

// Simple SVG Duck Silhouette inside the circle
logoCircle.innerHTML = `
  <svg width="46" height="46" viewBox="0 0 24 24" fill="white">
    <path d="M12 3C9.5 3 7.5 4.8 7.5 7.2c0 1.3.6 2.5 1.5 3.3-2.5.8-4.5 2.8-4.5 5.5 0 2.8 2.5 5 6.5 5h4c3.3 0 5.5-2 5.5-4.8 0-2.1-1.3-3.9-3.2-4.6.4-.8.7-1.7.7-2.6 0-3.3-2.7-6-6-6zm1.5 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
`;

const title = document.createElement("h1");
title.textContent = "DuckDuckGo";
Object.assign(title.style, {
  fontSize: "28px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "-0.5px"
});

brandWrapper.append(logoCircle, title);

// 4. Search Form
const searchForm = document.createElement("form");
Object.assign(searchForm.style, {
  display: "flex",
  width: "100%",
  height: "48px",
  border: "1px solid #d0d0d0",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
  transition: "box-shadow 0.2s ease"
});

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search without being tracked...";
searchInput.ariaLabel = "Search without being tracked";
Object.assign(searchInput.style, {
  flex: "1",
  border: "none",
  outline: "none",
  padding: "0 16px",
  fontSize: "16px",
  color: "#222222"
});

const searchButton = document.createElement("button");
searchButton.type = "submit";
searchButton.innerHTML = "🔍";
Object.assign(searchButton.style, {
  width: "52px",
  border: "none",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  fontSize: "18px",
  transition: "background-color 0.2s"
});

// Hover effect on button
searchButton.addEventListener("mouseenter", () => {
  searchButton.style.backgroundColor = "#66AB57";
});
searchButton.addEventListener("mouseleave", () => {
  searchButton.style.backgroundColor = "#ffffff";
});

// Submit handler to perform a real DuckDuckGo search
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    window.location.href = `https://duckduckgo.com{encodeURIComponent(query)}`;
  }
});

searchForm.append(searchInput, searchButton);

// 5. Privacy Tagline & CTA Button
const tagline = document.createElement("h2");
tagline.textContent = "Tired of being tracked online? We can help.";
Object.assign(tagline.style, {
  fontSize: "20px",
  fontWeight: "600",
  textAlign: "center",
  marginTop: "32px",
  marginBottom: "10px"
});

const subtext = document.createElement("p");
subtext.textContent = "Get seamless privacy protection on your browser for free with one download.";
Object.assign(subtext.style, {
  fontSize: "15px",
  color: "#555555",
  textAlign: "center",
  margin: "0 0 24px 0",
  lineHeight: "1.5"
});

const ctaButton = document.createElement("button");
ctaButton.textContent = "Add DuckDuckGo to Your Browser";
Object.assign(ctaButton.style, {
  backgroundColor: "#678FFF",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  padding: "12px 24px",
  fontSize: "15px",
  fontWeight: "600",
  cursor: "pointer"
});

// 6. Assemble the entire page
container.append(brandWrapper, searchForm, tagline, subtext, ctaButton);
document.body.appendChild(container);
