(function() {
    var MAX_DECIMAL_PLACES = 3;

    var $component = document.querySelector('[data-component=c-px-to-em]'),
          $base = $component.querySelector('[data-element=base]'),
          $px = $component.querySelector('[data-element=px]'),
          $em = $component.querySelector('[data-element=em]'),
          $result = $component.querySelector('[data-element=result]');

    var
        getCountDecimalPlaces = function(n) {
            if (n.toString().includes('.')) {
                return n.toString().split('.').pop().length;
            } else {
                return 0;
            }
        },
        getCutDecimalPlaces = function(n) {
            var countDecimalPlaces = getCountDecimalPlaces(n);
            var result = 0;
            if (countDecimalPlaces < MAX_DECIMAL_PLACES) {
                return n.toFixed(countDecimalPlaces);
            } else {
                return n.toFixed(MAX_DECIMAL_PLACES);
            }
        },
        getCalculateValue = function() {
            var base = parseFloat($base.value),
                  px = parseFloat($px.value),
                  em = parseFloat($em.value);
            var res = 0;
            if (base && px) {
                res = px / base;
                return getCutDecimalPlaces(res) + 'em';
            } else if (base && em) {
                res = em * base;
                return getCutDecimalPlaces(res) + 'px';
            } else {
                return '';
            }
        };

    $px.addEventListener('focus', function() {
        $em.value = '';
    });
    $em.addEventListener('focus', function() {
        $px.value = '';
    });
    $component.addEventListener('submit', function(e) {
        e.preventDefault();
        $result.innerHTML = getCalculateValue();
    });
})();
