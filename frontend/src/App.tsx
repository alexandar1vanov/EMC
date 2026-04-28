import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./ui/components/layout/Layout/Layout"
import HomePage from "./ui/pages/HomePage/HomePage";
import BooksPage from "./ui/pages/BooksPage/BooksPage";
import AuthorsPage from "./ui/pages/AuthorsPage/AuthorsPage";
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage";
import BookDetailsPage from "./ui/pages/BookDetailsPage/BookDetailsPage";
import AuthorDetailsPage from "./ui/pages/AuthorDetailsPage/AuthorDetailsPage";
import CountryDetailsPage from "./ui/pages/CountryDetailsPage/CountryDetailsPage";
import LoginPage from "./ui/pages/LoginPage/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/*✅ WRAPPER ROUTE */}
                <Route path="/" element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path="login" element={<LoginPage/>}/>

                    <Route path="books" element={<BooksPage/>}/>
                    <Route path="books/:id" element={<BookDetailsPage/>}/>

                    <Route path="authors" element={<AuthorsPage/>}/>
                    <Route path="authors/:id" element={<AuthorDetailsPage/>}/>

                    <Route path="countries" element={<CountriesPage/>}/>
                    <Route path="countries/:id" element={<CountryDetailsPage/>}/>

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;