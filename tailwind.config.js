module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily:{
            'titr':['Lalezar','Noto Naskh Arabic UI'],
            'body':['Noto Naskh Arabic UI','Lalezar'],
            'product':['B Yekan','Noto Naskh Arabic UI','Open Sans'],
        }
    },
    variants: {
        extend: {},
    },
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [
      require('tw-elements/dist/plugin')
    ]
}
