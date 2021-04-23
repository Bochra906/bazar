import React  from 'react' ; 

class Products extends React.Component{
    render() {
        return(
            <div>
            <div class="top-bar">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <i class="fa fa-envelope"></i>
                            support@email.com
                        </div>
                        <div class="col-sm-6">
                            <i class="fa fa-phone-alt"></i>
                            +012-345-6789
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
    
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                                <a href="index.html" class="nav-item nav-link">Home</a>
                                <a href="product-list.html" class="nav-item nav-link active">Products</a>
                                <a href="product-detail.html" class="nav-item nav-link">Product Detail</a>
                                <a href="cart.html" class="nav-item nav-link">Cart</a>
                                <a href="checkout.html" class="nav-item nav-link">Checkout</a>
                                <a href="my-account.html" class="nav-item nav-link">My Account</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                    <div class="dropdown-menu">
                                        <a href="wishlist.html" class="dropdown-item">Wishlist</a>
                                        <a href="login.html" class="dropdown-item">Login & Register</a>
                                        <a href="contact.html" class="dropdown-item">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
            
            <div class="bottom-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/img/logo final.png" alt="Logo"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="search">
                                <input type="text" placeholder="Search"/>
                                <button><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="user">
                                <a href="wishlist.html" class="btn wishlist">
                                    <i class="fa fa-heart"></i>
                                    <span>(0)</span>
                                </a>
                                <a href="cart.html" class="btn cart">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="breadcrumb-wrap">
                <div class="container-fluid">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Products</a></li>
        
                    </ul>
                </div>
            </div>
            
            <div class="product-view">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="product-view-top">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="product-search">
                                                    <input type="email" value="Search"/>
                                                    <button><i class="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="product-short">
                                                    <div class="dropdown">
                                                        <div class="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a href="#" class="dropdown-item">Newest</a>
                                                            <a href="#" class="dropdown-item">Popular</a>
                                                            <a href="#" class="dropdown-item">Most sale</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="product-price-range">
                                                    <div class="dropdown">
                                                        <div class="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a href="#" class="dropdown-item">5 TND to 10 TND</a>
                                                            <a href="#" class="dropdown-item">11 TND to 30 TND</a>
                                                            <a href="#" class="dropdown-item">31 TND to 50 TND</a>
                                                            <a href="#" class="dropdown-item">51 TND to 70 TND</a>
                                                            <a href="#" class="dropdown-item">71 TND to 99 TND</a>
                                                            
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Bath Bomb</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Bain.png" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>20</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Key Ring</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Cle.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>10</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Argan Oil</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Huileargan.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>25</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">White Choclate</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Chocobl.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>7</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Kimono</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Sab.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>90</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Candle</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Bougiecafe.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>15</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Skin Roller</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Hera.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>90</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Jebba</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Jeba2.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>80</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">Zrir</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src="assets/img/Zrir.PNG" alt="Product Image"/>
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>TND</span>50</h3>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div class="col-md-12">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                           
                        </div>           
                        
                       
                        <div class="col-lg-4 sidebar">
                            <div class="sidebar-widget category">
                                <h2 class="title">Category</h2>
                                <nav class="navbar bg-light">
                                    <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-female"></i>Fashion & Beauty</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-child"></i>Decoration</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-tshirt"></i>Men & Women Clothes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-mobile-alt"></i>Accessories</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-mobile-alt"></i>Food</a>
                                </li>
                                
                                    </ul>
                                </nav>
                            </div>
                            
                            
                            
                            <div class="sidebar-widget brands">
                                <h2 class="title">Our Brands</h2>
                                <ul>
                                    <li><a href="#">The moon </a><span>(2)</span></li>
                                    <li><a href="#">Cocooning </a><span>(5)</span></li>
                                    <li><a href="#">Herbeos </a><span>(3)</span></li>
                                    <li><a href="#">Itshiningbabe</a><span>(1)</span></li>
                                    <li><a href="#">Fortify </a><span>(2)</span></li>
                                    <li><a href="#">The Hera Sskin</a><span>(1)</span></li>
                                </ul>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
           
            <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Get in Touch</h2>
                            <div class="contact-info">
                                <p><i class="fa fa-map-marker"></i>TUNIS , rue de la liberté </p>
                                <p><i class="fa fa-envelope"></i>bazar@gmail.com</p>
                                <p><i class="fa fa-phone"></i>+21693993047</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Follow Us</h2>
                            <div class="contact-info">
                                <div class="social">
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    
                </div>
                
                
            </div>
    
                       
                    
                    
            
            
            
           
            
            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

            </div>
            </div>

            )
        }
    }
    export default Products ;