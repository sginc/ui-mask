Tinytest.add("angular - correct export", function(test) {
  // Simply check that 'angular' is not undefined ...
  test.isNotUndefined(angular, "angular not properly exported");
});

Tinytest.add("'ui.mask' module created correctly", function(test){
  // Simply check that 'ui.mask' is defined as an angular module ...
  test.isNotUndefined(angular.module('ui.mask'), "ui.mask module not defined");
});

// Tinytest.add("jsPDF - sample table creation", function(test) {
//   var
//     columns = [
//       {title: "ID", key: "id"},
//       {title: "Name", key: "name"},
//       {title: "Country", key: "country"},
//       {title: "Email", key: "email"}
//     ],
//     data = [
//       {"id": 1, "name": "Shaw", "country": "Tanzania", "email": "abrown@avamba.info"},
//       {"id": 2, "name": "Nelson", "country": "Kazakhstan", "email": "jjordan@agivu.com"},
//       {"id": 3, "name": "Garcia", "country": "Madagascar", "email": "jdean@skinte.biz"},
//     ]
//   ;
//
// 	// Try creating a new document
//   var doc = new jsPDF('p', 'pt');
//   test.isTrue(doc.internal.pages[1].length === 2);
//
// 	// Try creating a new table
//   doc.autoTable(columns, data, {});
//   test.isTrue(doc.internal.pages[1].length > 2);
// });
