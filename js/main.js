
$(document).ready(function() {
    $('#nireTable').DataTable( {
        "language": {
          "sProcessing":     "Prozesatzen...",
          "sLengthMenu":     "Erakutsi _MENU_ erregistro",
          "sZeroRecords":    "Ez da emaitzarik aurkitu",
          "sEmptyTable":     "Taula hontan ez dago inongo datu erabilgarririk",
          "sInfo":           "_START_ -etik _END_ -erako erregistroak erakusten, guztira _TOTAL_ erregistro",
          "sInfoEmpty":      "0tik 0rako erregistroak erakusten, guztira 0 erregistro",
          "sInfoFiltered":   "(guztira _MAX_ erregistro iragazten)",
          "sInfoPostFix":    "",
          "sSearch":         "Aurkitu:",
          "sUrl":            "",
          "sInfoThousands":  ",",
          "sLoadingRecords": "Abiarazten...",
          "sProcessing":     "Prozesatzen...",
          "oPaginate": {
            "sFirst":    "Lehena",
            "sLast":     "Azkena",
            "sNext":     "Hurrengoa",
            "sPrevious": "Aurrekoa"
          },
          "oAria": {
            "sSortAscending":  ": Zutabea goranzko eran ordenatzeko aktibatu ",
            "sSortDescending": ": Zutabea beheranzko eran ordenatzeko aktibatu"
          }
        },
        "ajax": {
          "url": "http://localhost:3000/db/",
          "dataSrc": ""
        },
        "columns": [
            { "data": "cn" },
            { "data": "title" },
            { "data": "description" },
            { "data": "email" },
            {
              sortable: false,
                 "render": function ( data, type, full, meta ) {

                     var buttonID = "vcard_"+full.id;
                     return '<a href="http://localhost:3000/vcard/user/' + full.id + '" id='+buttonID+' data-id= ' + full.id + ' class="btn vCardBtn btn-info resetBtn" role="button">vCard</a>';
                 }
            }
        ],

    });

});
