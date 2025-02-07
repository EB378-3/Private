"use client";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RefineThemes } from "@refinedev/mui";
import Cookies from "js-cookie";
import React, {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

type ColorModeContextProviderProps = {
  defaultMode?: string;
};

export const ColorModeContextProvider: React.FC<PropsWithChildren<ColorModeContextProviderProps>> = ({ children, defaultMode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState(defaultMode || "light");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const systemTheme = useMediaQuery(`(prefers-color-scheme: dark)`);

  useEffect(() => {
    if (isMounted) {
      const theme2 = Cookies.get("theme") || (systemTheme ? "dark" : "light");
      setMode(theme2);
    }
  }, [isMounted, systemTheme]);

  const toggleTheme = () => {
    const nextTheme = mode === "light" ? "dark" : "light";

    setMode(nextTheme);
    Cookies.set("theme", nextTheme);
  };
 const theme = createTheme(mode === "light" ? RefineThemes.Blue : RefineThemes.BlueDark, {
      primary: { // Blue
        main: '#2533be', //HSB 235, 81, 75
        light: '#515BCD', //HSB 235, 60, 80
        dark: '#000EA8', //HSB 235, 100, 65 (Use this as the Colour Matching Text.)
        contrastText: '#ffffff',
      },
      secondary: { // Pinkish
        main: '#C125A2', //HSB 312, 81, 75
        light: '#CD51B4', //HSB 312, 60, 80
        dark: '#A80087', //HSB 312, 100, 65 (Use this as the Colour Matching Text.)
        contrastText: '#000000',
      },
      error: { // Red
        main: '#f44336',
        light: '#e57373',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      warning: { // Orange
        main: '#ffa726',
        light: '#ffb74d',
        dark: '#f57c00',
        contrastText: '#fff',
      },
      info: { // Info Blue
        main: '#29b6f6',
        light: '#4fc3f7',
        dark: '#0288d1',
        contrastText: '#fff',
      },
      success: { // Green
        main: '#66bb6a',
        light: '#81c784',
        dark: '#388e3c',
        contrastText: '#fff',
      }
    })

  return (
    <ColorModeContext.Provider
      value={{
        setMode: toggleTheme,
        mode,
      }}
    >
      <ThemeProvider
        // you can change the theme colors here. example: mode === "light" ? RefineThemes.Magenta : RefineThemes.MagentaDark
        theme={theme}
      >
        <CssBaseline />
        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};