var TxtType = function(el, toRotate, period) {
     this.toRotate = toRotate;
     this.el = el;
     this.loopNum = 0;
     this.period = parseInt(period, 10) || 2000;
     this.txt = '';
     this.tick();
     this.isDeleting = false;
 };

 TxtType.prototype.tick = function() {
     var i = this.loopNum % this.toRotate.length;
     var fullTxt = this.toRotate[i];

     if (this.isDeleting) {
     this.txt = fullTxt.substring(0, this.txt.length - 1);
     } else {
     this.txt = fullTxt.substring(0, this.txt.length + 1);
     }

     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

     var that = this;
     var delta = 200 - Math.random() * 100;

     if (this.isDeleting) { delta /= 2; }

     if (!this.isDeleting && this.txt === fullTxt) {
     delta = this.period;
     this.isDeleting = true;
     } else if (this.isDeleting && this.txt === '') {
     this.isDeleting = false;
     this.loopNum++;
     delta = 500;
     }

     setTimeout(function() {
     that.tick();
     }, delta);
 };

window.onload = function() {


   var elements = document.getElementsByClassName('typewrite');
   for (var i=0; i<elements.length; i++) {
       var toRotate = elements[i].getAttribute('data-type');
       var period = elements[i].getAttribute('data-period');
       if (toRotate) {
         new TxtType(elements[i], JSON.parse(toRotate), period);
       }
   }
   // INJECT CSS
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
   document.body.appendChild(css);




   // BOX

   // Get the button that opens the modal
   var buttons = document.getElementsByClassName("button");
   for(var i = 0; i < buttons.length; i++) {
     buttons[i].onclick = function(event) {
       // Get the modal
       var modal = document.getElementById("myModal" + event.currentTarget.id);
       modal.style.display = "block";
     }
   }

   var spans = document.getElementsByClassName("close");
   for(var i = 0; i < spans.length; i++) {
     spans[i].onclick = function(event) {
       event.currentTarget.parentElement.parentElement.style.display = "none";
     }
   }

   //var btn = document.getElementById("mybtn");

   // Get the <span> element that closes the modal
   //var span = document.getElementsByClassName("close")[0];

   // When the user clicks on the button, open the modal
   //btn.onclick = function() {
   //  modal.style.display = "block";
   //}

   // When the user clicks on <span> (x), close the modal
   //span.onclick = function() {
   //  modal.style.display = "none";
   //}

   // When the user clicks anywhere outside of the modal, close it
   //window.onclick = function(event) {
     //var modal = document.getElementById("myModal" + event.currentTarget.id);
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
 }
