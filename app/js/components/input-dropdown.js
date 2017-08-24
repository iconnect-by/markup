'use strict';

angular.module('iConnectApp')
    .component('inputDropdown', {
        templateUrl: '/views/template/input-dropdown.html',
        bindings: {
            data: "="
        },
        controller: function ($scope, $element, $attrs) {
            var that = this;

            that.$onInit = function() {

                $element.find('.input-field').on('focus blur', function (e) {
                    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');


                $element.find('.input-field').on('click', function () {
                    $(this).parent().find('.ddown-entity').show();
                    // $(this).parent().one('hide.bs.dropdown', function(e) {
                    //     e.preventDefault();
                    // });
                });

            }
        }
    });