

//1 display number in text box


function displayNumber(num){
    result.value+=num
    
    }
    //2 clear text box
    
    
    function clearbox(){
    
    
        result.value=""
    }
    
    // evaluate expression
    
    function evaluateExp(){
    
    
        result.value=eval(result.value)
    }
    
    //remove lastitem
    
    function removelastitem(){
    result.value=result.value.slice(0,-1)
    
    }