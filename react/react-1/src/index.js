import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import AutorBox from './components/Autor';
import Home from './components/Home';
import LivroBox from './components/Livro';
import './index.css';


ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/autor" component={AutorBox} />
                <Route path="/livro" component={LivroBox} />
            </Switch>
        </App>
    </Router>
    ), document.getElementById('root'));

registerServiceWorker();
