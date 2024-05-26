rh._.exports({"0":[[" ","Data Structures"]],"2":[["Data Structures"]],"3":[[" ","Data Structures"]],"4":[[" ","In games you often need to store information in a precise and ordered way. For example, you may need to store lists of items that a person carries or you may want to store a grid of places that still need to be visited."," ","GameMaker"," has a number of built-in ","data structures"," that can be accessed through specialist functions. There are six different types of data structure available, each one having its own benefits depending on the type of information that you are looking to store and how you wish to manipulate it later: stacks, queues, lists, maps, priority queues, and grids."," ","NOTE"," It is recommended to use ","arrays"," and ","structs"," over DS lists and maps, as they now have similar functionality, are easier to use and are garbage collected automatically."," ","Essentially, all data structures work in the same way - you create a data structure and store its reference in a variable. You then use this reference to use the data structure in all further function calls that can perform operations on it. Finally, once you are done you destroy the data structure again to remove it from memory. You can use as many of the structures at the same time as you need, and all structures can store any of the available ","Data Types","."," ","NOTE"," As with all dynamic resources, data structures take up memory and so should ","always"," be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game."," ","Information on the different data structures can be found in the following sections:"," ","Grids"," ","Lists"," ","Maps"," ","Priority Queues"," ","Queues"," ","Stacks"," ","Before using data structures in your game, you should also be aware that there are certain moments when, due to rounding errors, you may get a result that is not what you expected. This may be resolved by changing the DS precision using the following function:"," ","ds_set_precision"," ","There is also a special function to check if a data structure of any given type exists:"," ","ds_exists"," ","Back: ","GML Code Reference"," ","Next: ","Strings"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1974"})