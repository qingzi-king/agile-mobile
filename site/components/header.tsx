import * as React from "react";
import { Component } from "react";
import './common.less';

export interface IProps {
  history?: any;
}

declare var global: any;

class Home extends Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }
  handleJumpToRoot = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="d-header">
        <div className="d-header-left" onClick={this.handleJumpToRoot}>
          <span className="d-logo">
            <img src="http://docs.antjob.ink/agile-ui/agile-logo.svg" alt="logo" />
          </span>
          <span className="d-header-title">{ global.G_SYSTEM_TITLE.name }</span>
          <span className="d-header-company">{ global.G_SYSTEM_TITLE.subName }</span>
        </div>
        <ul className="d-header-nav">
          <li className="d-header-nav-item">
            <a href={global.G_GITHUB_URL} target="_blank" rel="noreferrer">
              <img src="http://docs.antjob.ink/agile-ui/icon/github-logo.svg" alt="github" />
            </a>
          </li>
          <li className="d-header-nav-item">
            <span className="d-header-nav-version">{global.G_VERSION}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;