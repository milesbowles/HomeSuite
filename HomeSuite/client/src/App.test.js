<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './calculator/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
=======
// Global
var win = window,
    doc = document;

// Global Functions


function hasClass(el, cls) {
    /** In the element, find the strings that match the class RegExp string */
    /** If there is a match, return true */
    /** RegExp stands for regular expressions */
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

function addClass(el, cls) {
    /** If there is no match between the two strings */
    if (!this.hasClass(el, cls)) {
        /** Then add the class to the element */
        el.className += " " + cls;
    }
};

function removeClass(el, cls) {
    /** If the element does have the class */
    if (this.hasClass(el, cls)) {
        /** Grab onto the class that it has */
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        /** Replace that class with an empty class */
        el.className = el.className.replace(reg, ' ');
    }
};

// Elements

var site = doc.getElementsByClassName('site-wrap')[0];
var wrap = doc.getElementsByClassName('panel-wrap')[0];

var panel = doc.getElementsByClassName('panel');

var zoom = doc.getElementsByClassName('js-zoom');

var nav_up = doc.getElementsByClassName('js-up'),
    nav_left = doc.getElementsByClassName('js-left'),
    nav_right = doc.getElementsByClassName('js-right'),
    nav_down = doc.getElementsByClassName('js-down');

var animation = doc.getElementsByClassName('js-animation');

// Tracking
var pos_x = 0,
    pos_y = 0;

function setPos() {
    /** Retreive the styling associated with wrap element */
    /** Move left and right based on the variables pos_x and pos_y */
    wrap.style.transform = 'translateX(' + pos_x + '00%) translateY(' + pos_y + '00%)';
    /** perform the removeClass function every 6 seconds */
    setTimeout(function () {
        /** Remove the animate class from the wrap element */
        removeClass(wrap, 'animate');
    }, 600);
}
/** Perform the setPos function */
setPos();

function moveUp() {
    /** Add the class animate to the wrap element */
    addClass(wrap, 'animate');
    /** Increment the pos_y variable by one */
    pos_y++;
    /** Reset the postitioning */
    setPos();
}

function moveLeft() {
    /** Add the animate class to the wrap element */
    addClass(wrap, 'animate');
    /** Increment the pos_x variable by one */
    pos_x++;
    /** Refresh the positioning */
    setPos();
}

function moveRight() {
    /** Add animate class to wrap element */
    addClass(wrap, 'animate');
    /** Decrement the x position */
    pos_x--;
    /** Refresh positioning */
    setPos();
}

function moveDown() {
    /** To wrap element, add the animate class */
    addClass(wrap, 'animate');
    /** Decrement the y positioning */
    pos_y--;
    /** Refresh positioning */
    setPos();
}
/** Traverse the length of up class */
for (var x = 0; x < nav_up.length; x++) {
    /** For each nav-up element, add a click listener with the moveUp function */
    nav_up[x].addEventListener('click', moveUp);
}
/** Traverse the length of the left class */
for (var x = 0; x < nav_left.length; x++) {
    /** For each nav_left element, add a click listener with the moveLeft function */
    nav_left[x].addEventListener('click', moveLeft);
}
/** Traverse the length of the right class */
for (var x = 0; x < nav_right.length; x++) {
    /** For each nav_right element, add a click listener with the moveRight function */
    nav_right[x].addEventListener('click', moveRight);
}
/** Traverse the length of the down class */
for (var x = 0; x < nav_down.length; x++) {
    /** For each nav_down element, add a click listener with the moveDown function */
    nav_down[x].addEventListener('click', moveDown);
}

// Animations

/** Traverse the length of the animation elements */
for (var x = 0; x < animation.length; x++) {
    (function (_x) {
        /** For each animation element, add a click listener that performs the toggle animation function */
        animation[_x].addEventListener('click', function () {
            /** Perform the toggleAnimation function below */
            toggleAnimation(_x);
        });
    })(x);
}

function toggleAnimation(i) {
    /** Traverse the length of the animation elements */
    for (var x = 0; x < animation.length; x++) {
        /** If the x is equal to the argument */
        if (i === x) {
            /** For each animation element, add an active class */
            addClass(animation[x], 'active');
            /** For each wrap element, add the class  */
            addClass(wrap, animation[x].getAttribute('data-animation'));
        /** If x doesn't equal the argument */
        } else {
            /** From the animation element, remove the active class */
            removeClass(animation[x], 'active');
            /** From the wrap element, remove the data-animation class */
            removeClass(wrap, animation[x].getAttribute('data-animation'));
        }
    }

}

for (var x = 0; x < zoom.length; x++) {
    /** For each zoom element, add a click listener with the zoomOut function below */
    zoom[x].addEventListener('click', zoomOut);
}
/** zoomOut takes in an event as an argument */
function zoomOut(e) {
    /** stopPropatation detaches this event from the parent elements so it's not applied to them */
    e.stopPropagation();
    /** To the site element, add the show-all class */
    addClass(site, 'show-all');
    /** Traverse the length of the panel element */
    for (var x = 0; x < panel.length; x++) {
        (function (_x) {
            /** For each panel element, add a click listener witht the setPanelAndZoom function below */
            panel[_x].addEventListener('click', setPanelAndZoom);
        })(x);
    }
}
/** This function takes in an event as an argument */
function setPanelAndZoom(e) {
    /** To the pos_x variable, decrement the position by the target's current x position */
    pos_x = -e.target.getAttribute('data-x-pos'),
    /** To the pos_y variable, increment the position by the target's current y position */
        pos_y = e.target.getAttribute('data-y-pos');
    /** Refresh the positioning */
    setPos();
    /** Call the zoomIn function below */
    zoomIn();
}


function zoomIn() {
    /** Traverse the the length of the panel element */
    for (var x = 0; x < panel.length; x++) {
        /** For each panel element, remove the click listener with the setPanelAndZoom function */
        panel[x].removeEventListener('click', setPanelAndZoom);
    }
    /** From the site element, remove the show-all function */
    removeClass(site, 'show-all');
}
>>>>>>> Ernie
