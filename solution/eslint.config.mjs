import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    {
        ignores: [
            "**/test/*",
            "**/resources/db/migrations/*",
            "**/.webpack/*"
        ]
    },
    {
        files: ["**/*.js"],

        languageOptions: {sourceType: "commonjs" },
    },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    {
        rules: {
            "no-useless-catch": "off", // Will be super-seeded by error handling middleware which will fix all issues
        },
    },
];