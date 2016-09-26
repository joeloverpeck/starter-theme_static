(function() {

  var Module1 = ( function() {

    var utilities = {
    };

    var vendorMethods = {
    };


    // Core Module Functionality
    // -----------------------

    function example() {
    }

    function bindFunctions() {
    }

    function init() {
      bindFunctions();
    }

    return {
      init: init
    };

  } )();

  var Module2 = ( function() {

    var utilities = {

    };

    var vendorMethods = {

    };

    // Core Module Functionality
    // -----------------------

    function example() {
    }

    function bindFunctions() {
        // event binding
    }

    function init() {
      bindFunctions();
    }

    return {
      init: init
    };

  } )();


  Module1.init();
  Module2.init();


}());
