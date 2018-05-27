# React Webpack Starter

## Installing & Running

### Clone
```bash
git clone https://github.com/hanyulo/sparkamplify
```

### Install
```bash
npm install
```

### Run on Dev mode
```bash
// The project will run on localhost:8080/build/
npm run dev
```

### Run on Production mode
```bash
// The project will run on localhost:3000
npm run build
```

## Explanation

* How did you decide which technologies to use as part of your solution?
  * Redux: Single data flow + Do not re-fetch data which exist in redux store.
  * React: as you required.
  * webapck: bundle.
  * axios: http request.
  * redux-thunk: async request.
  * express: run local server.
  * DevEnv:
    * babel: es2015...
    * webpack loaders + plugins


* Are there any improvements you could make to your submission?

  In addition to to do list that I wrote in My Own Note section, there are still a lot of things need to be improved, e.g. I should polish the UI/UX and fully test whole project.  


* What would you do differently if you were allocated more time?

  I will care less about the development environment, project efficiency and focus more on finishing requirement.

## Details

I have different page flow from the requirement.

A. Home page just a home page

B. Search is like the home page that you want.

* Workflow
  1. click on search in nav bar.
  2. input search term and click on submit.
  3. jump to search result page.
  4. click on card to show details/
  5. click on arrow to go back to previous page or click on search to search page and start a new search. (Because of the react-router-redux the previous state will be preserved in store. )

* Tested case
 * Title: you||love,  Year: 2012, Type: Movie||Series

* Flaw
 1. I do not implement beautiful loading, error pages.
 2. All components have no footers.
 3. Only test few cases.
 4. Not really work on mobile device(style problem)

## To Reviewer

I have to mention that the reason that I would like to focus more on dev/build environment is that I have never built an react+redux+webpack+server-side-rendering starter/boilerplate from scratch. I want to seize the chance to try it. And to be honest, even though the project meet only few requirements I am satisfied with what I have done for now. I get familiar with webpack and figure out some mysterious setting that I didn't get it before.

For next few days I will probably try to accomplish server side rendering setting.


## My Own Note (You can just skip)

### Problem
If we use React-router for client side routing, we can not request specific path directly.

Solution:
Use hash history for now but need to change it to server-side rendering later.

### To Do
1. handle 404 routing by node server maybe ? (or just for production)
2. add styled components.
3. add sass + postcss
4. normalize redux state (partially done). Check [normalizer package](https://github.com/paularmstrong/normalizr) in future
5. form validation
6. add typescript
7. add SASS
8. direct card back to list.
9. sort all imports
10. add props.types
11. placeholder region
12. alternative text for images
13. Responsive (css/style)
14. Mocha for test.

### React Server Side Rendering
So originally, I try to run dev mode only on webpack-dev-server. However, I face a problem on react-routing. Say my app has two paths / and /about, if I request / first and click button to /about the app will work fine. But if I request /about from server directly, I only have info indicating that get /about not found. The reason is that the routing management is controlled by react-router on client side now. There are [several ways](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually) to solve this problems. But I opt to sever [side rendering](https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4)(isormorphic app), so I have to replace webpack-dev-server with express dev-server in future.
