/* your code should go here */

var tmpl = '<li><div class="icon"><img src="img/icons/IMG.png"></div><div class="stats"><h2>DAY</h2><strong>min</strong> VALMIN °C<strong>max</strong> VALMAX ºC</div> </li> ';

$(document).ready(function(){
  controller.init();
});

var model = {
    collection: data
};
    
var controller = {
    init: function(){
        view.summary();
    }, 
    data_lenght: function(){
        return model.collection.length;
    },
    
    getTemp: function(index){
        return model.collection[index].temperature;
    },
    
    getDay: function(index){
        return model.collection[index].day;
    },
    
    getCondition: function(index){
        return model.collection[index].condition;
    }
};
    
var view = {
    summary: function(){
        for(var i=0; i< controller.data_lenght(); i=i+4){
            var minimo = 60;
            var massimo = -60;
            for(var j=0; j<4;j++){
                var actual= controller.getTemp(i+j);
                if(actual<minimo){
                    minimo=actual;
                }
                if(actual>massimo){
                    massimo=actual;
                }
            }
            var dayName = controller.getDay(i);
            var condition = controller.getCondition(i);
            var temp = tmpl.replace("IMG",condition).replace("DAY",dayName).replace("VALMIN",minimo).replace("VALMAX",massimo);
            $("#summary").append(temp);
            
        }
    }
};







