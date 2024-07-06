<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');
        
        body {
            background-color: #f8f9fa;
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .header {
            margin: 20px 0;
            background-color: #343a40;
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .header h2 {
            font-family: 'Merriweather', serif;
            font-weight: 700;
        }
        .img-thumbnail {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 10px;
        }
        .img-thumbnail:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .product-container {
            margin-bottom: 30px;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .product-container label {
            font-weight: bold;
            color: #495057;
            display: block;
            margin-bottom: 10px;
        }
        .product-container .price-label {
            color: #6c757d;
            margin-bottom: 10px;
        }
        .product-container input[type="number"] {
            border: 1px solid #ced4da;
            border-radius: 5px;
            padding: 5px;
            margin-top: 10px;
        }
        .orders-container {
            margin-top: 30px;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .orders-container label {
            font-weight: bold;
            color: #343a40;
        }
        .card-footer {
            background-color: #343a40;
            color: white;
        }
        .total, .cash, .change {
            background-color: #f8f9fa;
            border: none;
            font-weight: bold;
            text-align: right;
        }
        .total:focus, .cash:focus, .change:focus {
            box-shadow: none;
            outline: none;
        }
        .order-summary {
            height: 400px;
            overflow-y: auto;
            resize: none;
        }
        .footer {
            background-color: #343a40;
            color: white;
            text-align: center;
            padding: 10px;
            border-radius: 0 0 10px 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Bibliophile's Nook</h2>
            <hr />
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4 text-center product-container">
                <label id="product1">A Gentle Reminder</label>
                <img src="A gentle Reminder Book.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product1" id="price1" class="price-label">Php 350.00</label>
                <input type="number" class="form-control" id="qty1" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-md-4 text-center product-container">
                <label id="product2">Atomic Habits</label>
                <img src="ATOMIC-HABITS BOOK.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product2" id="price2" class="price-label">Php 370.00</label>
                <input type="number" class="form-control" id="qty2" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-md-4 text-center product-container">
                <label id="product3">The 48 Laws of Power</label>
                <img src="The 48 Laws of Power.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product3" id="price3" class="price-label">Php 550.00</label>
                <input type="number" class="form-control" id="qty3" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-md-4 text-center product-container">
                <label id="product4">The Mountain is You</label>
                <img src="The Mountain is you Book.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product4" id="price4" class="price-label">Php 550.00</label>
                <input type="number" class="form-control" id="qty4" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-md-4 text-center product-container">
                <label id="product5">The Pivot Year</label>
                <img src="pivot_year.jpg" style="width: 300px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product5" id="price5" class="price-label">Php 400.00</label>
                <input type="number" class="form-control" id="qty5" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-md-4 text-center product-container">
                <label id="product6">Ugly Love</label>
                <img src="Ugly Love.jpg" style="width: 300px;height: 400px;" class="img-thumbnail" /><br>
                <label for="product6" id="price6" class="price-label">Php 980.00</label>
                <input type="number" class="form-control" id="qty6" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-md-4 orders-container">
                <label for="carts">Orders</label><br>
                <textarea class="form-control order-summary" id="carts" readonly></textarea>
                <input type="text" class="form-control total" id="total" readonly placeholder="Total" />
                <input type="number" class="form-control cash" id="cash" placeholder="Cash Tendered" />
                <input type="text" class="form-control change" id="change" readonly placeholder="Change" />
            </div>
        </div>
    </div>
    <div class="footer">
        <p>Owned By: Sandra Arambulo</p>
    </div>

    <script>
        var products = [
            { id: 1, name: "A Gentle Reminder", price: 350.00 },
            { id: 2, name: "Atomic Habits", price: 370.00 },
            { id: 3, name: "The 48 Laws of Power", price: 550.00 },
            { id: 4, name: "The Mountain is You", price: 550.00 },
            { id: 5, name: "The Pivot Year", price: 400.00 },
            { id: 6, name: "Ugly Love", price: 980.00 },
        ];

        var qtyInputs = document.querySelectorAll('[id^="qty"]');
        var carts = document.getElementById("carts");
        var totalInput = document.getElementById("total");
        var cashInput = document.getElementById("cash");
        var changeInput = document.getElementById("change");

        qtyInputs.forEach(function(qtyInput) {
            qtyInput.addEventListener("input", addOrder);
        });

