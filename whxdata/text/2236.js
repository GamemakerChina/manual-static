rh._.exports({"0":[[" ","effect_create_below"]],"1":[["effect_create_below,ef_cloud,ef_ellipse,ef_explosion,ef_firework,ef_flare,ef_rain,ef_ring,ef_smoke,ef_smokeup,ef_snow,ef_spark,ef_star"]],"2":[[" ","effect_create_below"," ","DEPRECATED"]],"3":[[" ","This function creates a simple effect below all instances of your room (it is actually created at a depth of 50)."," ","NOTE"," This function is deprecated. To create a particle effect at any depth or layer, you can use ","effect_create_depth"," or ","effect_create_layer"," instead."," ","The effect types ","ef_rain"," and ","ef_snow"," don't use the x/y position (although you must provide them). The size can be a value of 0, 1, or 2, where 0 is small, 1 is medium and 2 is large."," ","The available constants for the different particle kinds are: "," ","Constant"," ","Example"," ","Description"," ","ef_cloud"," ","An effect that creates random cloud particles of varying sizes"," ","ef_ellipse"," ","An effect that creates expanding ellipses"," ","ef_explosion"," ","An effect that creates expanding fading explosions"," ","ef_firework"," ","An effect that creates multiple small particles to generate a firework explosion"," ","ef_flare"," ","An effect that generates a brilliant point that flares up and fades out"," ","ef_rain"," ","An effect that generates rain particles coming down from the top of the screen"," ","ef_ring"," ","An effect that generates expanding and fading circles"," ","ef_smoke"," ","An effect that generates little puffs of smoke"," ","ef_smokeup"," ","An effect that creates a smoke plume that rises up the screen"," ","ef_snow"," ","An effect that generates multiple snow particles falling down the screen"," ","ef_spark"," ","An effect that generates a small spark"," ","ef_star"," ","An effect that generates star particles"],[" ","effect_create_below","(kind, x, y, size, colour);"," ","Argument"," ","Type"," ","Description"," ","kind"," ","Effect Type Constant"," ","The kind of effect (use one of the constants listed above)."," ","x"," ","Real"," ","The x positioning of the effect if relevant."," ","y"," ","Real"," ","The y positioning of the effect if relevant."," ","size"," ","Real"," ","The size of the effect."," ","colour"," ","Colour"," ","The colour of the effect."],[" ","N/A"],[" ","if speed > 0","\n    {"," ","effect_create_below","(ef_smoke, x, y, 0, c_gray);","\n    }"," ","The above code will create a small puff of gray smoke every step that the instance speed is greater than 0 at the instance x,y coordinates."," ","Back: ","Particles"," ","Next: ","effect_create_above"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["effect_create_below,ef_cloud,ef_ellipse,ef_explosion,ef_firework,ef_flare,ef_rain,ef_ring,ef_smoke,ef_smokeup,ef_snow,ef_spark,ef_star"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2236"})