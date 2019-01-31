var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }
var week = 1;
var button = document.getElementById("current");
var i = 0;
if (mm==01) {
    if (07 < dd && dd < 13) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("1"));
        });
    }
    else if (14 < dd && dd < 20) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("2"));
        });
    }
    else if (21 < dd && dd < 27) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("3"));
        });
    }
    else if (29 < dd && dd < 31) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("4"));
        });
    }
}
else if (mm==02) {
    if (01 < dd && dd < 10) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("5"));
        });
    }
    else if (11 < dd && dd < 17) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("6"));
        });
    }
    else if (18 < dd && dd < 24) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("7"));
        });
    }
    else if (25 < dd && dd < 28) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("8"));
        });
    }
}
else if (mm==03) {
    if (01 < dd && dd < 10) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("9"));
        });
    }
    else if (11 < dd && dd < 17) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("10"));
        });
    }
    else if (18 < dd && dd < 24) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("11"));
        });
    }
    else if (25 < dd && dd < 31) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("12"));
        });
    }
}
else if (mm==04) {
    if (01 < dd && dd < 07) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("13"));
        });
    }
    else if (08 < dd && dd < 14) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("14"));
        });
    }
    else if (15 < dd && dd < 21) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("15"));
        });
    }
    else if (22 < dd && dd < 28) {
        button.addEventListener('click', () => {
            scrollTo(document.getElementById("16"));
        });
    }
}


