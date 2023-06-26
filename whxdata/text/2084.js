rh._.exports({"0":[[" ","For"]],"1":[["For"]],"2":[[" "," For"]],"3":[[" ","The ","For"," action is used to perform loops that only terminate when a value reaches the given condition. You give an initial value as a variable (which can be flagged as a temporary local variable - this is usually what you want), then you give\n    the condition to check the variable against (for example if it is less than a certain value), and then finally the amount to increment the variable by each iteration of the loop. So, the general flow is as follows:"," ","You initialise a variable to a value"," ","You set the condition to check this variable against"," ","You set how much the variable should be incremented by each iteration of the loop"," ","You then add actions into the loop, and these will be run for each iteration until the condition returns ","false"," or a Break action is encountered."," ","When adding actions to be performed within the loop, these are added much as you would add an action to an \"if\", ie: dropping it to the side of the action rather than under it:"," ","All actions added to the side will be included in the For and will be performed before the event or script continues\n    with the actions added under. Note that you can end any loop prematurely if you call the ","Break"," action, and when using For loops you don't ","have"," to increment and you can make it decrement too, as long as the condition\n    you use is appropriate. For example, set the initial variable to 10, set the condition to check for less than 0 and then set the increment value to -1 and the loop will iterate 10 times, counting backwards from 10 to 0."],[" ","Argument"," ","Description"," ","Initialise"," ","Initialise the variable that will be used for counting to a value (can be flagged as a temporary local variable)"," ","Condition"," ","The condition to check to break the loop"," ","Increment"," ","The amount to increment (or decrement) the initial count variable by each iteration of the loop"],[" ","The above action block code runs a ","for"," loop to check and see if a gamepad is connected to any of the 12 available\n    \"slots\". If a gamepad is discovered, a global variable is set to the current slot number and the loop is broken."," ","Back: ","Loop Actions"," ","Next: ","Break"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - For"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2084"})