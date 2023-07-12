import Cards from "./cards"
import Months from "./months";
import Contact from "./contact";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './image/nov12.jpg';
import './image/nov11.jpg';


const Main = (props) => {
    return (
        <main className="container">
            <div clasNames="p-4 p-md-5 mb-4 rounded text-body-emphasis accent">
                <div className="col-lg-6 px-0">
                    <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and
                        efficiently about what’s most interesting in this post’s contents.</p>
                    <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                            <h3 className="mb-0">Featured post</h3>
                            <div className="mb-1 text-body-secondary">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                                lead-in to additional content.</p>
                            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg className="bi">
                                    <use xlink: href="#chevron-right"></use>
                                </svg>
                            </a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="image/nov12.jpg"
                                alt="" width="350px" height="270px"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                            <h3 className="mb-0">Post title</h3>
                            <div className="mb-1 text-body-secondary">Nov 11</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                                additional content.</p>
                            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg className="bi">
                                    <use xlink: href="#chevron-right"></use>
                                </svg>
                            </a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="image/nov11.jpg"
                                alt="" width="350px" height="270px"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <Routes>
                <Route path="/cards" element={<Cards posts={props.data.posts} />} />
            </Routes>

                <div className="col-md-4">
                    <div className="position-sticky" style="top: 2rem;">
                        <div className="p-4 mb-3 bg-body-tertiary rounded">
                            <h4 className="fst-italic accent-card">About</h4>
                            <p className="mb-0 accent-card">Customize this section to tell your visitors a little bit about your
                                publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>

                        <div>
                            <h4 className="fst-italic">Recent posts</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                                        href="#">
                                        <div className="col-lg-8">
                                            <h6 className="mb-0 accent-color">Example blog post title</h6>
                                            <small className="accent-color">January 15, 2023</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                                        href="#">

                                        <div className="col-lg-8">
                                            <h6 className="mb-0 accent-color">This is another blog post title</h6>
                                            <small className="accent-color">January 14, 2023</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                                        href="#">

                                        <div className="col-lg-8">
                                            <h6 className="mb-0 accent-color">Longer blog post title: This one has multiple
                                                lines!</h6>
                                            <small className="accent-color">January 13, 2023</small>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    <Months />
                    <Contact />


                    </div>
                </div>
        </main>
    )
}

export default Main;