# HVK
Hidden Valley Kings is a social platform where people can come together to learn, share, and practice real world solutions to their problems that are backed by science and experience.

#Things I learned from this project
- Start a production-ready project using Vue CLI.
- Manage state for the app using Vuex. You'll also understand why a central store is important for building large-scale apps.
- Maintain reactivity within your app by utilizing built-in Vuex features.
- Authenticate routes with vue-router.
- Read/write to a database using Firebase's Cloud Firestore.
- Set up authentication using Firebase.
- Leverage components, one of the more powerful features of Vue.js.
- Familiarize myself with core Vue.js concepts.

#Initial Setup With Vue CLI
For your reference, please see the Vue CLI documentation. Follow these steps to install and initialize via Vue CLI 3:

Step 1: Install Vue CLI 3.

```
npm install -g @vue/cli
```
Step 2: Initialize your project with Vue CLI 3.

```
vue create vue-app
```

Step 3: Configure Vue CLI 3.

Choose "Manually select features." Then select "babel," "Router," "Vuex," "CSS Pre-processors," and "linter/formatter." You will be prompted to select your preprocessor. Choose whichever you like; we use sass via node instead of dart.

Since we will be using the default linter for error prevention only, you might want to add a rule to your .eslintrc.js file that turns off a common linter error ('value' is defined but never used).

```javascript
// the code - add the 'vue/no-unused-components' rule
rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'vue/no-unused-components': 'off'
}
```

Step 4: Serve up a localhost.

Once everything is installed, navigate to the root folder and run `npm run serve` in the terminal to serve up a localhost.
