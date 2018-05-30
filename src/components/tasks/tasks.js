import React from 'react';
import {Route} from 'react-router-dom';
import TasksNav from './tasks-nav';
import Feeding from './feeding';
import Supplements from './supplements';
import Testing from './testing';
import Maintenance from './maintenance';
import {connect} from 'react-redux';
import { fetchTasks } from '../../actions/tasks';

class Tasks extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  render () {
    return (
      <div>
        <h2>Tasks tab</h2>
        <TasksNav />
        <Route exact path='/tasks/feeding' component={Feeding}/>
        <Route exact path='/tasks/supplements' component={Supplements} />
        <Route exact path='/tasks/testing' component={Testing} />
        <Route exact path='/tasks/maintenance' component={Maintenance} />
      </div>
    );
  }
}
// export function taskFolderList(props) {
//   const URL = '/tasks/';
//   console.log(props)
//   const taskFolder = props.taskFolder.map((taskFolder, index) => {
//     return (
//       <a href={URL + taskFolder.name} key={index}>
//         {taskFolder.name}
//       </a>
//     );
//   });
//   return (
//     <div>
//       <Route exact path='/tasks/feeding' component={Supplements}/>
//       {taskFolder}
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   taskFolder: state.taskFolderReducer.taskFolder
// });

export default connect()(Tasks);