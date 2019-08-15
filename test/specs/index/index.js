const assert = require('assert');

describe('Payment check', () => {
    before(() => {
        browser.url('/');
        let frame = $('#widget-container iframe');
        browser.switchToFrame(frame);
    });
    it('should have wait payment', () => {
        const $bitcoin = $('.ps__item[data-payment-method-code="crypto"]*=Bitcoin');
        $bitcoin.waitForDisplayed(10000);
        $bitcoin.click();

        const $paymentResult = $('.payment-result');
        $paymentResult.waitForExist(60000);
        const $paymentResultFail = $('.payment-result.payment-result_fail');
        assert.equal($paymentResultFail.isDisplayed(), false, 'Payment has expired');
    });
});