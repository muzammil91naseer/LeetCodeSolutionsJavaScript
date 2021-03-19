/* Letter Combinations of a Phone Number
Medium

5547

502

Add to List

Share
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9']
 */
 var letterCombinations = function(digits) {
    var converter=[];
    converter[2]=['a','b','c'];
    converter[3]=['d','e','f'];
    converter[4]=['g','h','i'];
    converter[5]=['j','k','l'];
    converter[6]=['m','n','o'];
    converter[7]=['p','q','r','s'];
    converter[8]=['t','u','v'];
    converter[9]=['w','x','y','z'];
                  
    var output=[];
    if(digits!="")
    {
        for(var i=0;i<digits.length;i++)
        {
            if(i==0 && digits[i+1])
            {
                //first iteration
                var first_arr=converter[digits[i]];
                var second_arr=converter[digits[i+1]];
                first_arr.forEach(function(first_val)
                {
                    second_arr.forEach(function(second_val)
                    {
                        output.push(first_val+second_val);
                        
                    });
                });
                i++;
               
            }else if(i==0)
             {
                var first_arr=converter[digits[i]];
                
                first_arr.forEach(function(first_val)
                {
                    output.push(first_val);
                });
             }
            else
            {
                var first_arr=output;
                var second_arr=converter[digits[i]];
                var counter=0;
                first_arr.forEach(function(first_val)
                {
                   
                    second_arr.forEach(function(second_val)
                    {
                        
                        output.push(first_val+second_val);
                       
                        
                    });
                    counter++;
                   
                });
                
                for(var j=0;j<counter;j++)
                {
                      
                    output.shift();
                    
                
                }
                
            }
            

        }
        return output;
    }
    else
    {
        return output;
    }
};