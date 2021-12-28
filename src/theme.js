import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
    },
    fontSizes: {
      body: 16,
      subheading: 18,
    },
    fonts: {
      main: Platform.select({
        android: 'sans-serif',
        ios: 'Arial',
        default: 'System'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    marginBottoms: {
      small: 5,
      medium: 10,
      large: 20
    }
  };
  
  export default theme;