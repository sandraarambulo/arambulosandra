<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        .img-thumbnail {
            transition: transform 0.3s ease;
        }

        .img-thumbnail:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Bibliophile's Nook</h2>
                <hr class="hr" />
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-4 text-center">
                <label id="product1">A Gentle Reminder</label>
                <img src="A gentle Reminder Book.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product1" id="price1">350.00</label>
                <input type="number" class="form-control" id="qty1" placeholder="Enter quantity" /><br>
            </div>
        
            <div class="col-4 text-center">
                <label id="product2">Atomic Habits</label>
                <img src="ATOMIC-HABITS BOOK.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product2" id="price2">370.00</label>
                <input type="number" class="form-control" id="qty2" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-4 text-center">
                <label id="product3">The 48 Laws of Power</label>
                <img src="The 48 Laws of Power.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product3" id="price3">550.00</label>
                <input type="number" class="form-control" id="qty3" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-4 text-center">
                <label id="product4">The Mountain is You</label>
                <img src="The Mountain is you Book.jpg" style="width: 250px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product4" id="price4">550.00</label>
                <input type="number" class="form-control" id="qty4" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-4 text-center">
                <label id="product5">The Pivot Year</label>
                <img src="pivot_year.jpg" style="width: 300px;height: 350px;" class="img-thumbnail" /><br>
                <label for="product5" id="price5">400.00</label>
                <input type="number" class="form-control" id="qty5" placeholder="Enter quantity" /><br>
            </div>
             <div class="col-4 text-center">
                <label id="product5">Ugly Love </label>
                <img src="Ugly Love.jpg" style="width: 300px;height: 400px;" class="img-thumbnail" /><br>
                <label for="product6" id="price6">980.00</label>
                <input type="number" class="form-control" id="qty6" placeholder="Enter quantity" /><br>
            </div>
            <div class="col-4">
                <label for="carts">Orders</label><br>
                <textarea class="form-control" rows="29" id="carts" cols="200" readonly style="width: 350px;height: 400px;font-size: 12px;"></textarea>
                <input type="text" class="form-control border-0" id="total" readonly placeholder="Total" />
                <input type="number" class="form-control" id="cash" placeholder="Cash Tendered" />
                <input type="text" class="form-control border-0" id="change" readonly placeholder="Change" />
            </div>
        </div>
    </div>
    <br><br>
    <div class="card text-center">
        <div class="card-footer text-body-secondary">
            Owned By: Sandra Arambulo
        </div>
    </div>
    <!-- Bootstrap JS bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
