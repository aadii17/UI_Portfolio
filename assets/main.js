(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);


var div = document.createElement("div");
    div.id="preloader",
    div.className="preloader",
    div.innerHTML='<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div,document.body.firstChild),window.onload=function() {
    document.getElementById("preloader").classList.add("off")
};

const toggleBtn = document.getElementById('toggle-btn');
const themeLink = document.getElementById('theme');

toggleBtn.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'Light.css') {
        themeLink.setAttribute('href', 'Style.css');
    } else {
        themeLink.setAttribute('href', 'Light.css');
    }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    
    // Reload the page
    location.reload();
});