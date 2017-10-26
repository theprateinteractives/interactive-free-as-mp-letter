import preact from 'preact';
import Letter from './Letter';

export default class Interactive extends preact.Component {
  constructor(props) {
    super(props);

    this.state = {
      readOnly: false,
    }
  }

  handleToggle() {
    console.log('toggle');
    this.setState({ readOnly: !this.state.readOnly });
  }

  render(props, state) {
    return (
      <div>
        <Letter readOnly={state.readOnly} />
        <button className="GenerateButton" onClick={this.handleToggle.bind(this)}>{state.readOnly ? 'Edit' : 'Generate'}</button>
      </div>
    );
  }
}