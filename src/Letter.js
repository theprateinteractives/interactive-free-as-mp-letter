import preact from 'preact';
import format from 'date-fns/format'
import { universityCities, courses } from './lists';

import crown from './crown.svg';


export default class Letter extends preact.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      uni: universityCities[0],
      course: courses[0],
    };
  }

  handleInput(field, e) {
    this.setState({ [field]: e.target.value });
  }

  render(props, state) {
    return (
      <div className="Letter">
        <div className="Letter__header">
          <div>{props.readOnly ? state.name : <input className="NameInput" placeholder="Enter your name" type="text" value={state.name} onInput={this.handleInput.bind(this, 'name')} />} MP</div>
          <img width="40" src={crown} />
          <div>HOUSE OF COMMONS</div>
          <div>LONDON SW1A OAA</div>
        </div>
        <div>
          Vice chancelor<br />
          {props.readOnly ? this.state.uni : <select onChange={this.handleInput.bind(this, 'uni')}>{universityCities.map(name => <option>{name}</option>)}</select>}<br />
          UK
        </div>
        <div>
          {format(new Date(), 'Do MMMM YYYY')}
        </div>
        <div>
    <p>I was wondering if you would be so kind as to supply me with the names of professors at your establishment who are involved in the teaching of {props.readOnly ? state.course : <select onChange={this.handleInput.bind(this, 'course')}>{courses.map(name => <option>{name}</option>)}</select>}, with particular reference to the ones who won't notice me sneaking in to the lectures for free.</p>
          <p>Furthermore, if I could be provided with a copy of the syllabus and links to the online lectures which relate to this area I would be much obliged.</p>
          <p>I sincerely hope you are able to provide me with such and I look forward to not having to pay 9 grand in due course.</p>
          <p>Yours sincerely,</p>
        </div>
        <div className="Letter__signoff">
          {state.name} MP<br />
          Member of parliament for RESEARCH-UPON-BOOK
        </div>
        <div className="Letter__footer">
          Tel: 024738399342 Fax: ...<br />
          Email: {state.name.toLowerCase().trim().replace(/ /gi, '.')}@parliament.uk<br />
          Website: {state.name.toLowerCase().trim().replace(/ /gi, '')}.com
        </div>
      </div>
    );
  }
} 