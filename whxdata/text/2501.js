rh._.exports({"0":[[" ","Debugging"]],"1":[["debugging,error reporting,debug mode,performance"]],"2":[[" ","Debugging"]],"3":[[" ","When programming your game, whether using ","GML Code"," or ","GML Visual",", it can be very easy to make mistakes - using the wrong variables, passing the wrong arguments, or using the wrong functions are just some of the most common errors we all make - and these mistakes are not always detected by the ","syntax"," checker that is included with the script/action editor. That means that these mistakes will only become apparent when you actually run or compile your game, and even then it can sometimes be difficult to know exactly what is going wrong. It can therefore be of vital importance to know how your game is performing on the chosen device, as well as see what instances are in the room, what global variables have been created and a whole host of other details. Checking these things is called \"","debugging your code","\", and any errors or issues you may find are called \"","bugs","\"."," ","Now, you can check a lot of these things yourself by adding in so-called \"debug code\" to your games to display on the screen the information you require, or you can have it that it shows messages when there is an error, but this is often a lot of work and if you aren't sure where the problem is in the first place then it can be a time consuming case of trial and error to track down your bug. For that, ","GameMaker"," has a special test mode called ","Debug Mode"," which will start the ","Debug Module",", and there is also a comprehensive ","error reporting system"," which displays messages on ","Compiling"," to help you track down any problems with your game."," ","The sections below cover the different ways that you can debug your game:"," "," ","Error Reporting"," "," ","When an error occurs during the compiling and execution of a project this is reported with a message in the ","Compile Errors Output Window",", much like the one shown below:"," ","Most compiler error messages follow the same outline, with a message stating the object that the error has occurred in, then the Event along with the line number, and then finally a short description of the error itself. This type of information being provided by the error reporting is very important as it detects and reports the syntax and language related bugs that are going to cause your finished game to crash, but it won't report more subtle bugs, nor does it give feedback on performance. For those types of things you should use Debug Mode (explained below)."," ","Apart from these compile errors, you can also get syntax errors. These will be detected as you add your GML Visual actions or code and are shown in the ","Syntax Errors Output Window",", similar to the image shown below:"," ","As with the compiler errors, the syntax errors window will direct you to the object, the event and the specific lines that are giving the issue, and will often be shown with a brief explanation of what the error is."," "," ","Debug Mode"," "," ","If you need to check things more carefully, you can run the game in ","Debug Mode"," by clicking the debug run button ",". When you do, the ","Debug Module"," will open along with your game. This module permits you to monitor how everything is working in your game, from the global performance, right down to the values of individual variables in individual instances. You can find out further information about the Debug Module and its possibilities and how to use it from the following page:"," ","The Debugger"," ","Note that when you use the Debug Module, you can also add ","Breakpoints ","to your code or GML Visual. A breakpoint is a point in the game loop where you want the debug module to pause and let you step through the actual game code a line at a time. You can add breakpoints using the key \"F9\", and they will be shown in the ","Output Window"," where you can enable/disable them as required."," "," ","Additional Tools"," "," ","As an additional tool for debugging compiled games, there are certain ","command line parameters"," that can be used when you run the final game package on Windows. For information on how this works please see ","here","."," ","You can also generate a ","debug overlay"," when you are test running your game which will show additional debug information about the performance of your game as it is being run, and you can also output ","debug messages"," to the compile console where you can supply your own text to help debug the behaviour of your games. For more information see the following pages: "," ","show_debug_overlay"," ","show_debug_message"," ","debug_event"," ","There are also a set of preferences related to debugging and using the debug tools. You can find more information from the following page:"," ","Debugging Preferences"," ","Back: ","Introduction To ","GameMaker"," ","Next: ","The Output Window"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Debugging"]],"id":"2501"})