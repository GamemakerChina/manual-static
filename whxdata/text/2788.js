rh._.exports({"0":[[" ","The Debug Overlay"]],"1":[["debug,overlay"]],"2":[[" ","The Debug Overlay"]],"3":[[" ","The Debug Overlay"," is an in-game overlay that displays various realtime debug information about your game."," ","It includes the following three windows by default: ","FPS"," (open by default), ","Log",", and ","Audio",". Additionally, it displays the ","GameMaker"," version in the top-right corner, along with the version and name of the project."," ","The Debug Overlay"," can be accessed using the functions ","show_debug_overlay"," and ","show_debug_log",", the first opens the overlay with the ","FPS"," window open, the second with the ","Log"," window open."," ","You can define your own, custom debug views in ","The Debug Overlay"," using ","dbg_view",". Debug views can have sections added to them using ","dbg_section",", which you can add controls to such as sliders, string input boxes, etc. These allow you to change the values of variables through references created using ","ref_create",". The ","DebugView"," option under the ","Debug"," menu determines if custom views are visible. All debug views are listed under the ","Views"," menu and can have their visibility toggled here."],[" ","The title bar for this window shows the current number of texture swaps, the number of vertex batches, the current FPS (","fps_real",") and a bar showing the stacked time values: "," ","NOTE"," Texture swaps and vertex batches will never be zero and will normally show values of 2 or 3, since even with an empty room and no objects ","GameMaker"," still has to draw and batch things."," ","Inside this window, you have two sections: a graph and a bar."," ","The graph displays the FPS (","fps_real",") by default, where the horizontal axis is the amount of time passed since the FPS menu was opened, and the vertical axis is the frame time in seconds."," ","The ","FrameTime"," value is the time each frame took to process, in seconds. This value should be less than the time a single frame can take. If the game speed is e.g. set to 60FPS, then every frame can take at most 1/60 = 0.0166... seconds. If it takes any longer than that, it means that ","GameMaker"," is still processing the current frame while it should already be processing the next one. The (real) FPS will drop below the game speed as a result."," ","Enable the ","Stacked"," option to display the time values for specific types of processing that ","GameMaker"," does: "," ","These are: "," ","Garbage Collector",": Time spent by the ","Garbage Collector"," ","IO&YoYo",": Time spent for input/output (","keyboard",", ","mouse",", ","gamepads",", ","networking","), and some OS processing"," ","Update",": Time spent in the update loop of the game (Step events, etc.)"," ","Draw",": Time spent drawing (Draw events)"," ","Text",": Time spent by the text in ","Sequences"," ","Scroll",": Time spent processing scrolling backgrounds in ","rooms",", and ","video"," ","You can click on each value in the top-right corner (next to their coloured boxes) to toggle their visibilities."," ","The ","History"," bar controls the horizontal range that is visible in the graph. You can set this between 1 and 30 seconds."],[" ","This window displays the Output Log, same as the one that appears in the IDE under ","The Output Window","."," ","All debug messages that you show using ","show_debug_message"," and ","show_debug_message_ext"," are also shown here."," ","The text field at the bottom of the window allows you to provide basic console input: "," ","You can write a global variable name to print its value, or a global function name to execute it, with space-separated arguments (e.g. ","func arg0 arg1",")"," ","The console stores a history of your last commands. Press the Up and Down arrow keys to go through the previous commands."," ","The console also supports autocomplete that you can access by pressing the Tab key, which will be shown when the cursor is on a word with more than 2 characters. Up and Down keys select the option in the dropdown box and Escape closes the autocomplete: "," ","NOTE"," While you type commands in the console input, ","GameMaker"," continues to trigger events based on the ","Keyboard Input"," that you provide, meaning your game still receives input."," ","The input follows a couple rules: "," ","If the first word is a global function, then it will be executed with the arguments given."," ","If the first word is a built-in variable, then its value is printed."," ","All subsequent words following the first word are converted into values that are passed as arguments to the function, as follows: "," ","First it tries to interpret it as a global scope value, if one is found, it is passed in as an argument"," ","If it is an asset name then the reference to that asset is passed"," ","true"," and ","false"," can be used for boolean values"," ","If it is a number then a real number is passed"," ","Any text surrounded by double quotes ","\"\""," is treated as a string"," ","Anything else not following the above rule is treated as a string"," ","NOTE"," All scripts are executed within the scope of the ","global"," struct."," ","A simple command looks like this: "," ","show_debug_message \"Hello World!\""," ","WARNING"," No parentheses should be added here. If you add them here like you normally would in ","GML Code",", the function won't be executed and a line ","ERROR : unknown command"," will be shown in the output."," ","Finally, you can ","Clear"," the output and ","Copy"," its contents to the clipboard."],[" ","This window shows debug information related to the audio playing in your game."," ","The graph displays the most recent output buffer on the audio thread. This is the output signal that ","GameMaker"," sends to the audio device, after all mixing and processing."," ","The horizontal axis in this graph is the frame number in the buffer, and the vertical axis is the amplitude, typically ranging between -1 and 1."," ","The list at the bottom shows you each sound \"source\" that is currently playing, or may potentially play a sound. The columns display the following values:"," ","source",": The ID of the source"," ","buffer",": The ID of the buffer attached to this source"," ","numProcessed",": The number of queued buffers that the source has played through (which gets cleaned up at certain points)"," ","numQueued",": The number of buffers that are queued on this source (including processed ones)"," ","gain",": The source gain as a 16-bit value (0-65535)"," ","name",": The name of the asset. Dynamically created assets (such as buffer sounds) will not show a name."," ","pos",": The current playback position of the source in frames (as a hex value)"," ","These sources are limited by the ","audio_channel_num"," value."],[" ","This toggles the visibility of all custom debug views created using ","dbg_view","."],[" ","This menu lists all the custom debug views that you've created using ","dbg_view","."," ","Each menu item shows the name of the debug view with a check mark on the right if the view is set to be visible. Clicking the menu item toggles the visibility of this debug view."," ","NOTE"," The Debug menu's ","DebugView"," setting must be enabled for any custom debug views to be shown."],[" ","A custom"," ","debug view is created using ","dbg_view",":"," ","custom_dbgview = dbg_view(\"Custom Debug View\", true);"," ","The first argument is its name, the second is its visibility. Optional parameters can be passed to customise its position and size."," ","Within debug views, you create sections using ","dbg_section",": "," ","custom_section = dbg_section(\"Custom Section\");"," ","To these sections you add controls that display and/or modify the value that they're linked to via a reference created with ","ref_create","."," ","References can be created to all kinds of variables. Each control supports a reference to one or more datatypes."," ","IMPORTANT"," Variables must exist within a ","struct"," or ","instance"," as a debug view is declared once, so local variables ","cannot"," be displayed."," ","Visually, controls are laid out in a grid that has two columns: most controls span two columns, some only a single. Two single column controls can be placed on a single line by calling ","dbg_same_line",": "," ","button1 = function()","\n    {","\n        show_debug_message(\"Button1 clicked!\");","\n    }"," ","\n    ref = ref_create(self, \"button1\");","\n    dbg_text(\"This text will go here\");","\n    dbg_same_line();","\n    dbg_button(\"Button1\", ref);\n  "," ","NOTE"," A debug control created before a section is created will be added to a new section named ","\"Default\"",". A debug section that's created before a debug view is created will be added to a debug view ","\"Default\"","."," ","The above lines of code will show the following window in ","The Debug Overlay",": "],[" ","This menu contains two settings related to the debug overlay: "," ","Scale"," - the scale factor of the debug overlay, default is ","x","1"," ","Alpha"," - the alpha value to use to draw the overlay, default is ","0.8"],[" ","show_debug_overlay"," ","show_debug_log"," ","is_debug_overlay_open"],[" ","dbg_view"," ","dbg_view_delete"," ","dbg_section"," ","dbg_section_delete"],[" ","dbg_button"," ","dbg_checkbox"," ","dbg_colour"," ","dbg_drop_down"," ","dbg_same_line"," ","dbg_slider"," ","dbg_sprite"," ","dbg_text"," ","dbg_text_input"," ","dbg_watch"," ","Back: ","Debugging"," ","Next: ","show_debug_overlay"]],"4":[[" ","© Copyright ","YoYo Games"," ","Ltd."," ","2023"," All Rights Reserved"]],"5":[["The Debug Overlay"]],"7":[[" ","Debug"],[" ","Views"],[" ","System"],[" ","Function Reference"]],"8":[[" ","FPS"],[" ","Log"],[" ","Audio"],[" ","DebugView"],[" ","Creating Debug Views"],[" ","Toggling"],[" ","Views"],[" ","Controls"]],"id":"2788"})