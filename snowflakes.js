// Create minimized version with https://minify-js.com

// Adjustable variables
window.SNOWFLAKE_START_DATE = 1.12; // Included
window.SNOWFLAKE_END_DATE = 1.1; // Excluded
window.SNOWFLAKE_MIN_SPEED = 0.05;
window.SNOWFLAKE_MAX_SPEED = 0.15;
window.SNOWFLAKE_MIN_SIZE = 5;
window.SNOWFLAKE_MAX_SIZE = 15;
window.SNOWFLAKE_ROTATION_SPEED = 25; // Maximum rotation per second of snowflakes in degrees
window.SNOWFLAKE_NUMBER = 20; // Total count of snowflakes
window.SNOWFLAKE_CENTER_REDUCTION = true; // Less snowflakes in center of screen
window.SNOWFLAKE_COLORS = ["#dddddd", "#f2f2f2", "#ffffff"]; // List of possible colors of snowflakes
window.SNOWFLAKE_SYMBOLS = ["❅", "❆", "*", "●"]; // List of possible symbols of snowflakes
window.SNOWFLAKE_SHADOW = true; // Show a shadow around snowflakes
window.SNOWFLAKE_SHADOW_COLOR = "#000"; // Shadow color around snowflakes
window.SNOWFLAKE_SPAWN_ON_SCREEN = false; // Spawn snowflakes on screen when loading


// Constants
const localDate = new Date();
const current_date_number = localDate.getMonth() + 1 + localDate.getDate() * 0.01


class SnowFlake {
	constructor(y) {
        let snowflake_speed = Math.random() * (window.SNOWFLAKE_MAX_SPEED - window.SNOWFLAKE_MIN_SPEED) + window.SNOWFLAKE_MIN_SPEED;
        let snowflake_size = Math.random() * (window.SNOWFLAKE_MAX_SIZE - window.SNOWFLAKE_MIN_SIZE) + window.SNOWFLAKE_MIN_SIZE;
        let snowflake_color = window.SNOWFLAKE_COLORS[Math.floor(Math.random() * window.SNOWFLAKE_COLORS.length)];
        let snowflake_symbol = window.SNOWFLAKE_SYMBOLS[Math.floor(Math.random() * window.SNOWFLAKE_SYMBOLS.length)];

        this.y = y;
        this.reset_position();
        this.angle = Math.random() * 360;
        this.vel_y = snowflake_speed;
        this.vel_angle = (Math.random() * 2 - 1) * window.SNOWFLAKE_ROTATION_SPEED;
        this.wave_offset = Math.random() * 3000;
        this.div = document.createElement("div");
        this.div.style.position = 'absolute';
        this.div.style.userSelect = 'none';
        this.div.style.webkitUserSelect = 'none';
        this.div.style.webkitTouchCallout = 'none';
        this.div.style.msUserSelect = 'none';
        this.div.unselectable = 'on';

        let shadow_string = "";
        if (window.SNOWFLAKE_SHADOW) {
            shadow_string =  `text-shadow: 0 0 1px ${window.SNOWFLAKE_SHADOW_COLOR};`;
        }
        this.div.innerHTML += `<p style='color:${snowflake_color};font-size:${snowflake_size}px;${shadow_string}'>${snowflake_symbol}</p>`;
        
        container.appendChild(this.div);
        snowflakes.push(this);
    }
  	update(delta_time, time) {
    	this.y += delta_time * this.vel_y;
        this.angle += delta_time * this.vel_angle;
        let rotation = `rotate(${this.angle}deg)`;

        this.div.style.cssText = `
            position: absolute;
            left: ${(this.x + Math.sin(time / 1000 + this.wave_offset) * 0.01) * screen_width}px;
            top: ${this.y * screen_height}px;
            -webkit-transform: ${rotation};
            -moz-transform: ${rotation};
            -ms-transform: ${rotation};
            -o-transform: ${rotation};
            transform: ${rotation};
        `;

        if (this.y > 1) {
            this.reset_position();
        }
    }
    reset_position() {
        this.x = Math.random();
        if (window.SNOWFLAKE_CENTER_REDUCTION) {
            this.x = 1 / (1 + Math.exp(-10 * (this.x - 0.5)));
        }
        this.y -= 1.1
    }
}

const update = (time) => {
    var delta_time = (time - previous_time) * 0.001;
    previous_time = time;

    screen_width = container.clientWidth;
    screen_height = container.clientHeight;

    for (i = snowflakes.length - 1; i >= 0; i--) {
        snowflakes[i].update(delta_time, time);
    }
    
    window.requestAnimationFrame(update);
}

// Globals
var container;
var previous_time = 0;
var next_flake_time = 0;
var snowflakes = [];
var screen_width = 0;
var screen_height = 0;

const main = () => {
    if (window.SNOWFLAKE_START_DATE > window.SNOWFLAKE_END_DATE) {
        window.SNOWFLAKE_END_DATE += 12;
    }
    if (!(window.SNOWFLAKE_START_DATE < current_date_number < window.SNOWFLAKE_END_DATE)) {
        return;
    }

    container = document.createElement("div");    
    container.style.overflow = 'hidden';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    document.body.appendChild(container);

    for (let y = 0; y < 1; y += 1 / window.SNOWFLAKE_NUMBER) {
        new SnowFlake(y + 0.05 + (+window.SNOWFLAKE_SPAWN_ON_SCREEN));
    }

    window.SNOWFLAKE_SPAWN_ON_SCREEN = 0
    window.requestAnimationFrame(update);
}

// Initial delayed setup
window.requestAnimationFrame(main);