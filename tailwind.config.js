module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        //define font groups
        fontFamily:{
            'titr':['Lalezar','Noto Naskh Arabic UI'],
            'body':['Noto Naskh Arabic UI','Lalezar'],
            'product':['BTraffic','Noto Naskh Arabic UI','Open Sans'],
        }
    },
    variants: {
        extend: {},
    },
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [
      require('tw-elements/dist/plugin'),
      require('@tailwindcss/forms')
    ]
}
