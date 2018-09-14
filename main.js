    
    var count2k9 = 2;
    var count2k10 = 0;
    var count2k11 = 0;

    var ref = firebase.database().ref("Accidents");

    ref.orderByChild("ACCIDENT_YEAR").equalTo(2009).on("child_added", function(count2k9){
        count2k9++;
        

    });
    ref.orderByChild("ACCIDENT_YEAR").equalTo(2010).on("child_added", function(){
        count2k10++;
    });
    ref.orderByChild("ACCIDENT_YEAR").equalTo(2011).on("child_added", function(){
        count2k11++;
    });



    var rootRef = firebase.database().ref().child("Accidents");
    rootRef.on("child_added", snap => {

        var year = snap.child("ACCIDENT_YEAR").val();
        var alcohol = snap.child("ALCOHOL_INVOLVED").val();
        var bicycle = snap.child("BICYCLE_ACCIDENT").val();
        var city = snap.child("CITY").val();
        var sev = snap.child("COLLISION_SEVERITY").val();
        var day = snap.child("Collision_Day_of").val();
        var injured = snap.child("NUMBER_INJURED").val();
        var killed = snap.child("NUMBER_KILLED").val();
        var pedinj = snap.child("COUNT_PED_KILLED").val();
        var pedkill = snap.child("COUNT_PED_INJURED").val();
        
        

        $("#table_body").append("<tr><td>" + year + "</td><td>" + alcohol + "</td><td>" + bicycle + "</td><td>" + city + "</td><td>"+ sev + "</td><td>"+ day 
            + "</td><td>"+ injured + "</td><td>"+ killed + "</td><td>"+ pedinj + "</td><td>"+ count2k9 + "</td><tr>");
    });


    var myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    var chart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['2009', '2010', '2011'],
        datasets:[{
          label:'Accidents',
          data:[
            count2k9,3,1
            ,
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
