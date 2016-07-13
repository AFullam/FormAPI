/*global $,console*/
/*jslint node: true*/

var form;
var id;

form = {
    id: "",
    form_fields: "",
    form_init: function (form_details) {
        "use strict";
        var item;
        this.id = form_details.id;

        for (item in form_details.form_fields) {
            if (form_details.form_fields.hasOwnProperty(item)) {
                var type = form_details.form_fields[item].type;
                var size = form_details.form_fields[item].size;
                var id = form_details.form_fields[item].name;

                $("#init-form").append("<p>" + id + ": <input type='" + type +
                                   "' size=" + size +
                                   "' name=" + id +
                                   "' id='" + id +
                                   "'></input></p>");
            }
        }
    }
};
