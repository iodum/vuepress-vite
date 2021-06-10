module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript',
    ],
    rules: {
        "vue/name-property-casing": [
            "error",
            "kebab-case"
        ],
    },
    plugins: ['vue'],
}
