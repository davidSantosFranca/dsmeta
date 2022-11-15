import createPalette from '@mui/material/styles/createPalette';

import createTheme from '@mui/material/styles/createTheme';


declare module '@mui/material/styles/createPalette' {
  interface Palette {
    red: {medium: string};
  }

  interface PaletteOptions {
    red?: {medium: string};
  }
}

const palette = createPalette({
  red:{medium: '#FF6B72'},
  background:{default:'#000000'},
  primary:{
    main:'#E9E9E9'
  }
});

export const theme = createTheme({
  palette: palette,
  shape:{
    borderRadius:10
  },
})