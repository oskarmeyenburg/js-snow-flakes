# SnowFlakesJs
SnowFlakesJs is a script that can be inserted into an HTML header to add a snowfall effect to a website. You can customize the appearance of the snowflakes by adjusting the constants at the beginning of the script.

If you prefer not to use an external JavaScript file, you can simply copy the code and place it directly within script tags in your HTML file:<br>
``<script>...</script>``

## Customizable constants
### SNOWFLAKE_MIN_SPEED and SNOWFLAKE_MAX_SPEED
Determine the range of random downward velocities for each snowflake. The velocity is a percentage of the screen size, ranging from SNOWFLAKE_MIN_SPEED to SNOWFLAKE_MAX_SPEED.<br><br>

### SNOWFLAKE_MIN_SIZE and SNOWFLAKE_MAX_SIZE
Set the range of random sizes in pixels for each snowflake, varying from SNOWFLAKE_MIN_SIZE to SNOWFLAKE_MAX_SIZE.<br><br>

### SNOWFLAKE_ROTATION_SPEED
Controls the rotation speed of snowflakes in degrees per second.<br><br>

### SNOWFLAKE_SPAWN_DELAY
Determines the average delay between spawned snowflakes, adding a customizable rhythm to the falling snow.<br><br>

### SNOWFLAKE_COLORS
An array containing possible colors from which the color for each new snowflake is randomly chosen.<br><br>

### SNOWFLAKE_CIRCLE, SNOWFLAKE_CIRCLE_SYMBOL and SNOWFLAKE_SYMBOLS
When the option SNOWFLAKE_CIRCLE is enabled, all snowflakes take on a simple circular shape. The symbol is defined by SNOWFLAKE_CIRCLE_SYMBOL. Otherwise each newly spawned snowflake is assigned a random symbol from SNOWFLAKE_SYMBOLS.