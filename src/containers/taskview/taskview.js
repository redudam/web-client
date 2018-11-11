import React from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import './taskview.css';
import { getTasks } from '../../api';
import goToTask from './arrow_right.png';
import openArrow from './openArrow.png';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import withAuth from '../withAuth';

const filtersContainerStyles = {
  position: 'fixed',
  left: '5%',
  width: '90%',
  height: 25,
  bottom: 0,
  backgroundColor: 'lightgray',
  borderRadius: '8px 8px 0 0',
  transition: '1s',
  zIndex: '60'
};

const panelControllerStyles = {
  position: 'absolute',
  left: '0',
  width: '100%',
  height: 25,
  top: 0,
  backgroundColor: 'gray',
  borderRadius: '8px 8px 0 0',
};

const openArrowStyles = {
  width: 30,
  marginLeft: 'calc(50% - 15px)',
  transition: '1s',
  transformOrigin: '15px 15px'
};

class FiltersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };

    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({
      shown: !this.state.shown
    });

    if (this.state.shown) {
      document.getElementById('filtersPanel').style.height = "80%";
      document.getElementById('panelArrow').style.transform = "rotate(180deg)";
      document.getElementById('viewLabel').innerHTML = "Фильтр";
    }
    else {
      document.getElementById('filtersPanel').style.height = "25px";
      document.getElementById('panelArrow').style.transform = "rotate(0deg)";
      document.getElementById('viewLabel').innerHTML = "Задачи";
    }
  }

  render() {
    return (

      <div style={filtersContainerStyles} id="filtersPanel">
        <div id="panelController" onClick={this.togglePanel} style={panelControllerStyles}>
          <img src={openArrow} alt="Панель" id="panelArrow" style={openArrowStyles} />
        </div>
        {this.props.children}
      </div>
    );
  }
}

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
  <Badge className="badges" color="primary">Hello</Badge>
  <span className="taskName">{props.task.name}</span>
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
        <FiltersContainer></FiltersContainer>
        <Header />
        <div id="taskLabelContainer">
          <h1 id="viewLabel">Задачи</h1>
        </div>
        <Nav id="mainNavBar" tabs>
          <NavItem style={{width: '25%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <span className="tabName" style={{color: '#FFC107'}}>мои</span><Badge pill>{this.state.tasks.filter((task) => task.status === 'my').length}</Badge>
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <span className="tabName" style={{color: '#DC3545'}}>доступные</span><Badge pill>{this.state.tasks.filter((task) => task.status === 'available').length}</Badge>
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <span className="tabName" style={{color: '#28A745'}}>выполнено</span><Badge pill>{this.state.tasks.filter((task) => task.status === 'completed').length}</Badge>
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
