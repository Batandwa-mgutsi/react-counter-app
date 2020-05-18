import React from 'react';
import { ViewModelConsumer } from '../../../mvvm';
import '../../../materialize/css/materialize.css'
import HomeViewModel from './home_view_model';

export default class HomeView extends ViewModelConsumer {
  constructor(props) {
    super(props, new HomeViewModel());
  }

  /**
   * @param {HomeViewModel} model
   */
  onRender(props, model) {
    return <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <nav>
        <div className="nav-wrapper blue" >
          <div className="brand-logo left" style={{ marginLeft: '10px' }}>Counter App</div>
        </div>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div>
          <div>You have pushed the button this many times:</div>
          <div style={{ textAlign: 'center', fontSize: '50px' }}>{model.counter.toString()}</div>
          <div className="fixed-action-btn" onClick={(e) => model.incrementCounter()}>
            <div className="btn-floating btn-large waves-effect waves-light blue">
              <i className="material-icons">add</i>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}
