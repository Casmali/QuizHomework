$(document).ready(function(){
	var pars=["#q1","#q2","#q3","#a1","#a2","#a3"];
	var indx=0;
	var cycle = 3;
	$("#k2").click(function(){
		if(indx > 2){
			$("#fin").show();
			$("#k2").hide();
			$("#k1").hide();
			$("#a3").hide();
		}else{
			$("#k1").show();
			$("#k2").hide();
			$(pars[indx]).show();
			if(indx != 0){
				$(pars[indx+2]).hide();
			}
		}
	});
	$("#k1").click(function(){
		$("#k2").show();
		$("#k1").hide();
		$(pars[indx]).hide();
		$(pars[indx+3]).show();
		indx = indx+1;
	});
	
	
	$("#img").click(function(){
		if(cycle == 1){
			for (i=0; i < pars.length; i++){
				$("#k2").hide();
				$("#k1").hide();
				$(pars[i]).show();
			}
			cycle = 2;
		} else {
			for (i=0; i < pars.length; i++){
				$("#k2").show();
				$(pars[i]).hide();
			}
			cycle = 1;
			indx=0;
			$("#fin").hide();
		}
	});
});
