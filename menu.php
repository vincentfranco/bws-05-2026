<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
    <div class="container">
        <a class="navbar-brand" href="index.php">
            <span class="flaticon-lotus"></span>Beauty With Christina
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" 
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item <?php echo ($current_page == 'index.php') ? 'active' : ''; ?>">
                    <a href="index.php" class="nav-link">Home</a>
                </li>
                <li class="nav-item <?php echo ($current_page == 'about.php') ? 'active' : ''; ?>">
                    <a href="about.php" class="nav-link">About</a>
                </li>
                <li class="nav-item <?php echo ($current_page == 'treatments.php') ? 'active' : ''; ?>">
                    <a href="treatments.php" class="nav-link">Treatments</a>
                </li>
                <li class="nav-item <?php echo ($current_page == 'price-list.php') ? 'active' : ''; ?>">
                    <a href="price-list.php" class="nav-link">Pricing</a>
                </li>
                <li class="nav-item <?php echo ($current_page == 'contact.php') ? 'active' : ''; ?>">
                    <a href="contact.php" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


