var app = new Vue({
    el: "#app",
    data:{
        meses:[],
        today: (new Date).getMonth() +1,
        mesSeleccionado: {}
    },
    methods: {
      calcularMes(){
        this.mesSeleccionado = this.meses.find(x => x.numero == this.today)
      },
      mesAnterior (today){
        if (today > 1){
        app.today = app.today - 1;
      } else {
            app.today = app.today - 1 + 12;
         }
      },
      mesPosterior (today){
        if (today < 12){
            app.today = app.today + 1;
          } else {
            app.today = app.today + 1 - 12;
          }
      },
      seleccionarEstadio(map, index){
        $("#selectedMap").attr("src", map);
      }
    }
});

app.meses = meses;
app.meses.forEach(mes => {
    mes.fechas = fechas.filter(fecha => fecha.mes == mes.numero);
    if (mes.fechas.length > 0){
        mes.fechas.forEach(fecha => {
            fecha.partidos = partidos.filter(partido => partido.matchday == fecha.numero);
    });
    }
});
$("#title1").show();
$("#app").show();
$("#aContact").show();
$("#block1").show();
$("#title2").hide();
$("#contact").hide();
$("#aSchedule").hide();

function cambioPagina(pagina){
  // var scheduleSection = document.getElementById("app");
  // var contactSection = document.getElementById("contact");
  // if(contact.style.display == "none"){
  //   schedule.style.display =  "none";
  //   scheduleSection.style.display =  "none";
  //   contact.style.display =  "block";
  //   contactSection.style.display =  "block";
  // } else {
  //   contact.style.display =  "none";
  //   contactSection.style.display =  "none";
  //   schedule.style.display =  "block";
  //   scheduleSection.style.display =  "block";
  // }
  if(pagina == "schedule"){
    $("#title1").hide();
    $("#app").hide();
    $("#aContact").hide();
    $("#block1").hide();
    $("#title2").show();
    $("#contact").show();
    $("#aSchedule").show();
  } else if(pagina == "contact"){
    $("#title1").show();
    $("#app").show();
    $("#aContact").show();
    $("#block1").show();
    $("#title2").hide();
    $("#contact").hide();
    $("#aSchedule").hide();
  }
}
