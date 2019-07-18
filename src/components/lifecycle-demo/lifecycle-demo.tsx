import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'lifecycle-demo',
  shadow: true
})
export class LifecycleDemo {

  @Event() public connectedCallbackEvent: EventEmitter;
  @Event() public componentWillLoadEvent: EventEmitter;
  @Event() public componentDidLoadEvent: EventEmitter;
  @Event() public componentWillRenderEvent: EventEmitter;
  @Event() public buttonClickEvent: EventEmitter;

  connectedCallback() {
    this.connectedCallbackEvent.emit();
    console.log("connectedCallback");
  }

  componentWillLoad() {
    this.componentWillLoadEvent.emit();
    console.log("componentWillLoad");
  }

  componentDidLoad() {
    this.componentDidLoadEvent.emit();
    console.log("componentDidLoad");
  }

  componentWillRender() {
    this.componentWillRenderEvent.emit();
    console.log("componentWillRender");
  }

  private buttonClick() {
    this.buttonClickEvent.emit();
    console.log("buttonClick");
  }

  render() {
    return <div>
      <h1>Lifecycle Demo</h1>
      <button onClick={ () => this.buttonClick() }>Test Button</button>
    </div>;
  }
}
