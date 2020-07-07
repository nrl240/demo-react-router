# React Router Demo

## Live code for the React Router 101 lecture

### **Step 1** - Install `react-router-dom`
- Run `npm i react-router-dom` in the terminal
- Check that it was added to the `package.json` file successfully

### **Step 2** - First ingredient: `Router`
- In the `/src/index.js` file, add to the top:
  - `import { BrowserRouter as Router } from 'react-router-dom'`
- Wrap the entire React application in the `Router`
  ```js
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  )
  ```

### **Step 3** - Second ingredient: `Route`
- In the `/src/App.js` file, add to the top:
  - `import { Route } from 'react-router-dom'`
- Add `Route`s inside the App component just before the closing `<div>` tag:
  - Prompt students for the necessary properties (`path` and `component`)
  ```jsx
  <Route path='/' component={Bio} />
  <Route path='/projects' component={Projects} />
  <Route path='/experience' component={Experience} />
  <Route path='/contact' component={Contact} />
  ```
- Demonstrate "fuzzy" matching in the browser then incorporate the `exact` prop
  ```jsx
  <Route exact path='/' component={Bio} />
  ```
- Demonstrate using the Network tab in Chrome dev tools that, as is, clicking the links in the browser causes the page to refresh

### **Step 4** - Third ingredient: `Link`
- In the `/src/App.js` file, add `Link` to the imports from 'react-router-dom':
  - `import { Route, Link } from 'react-router-dom'`
- Update all of the list item elements' anchor tags to `Link`s:
  - Prompt students for the necessary property (`to`)
  ```jsx
  <div className='nav-name'>
    <li><Link to='/'>Noelle Laureano</Link></li>
  </div>
  <div className='nav-menu'>
    <li><Link to='/projects'>Projects</Link></li>
    <li><Link to='/experience'>Experience</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
  </div>
  ```
  
