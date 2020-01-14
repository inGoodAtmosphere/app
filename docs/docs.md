# Documentation

Welcome to our documentation, here you can find all our function explanations

## Files

Here you will be able to find each file with short description of its content.

- **docs** - place for all of our documentation
  - **docs.md** - mother of all docs, here you will be able to find all our files and shorts descs of their contents
- **public** - Contains HTML and manifest.json. Use only when: https://create-react-app.dev/docs/using-the-public-folder/#when-to-use-the-public-folder
  - **index.html** - you can tweak it, for example, to set the page title. The <script> tag with the compiled code will be added to it automatically during the build process
  - **manifest.json** - required when create PWA. Contains all settings about mobile/desktop app
  - **robots.txt** - tells search engine crawlers which pages or files the crawler can or can't request from your site. This is used mainly to avoid overloading your site with requests
- **src** - main directory which contains all source code.
  - **components** - React components; each component should be in separate file
    - **Footer.js** -
    - **Hamburger.js** - Hamburger menu,
    - **Header.js** - 
    - **InfoCard.js** - component which is use each time when display square with header and content
    - **LandingPage.js** - home page
    - **LoginModal.js** - popup window when you try login. Styling here: https://github.com/reactjs/react-modal/tree/master/docs/styles
    - **Menu.js** - sliding navigation
    - **RegisterModal.js** - popup window when you try login. Styling here: https://github.com/reactjs/react-modal/tree/master/docs/styles
  - **img** - images directory. When you try use img you should import image directly to component then assign that variable to src img's attribute, like this:
  ```javascript
   import image from '../img/photo.png';
  
  ...
  
   <img src={image} alt="alt" />
  ```
  - **routers** - set of each React Routers
    - **AppRouter.js** - Parent component; within import each component;
  - **styles** - CSS styles; 1 stylesheet should refers 1 component
    - **base** - contains global rules and variables set
      - **_base.scss** - contains global rules e.g. background color or reset text decoration for each a tag
       - **_settings.scss** - variables set
    - **components** - here create files for each component which you styling
    - **index.scss** - this file imports each stylesheet; when you create new scss file remember to import that to this file  
  - **index.js** - main file. Imports main component, main stylesheet and it's responsible for screen rendering
- **.eslintrc** - ESlint configuration
- **.gitignore** - contains filetypes which shouldn't be in the repo
- **README.MD** - Readme about our app
- **package-lock.json** - contains information about project (name, version, etc) and it lists the packages that project is dependent on with lock the versions of dependencies that are installed. (Node.js thing)
- **package.json** - contains information about project (name, version, etc) and it lists the packages that project is dependent on. (Node.js thing)
