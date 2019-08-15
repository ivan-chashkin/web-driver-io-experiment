const assert = require('assert');

describe('Payment check', () => {
    before(() => {
        browser.url('/');
        let frame = $('#widget-container iframe');
        browser.switchToFrame(frame);
        // browser.execute(() => { window.location.href = 'https://paymentpage.ecommpay.com/payment?is_test=1&payment_amount=1200&payment_currency=USD&payment_description=ECT_TEST_PROD_TEST_2012214&payment_id=ECT_TEST_PROD_TEST_2012214&project_id=1124&signature=po%2B%2BILNwFZWJgtbmulC2A%2FabGgFY6OgRE11MfcXQ70Vxlb0EWODfEKCurA8Xoz%2BVD4jCAYUbqwLguKYTZHshEQ%3D%3D'; });
    });
    it('should have copy address', () => {
        const $bitcoin = $('.ps__item[data-payment-method-code="crypto"]*=Bitcoin');
        $bitcoin.waitForDisplayed(30000);
        $bitcoin.click();

        const $screenLoading = $('#screen-loading #preloader_wrapper');
        $screenLoading.waitForDisplayed(20000);
        $screenLoading.waitForDisplayed(60000, true);

        const $copyAddress = $('#copy_address');
        assert.equal($copyAddress.isDisplayed(), true, 'Copy address not visible');
    });
});