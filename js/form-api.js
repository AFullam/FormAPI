/*global $,console*/
/*jslint node: true*/

var form = {
    id: "",
    form_fields: "",
    action: "",
    form_init: function (form_details) {
        "use strict";
        //Setup form vars
        this.id = form_details.id;
        this.form_fields = form_details.form_fields;
        this.action = form_details.action;

        this.form_create();
    },
    form_create: function () {
        "use strict";
        var item, input_type, type, maxlength, id, option;

        //Process form fields and add to form
        for (item in this.form_fields) {
            if (this.form_fields.hasOwnProperty(item)) {
                input_type = this.form_fields[item].input_type;
                type = this.form_fields[item].type;
                maxlength = this.form_fields[item].maxlength;
                id = this.form_fields[item].name;

                if (type !== "radio") {
                    $("#" + this.id).append("<p>" + id + ": <" + input_type + " type='" + type +
                                       "' maxlength='" + maxlength +
                                       "' name='" + id +
                                       "' id='" + id +
                                       "'></input></p>");
                }

                //If field is select then define options
                if (input_type === "select") {
                    for (option in this.form_fields[item].options) {
                        if (this.form_fields[item].options.hasOwnProperty(option)) {
                            $("#" + id).append('"<option value"' + option + '">' + this.form_fields[item].options[option] + '</option>');
                        }
                    }
                } else if (input_type === "input" && type === "radio") {
                //If field is radio button
                    for (option in this.form_fields[item].options) {
                        if (this.form_fields[item].options.hasOwnProperty(option)) {
                            $("#" + this.id).append('<p>' + this.form_fields[item].options[option] +
                                                ': <' + input_type + ' type="' + type +
                                                '" value="' + this.form_fields[item].options[option] +
                                                '" name="' + id +
                                                '" id="' + id +
                                                '"></input></p>');
                        }
                    }
                }
            }
        }
    }
};
