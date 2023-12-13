import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = () => ({

    fuchsia: {
        100: "#ffccff",
        200: "#ff99ff",
        300: "#ff66ff",
        400: "#ff33ff",
        500: "#ff00ff",
        600: "#cc00cc",
        700: "#990099",
        800: "#660066",
        900: "#330033"
    },
    defBG: "#fcfcfc",
    grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
    },
    primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
    },
    greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
    },
    redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
    },
    blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
    },

})

export const themeSettings = () => {
    const colors = tokens()
    return {
        palette: {

            primary: {
                main: colors.fuchsia[500],
            },
            secondary: {
                main: colors.greenAccent[500],
            },
            neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100]
            },
            background: {
                default: colors.defBG,
            }

        },
        components: {
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        color: "#fff"
                    }
                }
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        color: "#fff"
                    }
                }
            },
            MuiTextField: {
                defaultProps: {
                    color: "primary",
                },
            },
            MuiSelectField: {
                defaultProps: {
                    color: "primary",
                },
            },
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    }
}

export const ColorThemeContext = createContext({
    toggleColorTheme: () => { }
})

export const useTheme = () => {
    const [theme, setTheme] = useState("light")

    const colorTheme = useMemo(
        () => ({
            toggleColorTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }), [])

    const matTheme = useMemo(
        () => createTheme(themeSettings(theme)), [theme])

    return [matTheme, colorTheme]
}