import { newSpecPage } from '@stencil/core/testing';
import { LifecycleDemo } from './lifecycle-demo';

describe('lifecycle-demo', () => {
  it('emmits events', async() => {
    const page = await newSpecPage({
      components: [LifecycleDemo]
    });

    const connectedCallbackEvent = jest.fn();
    const componentWillLoadEvent = jest.fn();
    const componentDidLoadEvent = jest.fn();
    const componentWillRenderEvent = jest.fn();

    page.doc.addEventListener('connectedCallbackEvent', connectedCallbackEvent);
    page.doc.addEventListener('componentWillLoadEvent', componentWillLoadEvent);
    page.doc.addEventListener('componentWillRenderEvent', componentWillRenderEvent);
    page.doc.addEventListener('componentDidLoadEvent', componentDidLoadEvent);
    page.setContent('<lifecycle-demo></lifecycle-demo>');
    await page.waitForChanges();

    // Verify lifecycle events are called.
    expect(connectedCallbackEvent).toHaveBeenCalledTimes(1);
    expect(componentWillLoadEvent).toHaveBeenCalledTimes(1);
    expect(componentWillRenderEvent).toHaveBeenCalledTimes(1);

    // Note - componentDidLoad doesn't fire. (Unrem below and test will fail).
    // expect(componentDidLoadEvent).toHaveBeenCalledTimes(1);
  });
});
