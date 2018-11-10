import React from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import './taskview.css';
import { getTasks } from '../../api';
import goToTask from './arrow_right.png';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import withAuth from '../withAuth';

class Tasks extends React.Component {

  render() {
    return (
      <div {...this.props}>
        {this.props.tasks.map(task => <Link key={'_key' + task.id} to={`/task/${task.id}`}><Task className="task" task={task} /></Link>)}
      </div>
    );
  }
}

Tasks.defaultProps = {
  className: 'tasks'
}

const Task = props => <div {...props}>
  <span className="taskName">{props.task.title}</span>
  <span className="orgName">{props.task.ownerId}</span>
  <img className="goToTask" alt="Перейти" src={goToTask} />
</div>


class TaskView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      tasks: [],
    };
  }

  componentDidMount() {
    getTasks().then((tasks) => {
      this.setState({
        tasks
      });
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div id="mainContainer">
        <Header inTasks></Header>
        <div id="taskLabelContainer">
          <h1>Задачи</h1>
        </div>
        <Nav id="mainNavBar" tabs>
          <NavItem style={{width: '25%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              мои
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              доступные
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              выполнено
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Tasks tasks={this.state.tasks.filter((task) => task.status === 'my')} />
          </TabPane>
          <TabPane tabId="2">
            <Tasks tasks={this.state.tasks.filter((task) => task.status === 'available')}/>
          </TabPane>
          <TabPane tabId="3">
            <Tasks tasks={this.state.tasks.filter((task) => task.status === 'completed')}/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default withAuth(TaskView);