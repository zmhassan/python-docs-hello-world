import React, { Component } from 'react';
import Tables from './Tables';

class Panel extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-header">
                    Databases
                </div>
                <div class="card-body">
                    <h5 class="card-title">Instance Details</h5>
                    <p class="card-text">
                        <Tables />
                    </p>
                    <a href="/#view-details?id=1223" class="btn btn-primary">View Details</a>
                </div>
            </div>
        );
    }
}

export default Panel;