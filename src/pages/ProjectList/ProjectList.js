import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, ListItem, Subheader, IconMenu, MenuItem } from 'material-ui';
import { FaFolder, FaEllipsisV } from 'react-icons/lib/fa';

const projectIconColor = {
  color: 'moccasin',
};

const rightIconMenu = (
  <IconMenu iconButtonElement={<FaEllipsisV />}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);



class ProjectList extends Component {

  goTo = (id) => {
    this.props.history.push(`/projectEdit/${id}`);
  };

  render() {
    const projects = this.props.projects;
    return (
      <div>
        <List>
          <Subheader>Projetos</Subheader>
          {projects.map((n) => {
            return (
              <ListItem
                key={n.id}
                leftIcon={<FaFolder style={projectIconColor} />}
                primaryText={n.title}
                secondaryTextLines={2}
                onTouchTap={() => this.goTo(n.id)}
                rightIconButton={rightIconMenu}
                secondaryText={
                  <div>
                    <div>Versão: {n.userId}</div>
                    <div>Ultima Modificação: {n.body}</div>
                  </div>
                }
              />
            );
          })}
        </List>
      </div>
    );
  }
}

ProjectList.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
  projects: React.PropTypes.array.isRequired,
};

export default withRouter(ProjectList);
