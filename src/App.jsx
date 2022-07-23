import React from 'react';
import './index.css';
import Card from './Card';
import Footer from './Footer';
import Sdata from './Sdata';

function ncard(data) {
    return (
        <div class="col-md-4">
            <Card name={data.namee}
                imgsrc={data.imgsrc}
                content={data.content}
                link={data.link}
            />
        </div>
    );
}

function App() {
    return (
        <>
            <h1><b>Top 5 Netflix Series</b></h1>
            <div class="row">
                {Sdata.map(ncard)}
            </div>
            <Footer />
        </>
    );
}

export default App;