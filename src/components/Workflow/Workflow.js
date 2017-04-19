import React, { Component } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';

import 'bpmn-js/assets/bpmn-font/css/bpmn-embedded.css';
import 'diagram-js/assets/diagram-js.css';
import './properties.css';
import './Workflow.css';


import xml from './default.bpmn';

class WorkFlow extends Component {

  componentDidMount() {
    this.modeler = new BpmnModeler({
      additionalModules: [
        propertiesPanelModule,
        propertiesProviderModule,
      ],
      container: '#containerBpm',
      propertiesPanel: {
        parent: '#bpmProperties',
      },
    });
  }

  render() {
    return (
      <div className="bmp-container">
        <div className="bmp-container-canvas" id="containerBpm" />
        <div className="bmp-container-properties-panel" id="bpmProperties" />
      </div>
    );
  }

}

export default WorkFlow;
