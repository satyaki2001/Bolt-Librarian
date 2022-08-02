import React from "react";
import Navbar from "../components/navbar";

function Contact(){
    return(
<div>
<Navbar />

<div class="container">
    <div class="row ">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, This page is under construction!!. 
                </div>
                <div class="error-actions">
                    <a href="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Take Me Home </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default Contact