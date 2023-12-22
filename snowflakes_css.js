// Adjustable variables
window.SNOWFLAKE_START_DATE = 12.22; // Included
window.SNOWFLAKE_END_DATE = 12.26; // Excluded
window.SNOWFLAKE_SPEED = 1; // Speed of snowflakes
window.SNOWFLAKE_SPEED_DIVERGENCE = 3; // Divergence range for random speed of snowflakes
window.SNOWFLAKE_MIN_SIZE = 5; // Minimal snowflake size
window.SNOWFLAKE_MAX_SIZE = 15; // Maximal snowflake size
window.SNOWFLAKE_NUMBER = 15; // Total count of snowflakes
window.SNOWFLAKE_CENTER_REDUCTION = true; // Less snowflakes in center of screen
window.SNOWFLAKE_COLORS = ["#ddd", "#eee", "#fff"]; // List of possible colors of snowflakes
window.SNOWFLAKE_SYMBOLS = ["❅", "❆", "*", "●"]; // List of possible symbols of snowflakes
window.SNOWFLAKE_SHADOW = true; // Show a shadow around snowflakes
window.SNOWFLAKE_SHADOW_COLOR = "#000"; // Shadow color around snowflakes


// Current date used to interupt program
const localDate = new Date();
const current_date_number = localDate.getMonth() + 1 + localDate.getDate() * 0.01;


const spawn_snowflake = () => {
    snowflake = document.createElement("div");

    let x = Math.random();
    if (window.SNOWFLAKE_CENTER_REDUCTION) {x = 1 / (1 + Math.exp(-10 * (x - 0.5)));}
    x *= 100;
    let snowflake_speed = (10 + (Math.random() - 0.5) * window.SNOWFLAKE_SPEED_DIVERGENCE * 2) / window.SNOWFLAKE_SPEED;
    let snowflake_color = window.SNOWFLAKE_COLORS[Math.floor(Math.random() * window.SNOWFLAKE_COLORS.length)];
    let snowflake_symbol = window.SNOWFLAKE_SYMBOLS[Math.floor(Math.random() * window.SNOWFLAKE_SYMBOLS.length)];
    let snowflake_size = Math.random() * (window.SNOWFLAKE_MAX_SIZE - window.SNOWFLAKE_MIN_SIZE) + window.SNOWFLAKE_MIN_SIZE;
    let shadow_string = "";
    if (window.SNOWFLAKE_SHADOW) {shadow_string =  `text-shadow:0 0 1px ${window.SNOWFLAKE_SHADOW_COLOR};`;}

    snowflake.style.cssText = `position:fixed;overflow:hidden;left:${x}%;top:-10%;width:100%;height:100%;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-ms-user-select:none;unselectable:on;pointer-events:none;`;
    snowflake.innerHTML += `<p style='color:${snowflake_color};font-size:${snowflake_size}px;${shadow_string}position:relative;animation:snowflake_shift_x ${Math.random() + 2}s alternate infinite ease-in-out;height:0;margin:0;padding:0;'>${snowflake_symbol}</p>`;
    snowflake.style.animation = `snowflake_fall ${snowflake_speed}s infinite linear`;
    document.body.appendChild(snowflake);
}

const main = () => {
    // Interupt program if date not matching
    if (window.SNOWFLAKE_START_DATE > window.SNOWFLAKE_END_DATE && window.SNOWFLAKE_END_DATE < current_date_number && current_date_number < window.SNOWFLAKE_START_DATE || !(window.SNOWFLAKE_START_DATE <= current_date_number && current_date_number < window.SNOWFLAKE_END_DATE)) {
        return;
    }

    // Add snowflake style animations
    const styleElement = document.createElement('style');
    styleElement.textContent = `@-moz-keyframes snowflake_shift_x{to{-moz-transform:translatex(25px);}}@-webkit-keyframes snowflake_shift_x{to{-webkit-transform:translatex(25px);}}@keyframes snowflake_shift_x{to{transform:translatex(25px);}}@-moz-keyframes snowflake_fall{to{-moz-transform:translatey(200vh);}}@-webkit-keyframes snowflake_fall{to{-webkit-transform:translatey(200vh);}}@keyframes snowflake_fall{to{transform:translatey(200vh);}}`;
    document.head.appendChild(styleElement);

    // Spawn snowflakes with delay for y offset
    let interval = 5000 / (window.SNOWFLAKE_NUMBER * window.SNOWFLAKE_SPEED);
    for (let i = 0; i < window.SNOWFLAKE_NUMBER * 2; i++) {
        setTimeout(spawn_snowflake, interval * i + Math.random() * interval);
    }
}

main();