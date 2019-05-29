let { openBrowser,closeBrowser, emitter } = require('../../lib/taiko');
let { openBrowserArgs } = require('./test-util');

describe('close browser successfully',()=>{

    beforeEach(async () => {
        expect(process.env.TAIKO_EMULATE_DEVICE).not.toBeDefined();
        await openBrowser(openBrowserArgs);
    },10000);
    

    test('closeBrowser should return \'Browser closed\' message', async ()=>{
        emitter.on('success', (desc) => {
            expect(desc).toEqual('Browser closed');
        });
        await closeBrowser().then(data => {
            expect(data).toEqual(undefined);
        });
    });

});
