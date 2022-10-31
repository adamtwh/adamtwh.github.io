$(function () { 
    count = 0; 
    wordsArray = ["painters", "plumbers", "electricians", "movers", "contractors", "technicians"]; 
    setInterval(function () { 
        count++; 
        $("#tagline").fadeOut(1000, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(1000); 
        }); 
    }, 3000); 
});

function loginSwap() {
    loginHTML = `    <div class="middle container justify-content-center">
                        <div class="col-md-6">
                            <h4 class="text-header text-white">Sign in to your account</h4>
                            <form>
                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input type="email" placeholder="Username or email address" class="form-control bg-transparent text-white text-wrap fw-bold">
                                </div>

                                <div class="form-row" style="border-bottom: 1px solid var(--pri)">
                                    <input type="password" placeholder="Password" class="form-control bg-transparent text-white fw-bold">
                                </div>

                                <div class="form-row">
                                    <a href="homepage.html">
                                    <button type="button" class="btn-login">
                                    Login
                                    <i class="bi bi-box-arrow-in-right"></i>
                                    </button>
                                    <a>
                                </div>

                                <a class="fw-bold" href="#">Forgot Password?</a>
                                <p class="fw-bold text-white">Don't have an account? <a href="#">Register here</a></p>
                            </form>
                        </div>
                    </div>
                `
    section = document.getElementById('loginSection')
    section.innerHTML = loginHTML
    return
}
