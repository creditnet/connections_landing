'use strict';

$(function(){
    var url             = purl(),
        utm_source      = url.param('utm_source'),
        utm_medium      = url.param('utm_medium'),
        utm_campaign    = url.param('utm_campaign'),
        formAction      = '/help/ask/',
        formData        = {},
        orderForm       = $('#order-form'),
        orderFormInputs = orderForm.find('input'),
        orderFormSubmit = orderForm.find('button'),
        promoView       = $('#promo-view'),
        afterSubmitView = $('#after-submit-view'),
        pendingClass    = 'has-form-pending',
        errorClass      = 'has-feedback has-error',
        email           = 'connections@creditnet.ru',
        fadeDuration    = 250;

    reset();

    // IE9- placeholder fix
    orderFormInputs.placeholder && orderFormInputs.placeholder();

    orderForm.submit(function(e) {
        e.preventDefault();

        if (validation()) {
            submit(function(){
                promoView.fadeOut(fadeDuration, function(){
                    reset();
                    afterSubmitView.fadeIn(fadeDuration);
                });
            });
        }
    });

    orderFormInputs.focus(function(){
        $(this).parent().removeClass(errorClass);
    });

    function reset() {
        orderFormInputs.val('').prop('disabled', false);
        orderFormSubmit.prop('disabled', false);
        orderForm.removeClass(pendingClass);
    }

    function validation() {
        var hasError = false;

        formData = {};

        orderFormInputs.each(function(){
            var input = $(this),
                value = $.trim(input.val());

            if (!value) {
                input.val('').parent().addClass(errorClass);
                hasError = true;
            }

            formData[input.attr('name')] = value;
        });

        return !hasError;
    }

    function submit(callback) {
        orderFormInputs.prop('disabled', true);
        orderFormSubmit.prop('disabled', true);
        orderForm.addClass(pendingClass);

        var text    = 'Заявка на поиск связей между участниками закупок\n'
                    + '\n'
                    + 'Контактное лицо: ' + formData['name'] + '\n'
                    + 'Контакт: ' + formData['contact'] + '\n'
                    + (utm_source || utm_medium || utm_campaign ?
                        '\n'
                        + 'Метки: '
                        + (utm_source || '?')
                        + ' - '
                        + (utm_medium || '?')
                        + ' - '
                        + (utm_campaign || '?')
                    : '');

        $.post(formAction, {
            'ask[email]': email,
            'ask[q]': text
        });

        window.yaCounter23296318.reachGoal('target_connections_order');

        callback();
    }
});
