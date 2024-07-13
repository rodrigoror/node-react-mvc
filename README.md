Hi!
--

This project isn't really a module, it is simple MVC framework in Node.

To use it, you must simply copy my files and directories and type `npm start`.

File structure
---

**app.js** - Server init script

**app /**
 - **controllers /** - Write your MVC controllers there!
    - **MainController.js** - Controller example
 - **core /** - MVC core components
   -  **App.js** - Asset managing methods
   -  **View.js** - Rendering helper methods
   -  **Controller.js** - Controller loading helper methods
   -  **Router.js** - Routing core
   -  **DBase.js** - Connect to MongoDB
   -  **Settings.js** - MVC app manifest
 - **views /** - Write your MVC views there!
   -  **errors /** - Error page views
      - **404.jsx** - 404 error page
   - **helloWorld.jsx** - Hello world page
   - **layout.jsx** - Base page (includes everytime)
   - **main.jsx** - Main page
 - **models /** - Write your MVC models there!
   -  **Auth.js** - Example auth methods (you can use it)
 - **bootstrap.js** - Router launcher

**assets /** - place your frontend assets there
 - **js /** - your scripts
 - **css /** - your css
 - **less /** - your less
 - **libs /** - different frontend css/js libraries
 
 ----