/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    if(s.length>0){
        s=s.trim();
        let int_val=1;
        let multiplyer=0;
        let sign_exists=0;
        let num_length=0;
        let sign="";
        let s_length=s.length;
        
        let str_digits="";
        let started=0;
        for (let i=0;i<s_length;i++){
            if (i==0 && (s[i]=="-" || s[i]=="+")){
                sign=s[i];
            }else if(s[i]==" " && started==1){
                //skip
                console.log("empty string");
                break;
            }
            else if(s[i] <= 9 && s[i] >= 0){
                str_digits=str_digits+s[i];
                console.log("i: ",i);
                console.log("here: ",s[i]);
                started=1;
            }
            else
            {
                break;
            }
        }
        
        s=str_digits;
        s=s.trim();
        s_length=s.length;
        console.log("s:  ",s);
        console.log("s Length: "+s_length);
        num_length=s_length;
        let first=false;
        if(s_length>0){
        for (let i=0;i<s_length;i++){
            
            if(s[i]<=9 && s[i]>=0)
            {
                if(first==false)
                {
                  
                    int_val=s[i];  
                   
                    num_length=num_length-1;
                    
                    console.log("0 num_length: ",num_length);
                    int_val=int_val*(Math.pow(10, num_length));
                    console.log("0 int Val: ",int_val);
                    first=true;
                    
                }
                else
                {
                        //num_length=num_length;
                        num_length= num_length-1;
                        int_val=int_val+(s[i]*(Math.pow(10, num_length)));
                        console.log(i+" num_length: ",num_length);
                        console.log(i+" int Val: ",int_val);
                }
                    
            }
                
                };
                if(sign=="-"){
                    int_val=((-1)*int_val);
                }
                console.log("final: ",int_val);
                if(int_val<-2147483648){
                    return -2147483648;
                }
                else if(int_val>2147483647)
                {
                    return 2147483647;
                }else{
                    return int_val;
                }
                
            }//end if
            else{
                return 0;
            }
            }else{
                return null;
            }
            

            }
        
        
   

    var out=myAtoi("41");
    console.log(out);
    var out=myAtoi("-41");
    console.log(out);
    out=myAtoi("4193 with words");
    console.log(out);
    out=myAtoi("words and 987");
    console.log(out);
    out=myAtoi("-91283472332");
    console.log(out);
    out=myAtoi("91283472332");
    console.log(out);
    out=myAtoi('+-12');
    console.log(out);
    out=myAtoi("   +0 123");
    console.log(out);
    
    