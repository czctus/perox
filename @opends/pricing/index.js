<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OpenDS - Pricing</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 800px;
            margin: 50px auto;
        }

        h2 {
            margin-bottom: 30px;
        }
    </style>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="https://perox.dev/@opends/">OpenDS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://perox.dev/@opends/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://perox.dev/@opends/features">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://perox.dev/@opends/contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://perox.dev/@opends/pricing">Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Pricing Section -->
    <div class="container">
        <h2>Pricing</h2>
        <p>Welcome to the OpenDS pricing page. We offer flexible pricing plans to suit your needs.</p>
        <hr>

        <h4>Non-Registered Users</h4>
        <p>Non-registered users get 250 MB free storage.</p>
        <h4>Registered Users</h4>
        <p>Registered users can reserve one datastore and get 750 MB free storage.</p>

        <h4>Pricing Details</h4>
        <p>The pricing for data storage is calculated as follows:</p>
        <ul>
            <li>For reserved datastores: <strong>$0.05 * GB * Hours</strong></li>
            <li>For non-reserved datastores: <strong>2 * ($0.05 * GB * Hours)</strong></li>
        </ul>

        <h4>Price Calculator</h4>
        <form>
            <div class="form-group">
                <label for="gb">GB</label>
                <input type="number" class="form-control" id="gb" placeholder="Enter GB">
            </div>
            <div class="form-group">
                <label for="hours">Hours</label>
                <input type="number" class="form-control" id="hours" placeholder="Enter Hours">
            </div>
            <button type="button" class="btn btn-primary" onclick="calculatePrice()">Calculate</button>
        </form>
        <div id="result" class="mt-3"></div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- Custom Script -->
    <script>
        function calculatePrice() {
            var gb = parseFloat(document.getElementById("gb").value);
            var hours = parseFloat(document.getElementById("hours").value);
            var reservedPrice = 0.05 * gb * hours;
            var nonReservedPrice = 2 * reservedPrice;
            document.getElementById("result").innerHTML = "<p>Reserved Price: $" + reservedPrice.toFixed(2) + "</p>" +
                "<p>Non-Reserved Price: $" + nonReservedPrice.toFixed(2) + "</p>";
        }
    </script>
</body>

</html>
