$(document).ready(
    function () {

    function rules() {


        //rules

        var myRules = {
            fname: {
                required: true
            },

            email: {
                required: true
            },

            adr: {
                required: true
            },

            city: {
                required: true
            },

            state: {
                required: true
            },

            zip: {
                required: true
            },

            cname: {
                required: true
            },

            ccnum: {
                required: true,
                max: 15,
                digits: true
            },

            expmonth: {
                required: true,
                digits: true,
                max: 2
            },

            expyear: {
                required: true,
                digits: true,
                max: 2
            },

            ccv: {
                required: true,
                digits: true,
                max: 3
            }

        };

        var myMessages = {
            fname: {
                required: "Full name"
            },

            email: {
                required: "email address"
            },

            adr: {
                required: "Full address"
            },

            city: {
                required: "City"
            },

            state: {
                required: "State"
            },

            zip: {
                required: "Zip code "
            },

            cname: {
                required: "Name on card"
            },

            ccnum: {
                required: "Card number"
            },

            expmonth: {
                required: "Cards expiration month (two digits)"
            },

            expyear: {
                required: "Cards expiration year (two digits)"
            },

            ccv: {
                required: "3 digits at the back of your card"
            }
        };

    };


    //cart
    $('.like-btn').on('click', function () {
        $(this).toggleClass('is-active');
    });
    //minus button
    $('.minus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }

        $input.val(value);

    });

    //plus button
    $('.plus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }

        $input.val(value);
    });

    //order button
    $('.order').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        var prices = $this.closest('div').next('div');
        prices = parseInt(prices.text())

        var total = value * prices;

        alert(total);

        finalOrder.push(total);

        var grandTotal = 0;

        for (var i = 0; i < finalOrder.length; i++) {
            grandTotal += finalOrder [i]
        }

        alert(finalOrder + " " + grandTotal)

        $input.val(value);
    });

    //array individual/final orders

    var finalOrder = [];




        //validation

        $("form").validate({
            submitHandler: rules(),
            rules: myRules,
            messages: myMessages
        })






    }
);