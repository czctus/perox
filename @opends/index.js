<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OpenDS Landing Page</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .jumbotron {
            background-color: #f8f9fa;
            padding: 80px 0;
            margin-bottom: 0;
        }

        .feature-box {
            border: 1px solid #ddd;
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            margin-bottom: 30px;
        }

        .feature-icon {
            font-size: 36px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">OpenDS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Jumbotron -->
    <div class="jumbotron text-center">
        <h1 class="display-4">Welcome to OpenDS</h1>
        <p class="lead">OpenDS is an open-source data storage platform</p>
        <hr class="my-4">
        <p>It's built to be simple, reliable, and scalable.</p>
    </div>

    <!-- Features -->
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="feature-box">
                    <i class="fas fa-database feature-icon"></i>
                    <h3>Scalable Storage</h3>
                    <p>Store and manage your data with ease, whether it's small-scale or enterprise-level.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="feature-box">
                    <i class="fas fa-lock feature-icon"></i>
                    <h3>Secure</h3>
                    <p>Your data is safe with OpenDS. We prioritize security at every level.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="feature-box">
                    <i class="fas fa-code feature-icon"></i>
                    <h3>Open-Source</h3>
                    <p>OpenDS is built by the community, for the community. Contribute and customize as you like.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
        <p>&copy; 2024 OpenDS. All Rights Reserved.</p>
    </footer>

    <!-- Bootstrap JS and Font Awesome -->
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
