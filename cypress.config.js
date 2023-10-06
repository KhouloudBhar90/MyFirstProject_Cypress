const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // les variables d'environement Json => clés : valeur
    env: {
      baseUrl: "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F",
      user: "admin@yourstore.com",
      password: "admin",
      assert: "Dashboard",
    },
    // define le delai d'expiration d'une commande cypress par defaut est 4s
    defaultCommandTimeout: 10000, //10S
    // délais pour attendre le chargement d'uen page web
    pageLoadTimeout: 20000, //20S
    // lorsque le test échoue il va enregister une vidéo et la stocker dans le projet
    videao: true,
    // changer la résolution de la page
    viewportHeight: 1500,
    viewportHeight: 1300,
    // les test peuvent échouer à cause du message web security error
    chromeWebSecurity: false,
  },
});
