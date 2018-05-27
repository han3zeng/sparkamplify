# React Webpack Starter

## React Server Side Rendering
So originally, I try to run dev mode only on webpack-dev-server. However, I face a problem on react-routing. Say my app has two path / and /about, if I request / first and click button to /about the app will work fine. But if I request /about from server directly, I only have info indicating that get /about not found. The reason is that the routing management is controlled by react-router on client side now. There are [several way](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually) to solve this problems. But I opt to sever [side rendering](https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4)(isormorphic app), so I have to replace webpack-dev-server with express dev-server.

### Problem
If we use React-router client side routing, we can not request specific path directly.

Solution:
1. Run dev use hashHistory ??
2. Run build use serverside rendering ??


### To Do
0. list!!
1. handle 404 routing by node server maybe ? (or just for production)
2. add styledcompoents
3. add sass + postcss
4. normalize redux state (partially done). Check [normalizer package](https://github.com/paularmstrong/normalizr) in future
5. form validation
6. add typescript
