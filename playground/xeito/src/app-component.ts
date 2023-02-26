import { Component, XeitoComponent, html, State } from "@xeito/core";

@Component({
  selector: 'app-root',
})
export class AppComponent extends XeitoComponent {

  @State() count: number = 0;

  onDidMount() {
    console.dir(this);
  }

  render() {
    return html`
      <h1>My App</h1>
      <button @click=${()=>this.count++}>Count is: ${this.count}</button>
    `;
  }

}
