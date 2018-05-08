$.ajax({
    url: "ValidateImages",
    type: "POST",
    success: function (JTransaction) {
        if (JTransaction)

            for (var i = 0; i < JTransaction["JTransaction"].length; i++) {

                $("#transactiontable").append("<tr><td>" + JTransaction["JTransaction"][i]["id"] + "</td><td>" + JTransaction["JTransaction"][i]["filename"] + "</td> <td>  <img src=/images/" + JTransaction["JTransaction"][i]["status"] + " style='width:50px; height:50px'> </td> <td>" + JTransaction["JTransaction"][i]["date"] + "</td> </tr>");

            }

    }
});
