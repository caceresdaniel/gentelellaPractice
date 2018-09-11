
    var rootRef = firebase.database().ref().child("Accidents");

    rootRef.on("child_added", snap => {

        var killed = snap.child("killed").val();
        var othering = snap.child("otherinj").val();
        var ksi = snap.child("ksi").val();
        var severe = snap.child("severe").val();
        var total = snap.child("total").val();
        var x = snap.child("X").val();
        var y = snap.child("Y").val();

        $("#table_body").append("<tr><td>" + killed + "</td><td>" + othering + "</td></tr>");

    });


