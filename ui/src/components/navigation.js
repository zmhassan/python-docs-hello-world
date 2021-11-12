import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (

<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Metacloud</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" href="/#home">  <i class="bi bi-house"></i> Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/#jobs"><i class="bi bi-box"></i> Cron Jobs</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/#jobs"><i class="bi bi-box"></i> Containers</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/#jobs"><i class="bi bi-box"></i> Databases</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/#jobs"><i class="bi bi-box"></i> Virtual Machine</a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="/#contact"> <i class="bi bi-send-x"></i>
                    Contact Support</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

        );
    }
}

export default Navigation;

