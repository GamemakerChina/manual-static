rh._.exports({"0":[[" ","Set Instance Colour"]],"1":[["GML Visual Action - Set Instance Colour"]],"2":[["Set Instance Colour"]],"3":[[" "," Set Instance Colour"]],"4":[[" ","This action block sets the ","image_blend"," colour for \"blending\" with the instance sprite. The default value is the hex code $FFFFFFFF (which represents the colour white using ","ARGB","    format) and this will draw the sprite using no blending and full alpha. Any other value (including internal colour constants like ","c_red",", or ","c_aqua",") will ","blend"," the specified colour with the original sprite as well as set the\n    ","image_alpha"," component for the instance, but only when the ","Use Alpha"," checkbox is ticked. This will overwrite any alpha value set previously using the action ","Set Instance Alpha","."," ","Please note that for changes in this action to be visible, the instance should have either ","no"," draw event (and so ","GameMaker"," will default draw the sprite) or be drawn using ","Draw Self"," action. It is\n    important to note too that you should try to limit blending on the ","HTML5"," platform (unless using WebGL), as each blended sprite has to be cached separately and so having many blended sprites may adversely affect performance."],[" ","Argument"," ","Description"," ","Colour"," ","The new blending colour to use (clicking the colour swatch will open the colour picker window)."],[" ","The above action block code sets a new sprite as well as a number of other\n    properties for how that sprite is to be displayed, including setting the blend colour to pink."," ","Back: ","Instance Actions"," ","Next: ","If Instance Exists"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1888"})