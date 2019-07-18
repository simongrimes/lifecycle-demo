import { newE2EPage } from '@stencil/core/testing';

describe('lifecycle-demo', () => {
  it('emmits events', async () => {
    const page = await newE2EPage();

    await page.setContent('<lifecycle-demo></lifecycle-demo>');

    const connectedCallbackEvent = await page.spyOnEvent('connectedCallbackEvent');
    const componentWillLoadEvent = await page.spyOnEvent('componentWillLoadEvent');
    const componentDidLoadEvent = await page.spyOnEvent('componentDidLoadEvent');
    const componentWillRenderEvent = await page.spyOnEvent('componentWillRenderEvent');
    const buttonClickEvent = await page.spyOnEvent('buttonClickEvent');

    // Setting the page content after settign spys always fails.
    // await page.setContent('<lifecycle-demo></lifecycle-demo>');

    // Click a button to prove the component has instantiated.
    const button = await page.find('lifecycle-demo >>> button');
    button.click();

    await page.waitForChanges();

    // waitForEvent never gets captured either.
    // await page.waitForEvent('connectedCallbackEvent');

    // Button Click event is captured.
    expect(buttonClickEvent).toHaveReceivedEvent();

    // Lifecycle events are not captured.
    // expect(connectedCallbackEvent).toHaveReceivedEvent();
    // expect(componentWillLoadEvent).toHaveReceivedEvent();
    // expect(componentDidLoadEvent).toHaveReceivedEvent();
    // expect(componentWillRenderEvent).toHaveReceivedEvent();
  });
});
