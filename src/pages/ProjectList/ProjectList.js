import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeaderColumn,
} from 'material-ui/Table';


class ProjectList extends Component {

  render() {
    const projects = this.props.projects;
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Dessert (100g serving)</TableHeaderColumn>
            <TableHeaderColumn>Calories</TableHeaderColumn>
            <TableHeaderColumn>Fat (g)</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((n) => {
            return (
              <TableRow rowNumber={n.id} key={n.id}>
                <TableRowColumn>{n.title}</TableRowColumn>
                <TableRowColumn>{n.userId}</TableRowColumn>
                <TableRowColumn>{n.userId}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

export default ProjectList;
