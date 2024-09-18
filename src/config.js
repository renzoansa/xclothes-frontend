export const isDevMode = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const apiUrl = isDevMode()
  ? "http://localhost:4000"
  : "https://portfolio-xclothes-backend.onrender.com";
