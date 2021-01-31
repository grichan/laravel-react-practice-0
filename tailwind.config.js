const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            space_gray: "#E3DFD3",
            indigo: colors.indigo,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
