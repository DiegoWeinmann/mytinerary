export function shadow(size = "sm") {
  if (size === "sm") {
    return "0px 2px 2px 2px rgba(0,0,0,.1)";
  }
  if (size === 'lg') {
    return "1px 2px 5px 3px rgba(0,0,0,.2)";
  }
}
