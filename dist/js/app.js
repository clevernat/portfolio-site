var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span>'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
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
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };

// Date
document.addEventListener('DOMContentLoaded', function() {
  dates();
})


  // Date
function dates() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth()
  if(month === 0) {
      document.querySelector('.insert-date').innerHTML = `Jan ${year}`;
  }else if(month === 1) {
      document.querySelector('.insert-date').innerHTML = `Feb ${year}`
  }else if(month === 2) {
      document.querySelector('.insert-date').innerHTML = `Mar ${year}`
  }else if(month === 3) {
      document.querySelector('.insert-date').innerHTML = `Apr ${year}`
  }else if(month === 4) {
      document.querySelector('.insert-date').innerHTML = `May ${year}`
  }else if(month === 5) {
      document.querySelector('.insert-date').innerHTML = `Jun ${year}`
  }else if(month === 6) {
      document.querySelector('.insert-date').innerHTML = `Jul ${year}`
  }else if(month === 7) {
      document.querySelector('.insert-date').innerHTML = `Aug ${year}`
  }else if(month === 8) {
      document.querySelector('.insert-date').innerHTML = `Sep ${year}`
  }else if(month === 9) {
      document.querySelector('.insert-date').innerHTML = `Oct ${year}`
  }else if(month === 10) {
      document.querySelector('.insert-date').innerHTML = `Nov ${year}`
  }else if(month === 11) {
      document.querySelector('.insert-date').innerHTML = `Dec ${year}`
  }
}