/* your code should go here */

var tmpl = '<li><div class="icon"><img src="img/icons/IMG.png"></div><div class="stats"><h2>DAY</h2><strong>min</strong> VALMIN °C<strong>max</strong> VALMAX ºC</div> </li> ';

$(document).ready(function(){
  controller.init();
});

var model = {
    collection: data,
    
    getSummary: function(){
        var summary = [];
        for (var i = 0; i<this.collection.length; i++){
            //controllo se il giorno esiste
            if(summary[this.collection[i].day] == undefined){
        //se non esiste ne creo uno con min e max settati
              summary[this.collection[i].day] = {
                min: this.collection[i],
                max: this.collection[i],
              };
                //alert(summary[this.collection[i].day]);
            } else {
                if(this.collection[i].temperature<summary[this.collection[i].day].min){
                   summary[this.collection[i].day] = this.collection[i];
                   }
                if(this.collection[i].temperature>summary[this.collection[i].day].max){
                   summary[this.collection[i].day] = this.collection[i];
                   }
              }
        }
        alert("summary ritornato: " + JSON.stringify(summary["Saturday"]));
        return summary;
    }
};
    
var controller = {
    init: function(){
        view.summary();
    }, 
    /*data_lenght: function(){
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
    }*/
    
    getSummary: function(){
        return model.getSummary();
    }
};
    
var view = {
    summary: function(){
        /*for(var i=0; i< controller.data_lenght(); i=i+4){
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
        }*/   
    var list = [];
    list = controller.getSummary();
    //alert(controller.getSummary());    
    list.forEach(function(val, index){
        var temp = tmpl.replace("IMG",val.condition).replace("DAY",val.day).replace("VALMIN",val.min).replace("VALMAX",val.max);
        $("#summary").append(temp);

    });
    //array.forEach(function(value,index){console.log(index);})
    }
};







