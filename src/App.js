import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import LoginPage from './components/loginPage';
import SearchFrom from './components/SearchFrom';
import RecipeList from './components/RecipeList';
import './app.css'
function App() {
    const APP_ID = '933a95c8';
    const API_KEY = 'b300433be262962cecc111dc09bdb41e';

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    return (
        <Router>
            <div className="App">
                <Routes> {/* Wrap your Routes inside the <Routes> element */}
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/search" element={<SearchFrom getQuerry={(q) => setQuery(q)} />} />
                </Routes>
                {query ?
                    <RecipeList recipes={recipes} />
                    :
               ''
                }
            </div>
        </Router>
    )
}

export default App;
