const SNOWFLAKE_MIN_SPEED = 0.05;
const SNOWFLAKE_MAX_SPEED = 0.15;
const SNOWFLAKE_MIN_SIZE = 5;
const SNOWFLAKE_MAX_SIZE = 15;
const SNOWFLAKE_ROTATION_SPEED = 10;
const SNOWFLAKE_SPAWN_DELAY = 0.3;
const SNOWFLAKE_COLORS = ["#dddddd", "#eeeeee", "#ffffff"];
const SNOWFLAKE_CIRCLE = true;
const SNOWFLAKE_CIRCLE_SYMBOL = "●";
const SNOWFLAKE_SYMBOLS = ["❅", "❆", "❃", "❇", "❊", "❋", "*"];

var previous_time = 0;
var next_flake_time = 0;
var snowflakes = [];

var screen_width = 0;
var screen_height = 0;

var container = document.createElement("div");
container.style.overflow = 'hidden';
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
container.style.width = '100%';
container.style.height = '100%';
setTimeout(() => {document.body.appendChild(container)}, 1);

class SnowFlake {
	constructor() {
        let snowflake_speed = Math.random() * (SNOWFLAKE_MAX_SPEED - SNOWFLAKE_MIN_SPEED) + SNOWFLAKE_MIN_SPEED;
        let snowflake_size = Math.random() * (SNOWFLAKE_MAX_SIZE - SNOWFLAKE_MIN_SIZE) + SNOWFLAKE_MIN_SIZE;
        let snowflake_color = SNOWFLAKE_COLORS[Math.floor(Math.random() * SNOWFLAKE_COLORS.length)];
        let snowflake_symbol = [SNOWFLAKE_SYMBOLS[Math.floor(Math.random() * SNOWFLAKE_SYMBOLS.length)], SNOWFLAKE_CIRCLE_SYMBOL][+SNOWFLAKE_CIRCLE];

        this.x = Math.random();
        this.y = -0.1;
        this.angle = Math.random() * 360;
        this.vel_x = (Math.random() - 0.5) * snowflake_speed * 0.2;
        this.vel_y = snowflake_speed;
        this.vel_angle = ((Math.random() - 0.5) * SNOWFLAKE_ROTATION_SPEED) ** 2;
        this.wave_offset = Math.random() * 3000;
        this.div = document.createElement("div");
        
        this.div.style.position = 'fixed';

        this.div.style.userSelect = 'none';
        this.div.style.webkitUserSelect = 'none';
        this.div.style.webkitTouchCallout = 'none';
        this.div.style.msUserSelect = 'none';
        this.div.unselectable = 'on';
        this.div.style.overflow = "visible";

        this.div.style.position = 'absolute';
        this.div.innerHTML += "<p style='color:" + snowflake_color +  ";font-size:" + snowflake_size + "px;'>" + snowflake_symbol + "</p>";
        container.appendChild(this.div);
        snowflakes.push(this);
    }
  	update(delta_time, time) {
        let wave_offset_x = Math.sin(time / 1000 + this.wave_offset) * 0.01;
        let wave_offset_y = Math.cos(time / 1000 + this.wave_offset) * 0.01;
        let wave_offset_angle = Math.cos(time / 1000 + this.wave_offset) * 0.01;

        this.x += delta_time * this.vel_x;
    	this.y += delta_time * this.vel_y;
        this.angle = this.angle + delta_time * this.vel_angle + wave_offset_angle;

        let x = (this.x + wave_offset_x) * screen_width;
        let y = (this.y + wave_offset_y) * screen_height;

        this.div.style.left = x + "px";
        this.div.style.top = y + "px";
        this.div.style.webkitTransform = "rotate(" + this.angle + "deg)";
        this.div.style.mozTransform = "rotate(" + this.angle + "deg)";
        this.div.style.msTransform = "rotate(" + this.angle + "deg)";
        this.div.style.oTransform = "rotate(" + this.angle + "deg)";
        this.div.style.transform = "rotate(" + this.angle + "deg)";

        if (this.y > 1) {
            this.delete();
        }
    }
    delete() {
        container.removeChild(this.div);
        snowflakes.splice(snowflakes.indexOf(this), 1); 
    }
}

(update = (time) => {
    var delta_time = (time - previous_time) * 0.001;
    previous_time = time;

    screen_width = container.clientWidth;
    screen_height = container.clientHeight;

    if (time > next_flake_time) {
        next_flake_time = time + 1000 * SNOWFLAKE_SPAWN_DELAY * (0.5 + Math.random());
        new SnowFlake();
    }

    for (i = snowflakes.length - 1; i >= 0; i--) {
        snowflakes[i].update(delta_time, time);
    }
    
    window.requestAnimationFrame(update);
})(0)
