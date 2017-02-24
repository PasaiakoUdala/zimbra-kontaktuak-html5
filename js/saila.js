$(document).ready(function() {
    $('#nireTable').DataTable({
        "language": {
            "sProcessing": "Prozesatzen...",
            "sLengthMenu": "Erakutsi _MENU_ erregistro",
            "sZeroRecords": "Ez da emaitzarik aurkitu",
            "sEmptyTable": "Taula hontan ez dago inongo datu erabilgarririk",
            "sInfo": "_START_ -etik _END_ -erako erregistroak erakusten, guztira _TOTAL_ erregistro",
            "sInfoEmpty": "0tik 0rako erregistroak erakusten, guztira 0 erregistro",
            "sInfoFiltered": "(guztira _MAX_ erregistro iragazten)",
            "sInfoPostFix": "",
            "sSearch": "Aurkitu:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Abiarazten...",
            "sProcessing": "Prozesatzen...",
            "oPaginate": {
                "sFirst": "Lehena",
                "sLast": "Azkena",
                "sNext": "Hurrengoa",
                "sPrevious": "Aurrekoa"
            },
            "oAria": {
                "sSortAscending": ": Zutabea goranzko eran ordenatzeko aktibatu ",
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
            { "data": "description", "visible": false },
            { "data": "email" },
            {
                sortable: false,
                "render": function(data, type, full, meta) {
                    var buttonID = "vcard_" + full.id;
                    return '<a href="http://localhost:3000/vcard/user/' + full.id + '" id=' + buttonID + ' data-id= ' + full.id + ' class="btn vCardBtn btn-info resetBtn" role="button"><span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span></a>';
                }
            }
        ],
        "order": [
            [2, 'asc']
        ],
        "displayLength": 15,
        "drawCallback": function(settings) {
            var api = this.api();
            var rows = api.rows({ page: 'current' }).nodes();
            var last = null;

            api.column(2, { page: 'current' }).data().each(function(group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr role="row" class="group info"><td colspan="3">' + group + '</td><td>' +
                        '<a href="http://localhost:3000/vcard/sailka/' + group.trim() + '" class="btn vCardBtn btn-primary resetBtn" role="button"><span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span></a>'+
                        '</td></tr>'
                    );

                    last = group;
                }
            });
        }
    });

    $('#nireTable tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === 2 && currentOrder[1] === 'asc' ) {
            table.order( [ 2, 'desc' ] ).draw();
        }
        else {
            table.order( [ 2, 'asc' ] ).draw();
        }
    } );

});
