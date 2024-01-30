


    const { defineConfig } = require('cypress')

    module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com/',
    },
    })


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//         baseUrl: 'https://www.saucedemo.com/'
//     },
//   },
// });
