function type_check_v1(arg1,arg2){
	if (typeof arg1 === arg2){
		return true;
	}else{
		return false;
	}
}

function type_check_v2(arg1,params){
	var value = false;
	if (params.type){
		if (type_check_v1(arg1,params.type)){
			if (params.type === "object"){
				return true;
			}else if (params.type === "string" || params.type === "number"){
				if (arg1 === params.value){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}
		}
	}else if (params.enum){
		for ( var i = 0; i < params.enum.length; i++ )
    		{
    			if ( arg1 === params.enum[i]){
    				value = true;
    				break;
    			}else{
    				value = false;
    			}
    		}
    		return value;
	
	}else{
		return false;
	}
}

function type_check(){

}

console.log(type_check_v2(3,{enum:["foo",3,"bar"]}));