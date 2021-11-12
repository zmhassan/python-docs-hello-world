
import React, { Component } from 'react';

class navigation extends Component {
    render() {
        return (
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <header class="masthead mb-auto">
                                <div class="inner">
                                        <h3 class="masthead-brand">MetaCloud</h3>
                                        <nav class="nav nav-masthead justify-content-center">
                                        <a class="nav-link active" href="/#home">  <i class="bi bi-house"></i> Home</a>
                                        <a class="nav-link" href="/#jobs"><i class="bi bi-box"></i> Jobs</a>
                                        <a class="nav-link" href="/#contact"> <i class="bi bi-send-x"></i>
                            Contact</a>
                                        </nav>
                                </div>
                    </header>
            </div>

        );
    }
}

export default navigation;