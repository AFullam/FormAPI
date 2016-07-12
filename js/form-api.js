/*global $,console */
var form;
var test = "test";

(function () {
    "use strict";

    form = {
        id: "id",
        form_fields: "test",
        form_init: function () {
            console.log("Form Init");
        },
        form_attach: function () {
            console.log("Form Attach");
        }
    };
}());
