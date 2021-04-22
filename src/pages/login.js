import React  from 'react' ; 

class Login extends React.Component{
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
                                <a href="product-list.html" class="nav-item nav-link">Products</a>
                                <a href="product-detail.html" class="nav-item nav-link">Product Detail</a>
                                <a href="cart.html" class="nav-item nav-link">Cart</a>
                                <a href="checkout.html" class="nav-item nav-link">Checkout</a>
                                <a href="my-account.html" class="nav-item nav-link">My Account</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle active" data-toggle="dropdown">More Pages</a>
                                    <div class="dropdown-menu">
                                        <a href="wishlist.html" class="dropdown-item">Wishlist</a>
                                        <a href="login.html" class="dropdown-item active">Login & Register</a>
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
                        
    
                    </div>
                </div>
            </div>
            
            <div class="breadcrumb-wrap">
                <div class="container-fluid">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active"> Login </li>
                    </ul>
                </div>
            </div>
            
            <div class="login">
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-lg-6">
                        <div class="login-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>E-mail / Username</label>
                                    <input class="form-control" type="text" placeholder="E-mail / Username"/> <br/>
                                </div> 
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input class="form-control" type="text" placeholder="Password"/>
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="newaccount"/>
                                        <label class="custom-control-label" for="newaccount">Keep me signed in</label>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn">Submit</button>
                                </div>
                            </div>
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
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                        <a href=""><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        
    
                        
                    </div>
                    
                    
                </div>
            </div>
            
           
            
           </div>
        )
    } 
}


export default Login ; 