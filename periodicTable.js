$(document).ready(function() {
    $('.element').click(function() {
      var symbol = $(this).data('symbol');
      var name = $(this).data('name');
      var atomicNumber = $(this).data('atomic-number');
      var atomicMass = $(this).data('atomic-mass');
      var charge = $(this).data('charge');
      var type = $(this).data('type');
  
      $('#symbol').text(symbol);
      $('#name').text(name);
      $('#atomic-number').text(atomicNumber);
      $('#atomic-mass').text(atomicMass);
      $('#charge').text(charge);
      $('#type').text(type);
  
      $('#elementModal').modal('show');
    });
  });  