# SnowFlakesJs
**SnowFlakesJs** is a script that can be inserted into an HTML header to add a snowfall effect to a website. You can customize the appearance of the snowflakes by adjusting some variables.

To integrate the script into your HTML file, copy and paste the following line into the header:<br>
```
<script src="https://cdn.jsdelivr.net/gh/oskarmeyenburg/SnowFlakesJs/snowflakes.min.js"></script>
```
<br>

If you prefer to modify the variables, add another script tag containing your adjustments. Refer to the list of available variables below for customization options.
Here is an example for the usage with adjustments to SNOWFLAKE_SPEED and SNOWFLAKE_NUMBER.
```
<script src="https://cdn.jsdelivr.net/gh/oskarmeyenburg/SnowFlakesJs/snowflakes.min.js"></script>
<script>
    SNOWFLAKE_SPEED = 0.5;
    SNOWFLAKE_NUMBER = 30;
</script>
```
<br>

In case you encounter performance issues, consider using an alternative version that uses CSS for animations. Include the script as follows:
```
<script src="https://cdn.jsdelivr.net/gh/oskarmeyenburg/SnowFlakesJs/snowflakes.min.js"></script>
```
<br>

Feel free to experiment with other variables to achieve the desired visual effect on your website!

## Customizable variables
### SNOWFLAKE_START_DATE and SNOWFLAKE_END_DATE
Set the time range during which the snowflake effect is active. The end date is exclusive. By default the effect will be effect active around Christmas. The date format consists of the month followed by a decimal point and the day. Ensure single-digit days have leading zeros.
<br>Default:<br>``SNOWFLAKE_START_DATE = 12.22;``<br>``SNOWFLAKE_END_DATE = 12.26;``<br>

### SNOWFLAKE_SPEED
Determine the average downward velocity for each snowflake.
<br>Default:<br>``SNOWFLAKE_SPEED = 1;``

### SNOWFLAKE_SPEED_DIVERGENCE
Specify the range for the speed of the snowflakes as a divergence.
<br>Default:<br>``SNOWFLAKE_SPEED = 1;``

### SNOWFLAKE_MIN_SIZE and SNOWFLAKE_MAX_SIZE
Set the range of random sizes in pixels for each snowflake.
<br>Default:<br>``SNOWFLAKE_MIN_SIZE = 5;``<br>``SNOWFLAKE_MAX_SIZE = 15;``<br>

### SNOWFLAKE_ROTATION_SPEED
Control the rotation speed of snowflakes in degrees per second. This option is not supported by the CSS version.
<br>Default:<br>``SNOWFLAKE_ROTATION_SPEED = 25;``<br>

### SNOWFLAKE_NUMBER
Set the total count of snowflakes spawned at the beginning.
<br>Default:<br>``SNOWFLAKE_NUMBER = 20;``<br>

### SNOWFLAKE_CENTER_REDUCTION
Reduce the spawning of snowflakes in the center of the screen.
<br>Default:<br>``SNOWFLAKE_CENTER_REDUCTION = true;``<br>

### SNOWFLAKE_COLORS
An array containing possible colors from which the color for each new snowflake is randomly chosen.
<br>Default:<br>``SNOWFLAKE_COLORS = ["#dddddd", "#f2f2f2", "#ffffff"];``<br>

### SNOWFLAKE_SYMBOLS
Each newly spawned snowflake is assigned a random symbol from this array.
<br>Default:<br>``SNOWFLAKE_SYMBOLS = ["❅", "❆", "*", "●"];``<br>

### SNOWFLAKE_SHADOW
Enable a slight shadow behind snowflakes.
<br>Default:<br>``SNOWFLAKE_SHADOW = true;``<br>

### SNOWFLAKE_SHADOW_COLOR
Set the color of shadows behind snowflakes when shadows are enabled.
<br>Default:<br>``SNOWFLAKE_SHADOW_COLOR = #000000;``<br>

### SNOWFLAKE_SPAWN_ON_SCREEN
Spawn snowflakes on the screen instead of above it when the site loads. This option is not supported by the CSS version.
<br>Default:<br>``SNOWFLAKE_SPAWN_ON_SCREEN = false;``<br>