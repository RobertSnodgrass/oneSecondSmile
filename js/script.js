  $(document).ready(function() {
    

     $(document).on('click', '.jGrav', function(e) {
      e.preventDefault();

          $('body').jGravity({
               target: 'everything',
               ignoreClass: 'ignoreMe',
               weight: 2,
               depth: 1,
               drag: true,
          });
     });
});

