# SnowFlakesJs
**SnowFlakesJs** is a script that can be inserted into an HTML header to add a snowfall effect to a website. You can customize the appearance of the snowflakes by adjusting the constants at the beginning of the script.

To integrate the script into your HTML file, copy and paste the following line into the header:<br>
``<script src="https://cdn.jsdelivr.net/gh/oskarmeyenburg/SnowFlakesJs/snowflakes.min.js"></script>``
<br><br>
If you prefer to modify the constants, add another script tag containing your adjustments. Refer to the list of available constants below for customization options.
Here is an example for the usage with adjustments to SNOWFLAKE_MAX_SPEED and SNOWFLAKE_NUMBER.
```
<script src="https://cdn.jsdelivr.net/gh/oskarmeyenburg/SnowFlakesJs/snowflakes.min.js"></script>
<script>
    SNOWFLAKE_MAX_SPEED = 0.2;
    SNOWFLAKE_NUMBER = 30;
</script>
```

## Customizable constants
### SNOWFLAKE_START_DATE and SNOWFLAKE_END_DATE
Set the time range during which the snowflake effect is active. The start date is inclusive and the end date is exclusive. By default the effect will be effect only in december.
<br>Default:<br>``SNOWFLAKE_START_DATE = 1.12;``<br>``SNOWFLAKE_END_DATE = 1.1;``<br>

### SNOWFLAKE_MIN_SPEED and SNOWFLAKE_MAX_SPEED
Determine the range of random downward velocities for each snowflake. The velocity is a percentage of the screen size, ranging from SNOWFLAKE_MIN_SPEED to SNOWFLAKE_MAX_SPEED.
<br>Default:<br>``SNOWFLAKE_MIN_SPEED = 0.05;``<br>``SNOWFLAKE_MAX_SPEED = 0.15;``<br>

### SNOWFLAKE_MIN_SIZE and SNOWFLAKE_MAX_SIZE
Set the range of random sizes in pixels for each snowflake, varying from SNOWFLAKE_MIN_SIZE to SNOWFLAKE_MAX_SIZE.
<br>Default:<br>``SNOWFLAKE_MIN_SIZE = 5;``<br>``SNOWFLAKE_MAX_SIZE = 15;``<br>

### SNOWFLAKE_ROTATION_SPEED
Control the rotation speed of snowflakes in degrees per second.
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
Set the color of shadows behind snowflakes when SNOWFLAKE_SHADOW is enabled.
<br>Default:<br>``SNOWFLAKE_SHADOW_COLOR = #000000;``<br>

### SNOWFLAKE_SPAWN_ON_SCREEN
Spawn snowflakes on the screen instead of above it when the site loads.
<br>Default:<br>``SNOWFLAKE_SPAWN_ON_SCREEN = false;``<br>