/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/
var convert = function(s, numRows) {
    let output_arr=[];
    let column=0;
    let s_arr_index=0;
    let pointer=0;
    let row=0;
    let length=s.length;
    for(var x=0;x<length;x++)//loop through all chars
    {
    if(pointer<=1)// next step is the start of new column
     {
         for(let row=0;row<numRows;row++)// loop till numRow populate coulmn by column
         {
             pointer=row;
             if(s[s_arr_index])
             {
  
              
              if (!output_arr[row]) 
              {
                  output_arr[row] = [];
              }
  
              output_arr[row][column]=s[s_arr_index];
              s_arr_index++;
              
              x++;
             }else{
                 break;
             }
            
         }
         column++;
         x--;//to cater for increment in x due to loop
     
     }else{
         
        
         if(s[s_arr_index])
          {
              pointer--;
              if (!output_arr[pointer]) output_arr[pointer] = []
              output_arr[pointer][column]=s[s_arr_index];
              
              column++;
              s_arr_index++;
              
          }else{
              
              break;
          }
         
     }
            
     }
     let output_str="";
     output_arr.forEach(function(entry) {
      entry.forEach(function(entry2) {
          if(entry2)
          {
             
              output_str=output_str+entry2;
          }
          
      });
     });
     
     return output_str;
  };
  
console.log(convert("trgishiring",3));