window.MyModule = (function() {
    'use strict';

    function MyModule() {
        // noop
    }

    MyModule.prototype.foo = function() {
        console.log("bar");
    };

    return MyModule;
})();
