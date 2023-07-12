import Header from './Header';
import Div from './Div';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
    return (
        <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/header" element={<Header />} />
                <Route path="/div" element={<Div />} />
                <Route path="/main" element={<Main data={props.data.PostPage} />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}