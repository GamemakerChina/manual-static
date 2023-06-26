rh._.exports({"0":[[" ","round"]],"1":[["round"]],"2":[[" ","round"]],"3":[[" ","Just as it says, ","round()"," takes a real number and rounds it up or down to the nearest integer. In the special case where the number supplied is exactly a half-integer (1.5, 17.5, -2.5, etc), the number will be rounded to the nearest ","even","    value, for example, 2.5 would be rounded to 2, while 3.5 will be rounded to 4. This type of rounding is called ","bankers rounding"," and over large numbers of iterations or when using floating point maths, it gives a statistically better rounding\n    than the more traditional \"round up if over .5 and round down otherwise\" approach."," ","What this means is that if the fraction of a value is 0.5, then the rounded result is the ","even integer"," nearest to the input value. So, for example, 23.5 becomes 24, as does 24.5, while -23.5 becomes -24, as does -24.5. This method treats positive\n    and negative values symmetrically, so is therefore free of sign bias, and, more importantly, for reasonable distributions of values, the expected (average) value of the rounded numbers is the same as that of the original numbers."],[" ","round(n);"," ","Argument","Type"," ","Description"," ","n","Real"," ","The number to round."],[" ","Real"],[" ","score += round(hp / 5);"," ","The above code will add a rounded integer onto the score value."," ","Back: ","Number Functions"," ","Next: ","floor"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["round"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1043"})