import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { GridList, Subheader, GridTile } from 'material-ui';
import { FaPencil } from 'react-icons/lib/fa';

import './ProjectEdit.css';

import cssImg from '../../images/css.jpg';
import iconsImg from '../../images/icons.jpg';
import documentsImg from '../../images/documents.png';
import schemasImg from '../../images/eschemas.png';
import lifeCycleImg from '../../images/lifecycle.jpg';
import workflowsImg from '../../images/workflows.jpg';
import userActionsImg from '../../images/useractions.jpg';
import contentViewImg from '../../images/contentview.jpg';
import automationChainsImg from '../../images/automationchains.jpg';
import eventHandlersImg from '../../images/eventhandlers.jpg';
import vocabularyImg from '../../images/vocabulary.jpg';
import xmlExtensionsImg from '../../images/xml.png';

const tilesData = [
  {
    title: 'CSS',
    url: 'css',
    description: 'Criar classes de css para o projeto!!!',
    img: cssImg,
  },
  {
    title: 'ICONES',
    url: 'icons',
    description: 'Adiciona icones para usar no projeto!!!',
    img: iconsImg,
  },
  {
    title: 'DOCUMENTOS',
    url: 'documets',
    description: 'Criar tipos de documentos para o projeto!!!',
    img: documentsImg,
  },
  {
    title: 'ESQUEMAS',
    url: 'schemas',
    description: 'Criar esquemas predefinidos para os tipos de documentos!!!',
    img: schemasImg,
  },
  {
    title: 'CICLO DE VIDA',
    url: 'lifecycle',
    description: 'Definir ciclo de vida dos documentos!!!',
    img: lifeCycleImg,
  },
  {
    title: 'WORKFLOW',
    url: 'workflow',
    description: 'Definir fluxos de trabalhos!!!',
    img: workflowsImg,
  },
  {
    title: 'VISÕES DE CONTEÚDO',
    url: 'contentview',
    description: 'Definir visões para o conteúdo do tipos de documento !!!',
    img: contentViewImg,
  },
  {
    title: 'AÇÕES DO USUARIO',
    url: 'useractions',
    description: 'Definir ações de usuarios!!!',
    img: userActionsImg,
  },
  {
    title: 'CADEIA DE AÇÕES',
    url: 'automationchains',
    description: 'Definir cadeia ações automaticas a serem executadas!!!',
    img: automationChainsImg,
  },
  {
    title: 'MANIPULADOR DE EVENTOS',
    url: 'eventshandlers',
    description: 'Definir comportamentos para disparar eventos!!!',
    img: eventHandlersImg,
  },
  {
    title: 'VOCABULÁRIOS',
    url: 'vocabulary',
    description: 'Definir vocabularios de palavras!!!',
    img: vocabularyImg,
  },
  {
    title: 'EXTENSÕES XML',
    url: 'xmlextension',
    description: 'Definir extensões para xml!!!',
    img: xmlExtensionsImg,
  },
];

class ProjectEdit extends Component {
  goTo = (location) => {
    this.props.history.push(`${this.props.match.url}/${location}`);
  };

  render() {
    return (
      <div>
        <div className="edit-project-content">
          <div className="edit-project-content-box">
            <div className="edit-project-content-box-title">XXXXX <span className="edit-project-content-box-title-version">1.0</span></div>
            <Subheader >Descrição:</Subheader>
            <p className="edit-project-content-box-description"> YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY </p>
            <GridList
              cellHeight={180}
            >
              <Subheader>Ações:</Subheader>
              {tilesData.map(tile => (
                <GridTile
                  key={tile.title}
                  title={tile.title}
                  subtitle={<span><b>{tile.description}</b></span>}
                  actionIcon={
                    <FaPencil color="white" onClick={() => this.goTo(tile.url)} className="edit-project-content-card-action" />
                  }
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

ProjectEdit.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ProjectEdit);
