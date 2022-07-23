import React from 'react';
import './index.css';
import Card from './Card';
import Footer from './Footer';
import Sdata from './Sdata';


function App() {
    return (
        <>
            <h1><b>Top 5 Netflix Series</b></h1>
            <div class="row">
                <div class="col-md-4">
                    <Card name={Sdata[0].namee}
                    imgsrc = {Sdata[0].imgsrc}
                    content = {Sdata[0].content}
                    link = {Sdata[0].link}
                    />
                </div>

                <div class="col-md-4">
                    <Card name={Sdata[1].namee}
                    imgsrc = {Sdata[1].imgsrc}
                    content = {Sdata[1].content}
                    link = {Sdata[1].link}
                    />
                </div>

                <div class="col-md-4">
                    <Card name={Sdata[2].namee}
                    imgsrc = {Sdata[2].imgsrc}
                    content = {Sdata[2].content}
                    link = {Sdata[2].link}
                    />
                </div>

                <div class="col-md-4">
                    <Card name={Sdata[3].namee}
                    imgsrc = {Sdata[3].imgsrc}
                    content = {Sdata[3].content}
                    link = {Sdata[3].link}
                    />
                </div>

                <div class="col-md-4">
                    <Card name={Sdata[4].namee}
                    imgsrc = {Sdata[4].imgsrc}
                    content = {Sdata[4].content}
                    link = {Sdata[4].link}
                    />
                </div>
                
            </div>
            
            <Footer/>
        </>
    );
}

export default App;