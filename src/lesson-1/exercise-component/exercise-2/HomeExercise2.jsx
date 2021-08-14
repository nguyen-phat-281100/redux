import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

class HomeExercise2 extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                    <div className="col-4 pr-0">
                        <Navigation />
                    </div>
                    <div className="col-8 pl-0">
                        <Content />
                    </div>
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeExercise2;