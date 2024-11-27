import { Component } from "../core/heropy";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/YellowFiber/movie-site">
          Github Repository
        </a>
      </div>
      <div>
        <a href="">${new Date().getFullYear()} YellowFiber</a>
      </div>
    `
  }
}