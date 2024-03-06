import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true
  },
  styles: {
    global:{
      body: {
        margin: 0, 
        "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        "background-color": "#1a1a1a"
      },

      "h1, h2, h3, h4, h5, h6, p, div, span, button": {
        color: "white",
        margin: 0
      },
      code: {
        "font-family": "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
      }
    }
  }
};

export default extendTheme(theme);