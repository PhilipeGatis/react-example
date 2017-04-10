import React, { Component } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


class ProjectList extends Component {

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.projects.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.title}</TableCell>
                  <TableCell numeric>{n.userId}</TableCell>
                  <TableCell numeric>{n.userId}</TableCell>
                  <TableCell numeric>{n.userId}</TableCell>
                  <TableCell numeric>{n.userId}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ProjectList.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  projects: React.PropTypes.array.isRequired,
};

export default ProjectList;
