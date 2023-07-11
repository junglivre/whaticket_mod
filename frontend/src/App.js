import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

const App = () => {
	const [locale, setLocale] = useState();

  const theme = createTheme(
    {
      scrollbarStyles: {
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#e8e8e8',
        },
      },
      palette: {
        primary: { main: '#0872b9' },
        danger: { main: '#525252' },
      },

      barraSuperior: {
        primary: { main: "linear-gradient(to right, #044842, #044842 , #ffffff)" },
        secondary: { main: "#ffffff" },
      },

      barraLateral: {
        primary: { main: "#ffffff" },
      },

      icons: {
        primary: { main: "#044842" }
      },
      textColorMenu: {
        primary: { main: "#000000" },
        secondary: { main: "#044842" }
      
      },    },
    locale
  );

	useEffect(() => {
		const i18nlocale = localStorage.getItem("i18nextLng");
		const browserLocale =
			i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

		if (browserLocale === "ptBR") {
			setLocale(ptBR);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
};

export default App;
