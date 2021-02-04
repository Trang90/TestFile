$(document).ready(function() {
  $('#example').DataTable(
      
       {     

    "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
      "iDisplayLength": 5,

      "dom": 'lrtip',
      "dom": '<"top"i<"clear">>rt<"bottom"ip>',
      "pagingType": "full_numbers", "pageLength": 3,
      "oLanguage": {
                "oPaginate": {
            sNext: '>',
            sPrevious: '<',
            sFirst: '<<',
            sLast: '>>'
        },
        "sInfo": '_START_ - _END_ of _TOTAL_ orders'
       
    }
    
     } 
      );
} );

$.fn.DataTable.ext.pager.numbers_length = 5;

function checkAll(bx) {
var cbs = document.getElementsByTagName('input');
for(var i=0; i < cbs.length; i++) {
  if(cbs[i].type == 'checkbox') {
    cbs[i].checked = bx.checked;
  }
}
}

