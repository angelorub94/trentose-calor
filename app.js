/* your code should go here */

var tmpl = '<li><div class="icon"><img src="img/icons/IMG.png"></div><div class="stats"><h2>DAY</h2><strong>min</strong> VALMIN °C<strong>max</strong> VALMAX ºC</div> </li> ';

$(document).ready(function(){
  controller.init();
});

var model = {
    collection: data,
    summary: [],
    getSummary: function(){
        for (var i = 0; i<this.collection.length; i++){
            //controllo se il giorno esiste
            if(summary[this.collection[i].day] == undefined){
        //se non esiste ne creo uno con min e max settati
              summary[this.collection[i].day] = {
                min: this.collection[i].temperature,
                max: this.collection[i].temperature,
                day: this.collection[i].day,  
                cond: this.collection[i].condition,
              };
            } else {
                if(summary[this.collection[i].day].min>this.collection[i].temperature){
                   summary[this.collection[i].day].min = this.collection[i].temperature;
                   }
                if(summary[this.collection[i].day].max<this.collection[i].temperature){
                   summary[this.collection[i].day].max = this.collection[i].temperature;
                   }
              }
        }
        return summary;
    }
};
    
var controller = {
    init: function(){
        view.summary();
    }, 
    
    getSummary: function(){
        return model.getSummary();
    }
};
    
var view = {
    summary: function(){
        var list = controller.getSummary();   
        
        //mi serve un vettore in cui salvo i diversi giorni.
        var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        
        for(i=0; i<days.length;i++){
            if(list[days[i]] != undefined){
            var temp = tmpl.replace("IMG",list[days[i]].cond).replace("DAY",list[days[i]].day).replace("VALMIN",list[days[i]].min).replace("VALMAX",list[days[i]].max);
            $("#summary").append(temp); 
            }
        }       
    }
};







