# React Router Demo

## Live code for the React Router 101 lecture
**Branch:** start-101

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
- In the `/src/App.js` file, add `Link` to the imports from `react-router-dom`:
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
  
## Live code for the React Router 201 lecture
**Branch:** start-201

### **Step 1** - Implicit `props`
- Demonstrate the `props` that are implicitly passed to components using the `<Route>` `component` syntax
  - In the `Experience` component (`/src/Components/Experience.js`), add props as a parameter and console log them:
  ```js
  const Experience = (props) => {
    console.log('Experience props >>', props)
    ...
  }
  ```

### **Step 2** - Using `render` to pass props
- Let's say we don't want to import our jobHistory inside of the `Experience` component, and we would prefer to have it "higher up" in our application and pass it "down" using React-Router's `<Route>` `render` syntax
  - Refactor the `App` component and demonstrate that no props are logging to the console with the following:
    ```jsx
    import jobHistory from './Data/jobHistory'
    
    function App() {
      return (
        <div className="App">

          {/* ... */}

          <Route path='/experience' render={ () => <Experience/> } />

        </div>
      )
    }
    ```
  - Refactor again, to pass `jobHistory` as a prop to the `Experience` component and show the `props` being logged to the console:
    - `App.js`
      ```jsx
      <Route
        path="/experience"
        render={() => <Experience jobHistory={jobHistory} />}
      />
      ```
    - `Experience.js`
      ```jsx
      const Experience = (props) => {
      console.log('Experience props >>', props)

        return (
          <div>
            <h3>Experience</h3>
            { props.jobHistory.map((job, i) => (
              <SingleJob key={i} job={job} />
            ))}
          </div>
        )
      }
      ```

### **Step 3** - Getting back our route props
- Notice with the refactor, we lost our implicit route props: `history`, `location`, and `match`
- Refactor the `render` method again to get them back:
  ```jsx
  <Route
    path="/experience"
    render={(routeProps) => (
      <Experience routeProps={routeProps} jobHistory={jobHistory} />
    )}
  />
  ```
- Demonstrate the spread operator so that the route props aren't nested:
  ```jsx
  <Route
    path="/experience"
    render={(routeProps) => (
      <Experience {...routeProps} jobHistory={jobHistory} />
    )}
  />
  ```
  
