var count2k9 = 0;
var count2k10 = 0;
var count2k11 = 0;

var ref = firebase.database().ref("Accidents");

ref.orderByChild("ACCIDENT_YEAR").equalTo(2009).on("child_added", function () {
  return count2k9++;
});
ref.orderByChild("ACCIDENT_YEAR").equalTo(2010).on("child_added", function () {
  count2k10++;
});
ref.orderByChild("ACCIDENT_YEAR").equalTo(2011).on("child_added", function () {
  count2k11++;
});



var mon = 0;
var tue = 0;
var wed = 0;
var thurs = 0;
var fri = 0;
var sat = 0;
var sun = 0;

ref.orderByChild("Collision_Day_of").equalTo('Monday').on("child_added", function () {
  mon++;
});
ref.orderByChild("Collision_Day_of").equalTo('Tuesday').on("child_added", function () {
  tue++;
});
ref.orderByChild("Collision_Day_of").equalTo('Wednesday').on("child_added", function () {
  wed++;
});
ref.orderByChild("Collision_Day_of").equalTo('Thursday').on("child_added", function () {
  thurs++;
});
ref.orderByChild("Collision_Day_of").equalTo('Friday').on("child_added", function () {
  fri++;
});
ref.orderByChild("Collision_Day_of").equalTo('Saturday').on("child_added", function () {
  sat++;
});
ref.orderByChild("Collision_Day_of").equalTo('Sunday').on("child_added", function () {
  sun++;
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
  var pedinj = snap.child("COUNT_PED_INJURED").val();
  var pedkill = snap.child("COUNT_PED_KILLED").val();




  console.log(mon);

  $("#table_body").append("<tr><td>" + year + "</td><td>" + alcohol + "</td><td>" + bicycle + "</td><td>" + city + "</td><td>" + sev + "</td><td>" + day
    + "</td><td>" + injured + "</td><td>" + killed + "</td><td>" + pedinj + "</td><td>" + pedkill + "</td><tr>");
});


// ref.child('ACCIDENT_YEAR').once('value').then(function(snapshot) {
//   var value = snapshot.val();
//   if(value == 2009){
//     count2k9++;
//     console.log(count2k9);
//   } else {
//       error: 'Nothing Found';
//   }
// });

// var value = 0;
// ref.once('value').then(function(snapshot){
//   value = snapshot.val();
//   return ref.child('ACCIDENT_YEAR').transaction(function(current){
//     return (current || 0 ) + 1;
//   });
// }).then(function(readCountTxn){
//   return count2k9++;
// }, function(error){
//   console.error(error);
// });




var myChart = document.getElementById('myChart').getContext('2d');


Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var chart = new Chart(myChart, {
  type: 'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [2009, 2010, 2011],
    datasets: [{
      label: 'Accidents',
      data: [
        35, 1, 1
      ],

      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000'
    }]
  },
  options: {
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enabled: true
    }
  }
});

var mybarChart = document.getElementById('mybarChart').getContext('2d');


Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var chart2 = new Chart(mybarChart, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    datasets: [{
      label: 'Accidents',
      data: [
        4, 5, 6, 5, 9, 5, 3
      ],

      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000'
    }]
  },
  options: {
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enabled: true
    }
  }
});




