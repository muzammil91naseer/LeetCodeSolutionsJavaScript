/*
URL= https://leetcode.com/problems/integer-to-roman/'

Integer to Roman
Medium

1635

3092

Add to List

Share
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
 */
 var intToRoman = function(num) {
    let converter=[];
    converter[0]={'roman':'I' , 'decimal':'1'};
    converter[1]={'roman':'IV' , 'decimal':'4'};
    converter[2]={'roman':'V' , 'decimal':'5'};
    converter[3]={'roman':'IX' , 'decimal':'9'};
    converter[4]={'roman':'X' , 'decimal':'10'};
    converter[5]={'roman':'XL' , 'decimal':'40'};
    converter[6]={'roman':'L' , 'decimal':'50'};
    converter[7]={'roman':'XC' , 'decimal':'90'};
    converter[8]={'roman':'C' , 'decimal':'100'};
    converter[9]={'roman':'CD' , 'decimal':'400'};
    converter[10]={'roman':'D' , 'decimal':'500'};
    converter[11]={'roman':'CM' , 'decimal':'900'};
    converter[12]={'roman':'M' , 'decimal':'1000'};
    // start from largest, subtract from num if result positive do it again,if negative, try second largest and so on
    var remainder=num;
    var roman="";
    var index=12;
    while(remainder>0)
    {
        if(converter[index])
        {
            
            if(converter[index]['decimal'])
            {
                if((num-converter[index]['decimal'])>=0)
                {
                    roman=roman+converter[index]['roman'];
                    remainder=num-converter[index]['decimal'];
                    num=remainder;
                }
                else
                {
                    index--;
                    if(index<0)
                    {
                        break;
                    }
                }
            }
        }
    }
    return roman;
    
};