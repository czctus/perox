<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Converter</title>
</head>
<body>
    <h1>File Converter</h1>
    <form id="conversionForm" enctype="multipart/form-data" action="https://api.perox.dev/convert/" method="post">
        <label for="fileInput">Choose a file:</label><br>
        <input type="file" id="fileInput" name="file"><br><br>
        <label for="convertType">Convert to:</label><br>
        <input type="text" id="convertType" name="type" placeholder="Enter file type (e.g., png, gif)" required><br><br>
        <input type="submit" value="Convert">
    </form>

    <script>
        document.getElementById("conversionForm").addEventListener("submit", function(event) {
            event.preventDefault(); // prevent the default form submission

            const form = event.target;
            const formData = new FormData(form);
            const convertType = document.getElementById("convertType").value;

            formData.append("type", convertType);

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Type": convertType
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Conversion failed.");
                }
            })
            .then(data => {
                window.location.href = data.url;
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Conversion failed. Please try again.");
            });
        });
    </script>
</body>
</html>
