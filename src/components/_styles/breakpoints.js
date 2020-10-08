export default {
    up(size) {
      const sizes = {
        xs: "575.98px",
        sm: "767.98px",
        md: "991.98px",
        lg: "1199.98px",
        xl: "1600px",
        custom: "37.5em",
        customX: "56.25em",

      };
      return `@media (min-width: ${sizes[size]})`;
    },
    down(size) {
      const sizes = {
        xs: "575.98px",
        sm: "767.98px",
        md: "991.98px",
        xg: "1024px",
        lg: "1199.98px",
        xl: "1600px"

      };
      return `@media (max-width: ${sizes[size]})`;
    }
  };