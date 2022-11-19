const isBrowser = typeof window !== "undefined";
export const customLoader = ({ src, width, quality }) => {
  if (src.includes("http")) {
    return src;
  } else {
    let origin = "http://localhost:3000";
    if (isBrowser) {
      origin = document.location.origin;
    }
    return `${origin}/${src}?w=${width}&q=${quality || 75}`;
  }
};