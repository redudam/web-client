import React from 'react';
import classnames from 'classnames';
import { TabContent, Input, ButtonGroup, Button, Label, TabPane, Nav, NavItem, NavLink, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
      document.getElementById('filtersPanel').style.height = window.innerHeight -
      document.getElementById('viewLabel').offsetHeight - 80 + "px";
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
        <div id = "contentContainer">
          <UncontrolledDropdown>
            <DropdownToggle >
                  Сортировать
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                    Показать все
              </DropdownItem>
              <DropdownItem>
                    Приоритет: выс. -> низ.
              </DropdownItem>
              <DropdownItem>
                    Приоритет: низ. -> выс.
              </DropdownItem>
              <DropdownItem>
                    Новые -> Старые
              </DropdownItem>
              <DropdownItem>
                    Старые -> Новые
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Label style={{marginTop: 30, fontWeight: 'bold'}} for="showOnly">Показать приоритет</Label>
          <ButtonGroup>
            <Button style={{fontSize: '0.7em'}} color = "secondary">Low</Button>
            <Button style={{fontSize: '0.7em'}} color = "primary">Med</Button>
            <Button style={{fontSize: '0.7em'}} color = "success">High</Button>
            <Button style={{fontSize: '0.7em'}} color = "warning">Hot</Button>
            <Button style={{fontSize: '0.7em'}} color = "danger">Extra</Button>
            <Button style={{fontSize: '0.7em'}} color = "dark">Все</Button>
          </ButtonGroup>
          <div style={{marginLeft: 20, marginTop: 30}}>
            <Label style={{fontWeight: 'bold'}} check>
              <Input type="radio" name="radio1" />{' '}
              Только групповые
            </Label>
            <Label style={{fontWeight: 'bold'}} check>
              <Input type="radio" name="radio1" />{' '}
              Только одиночные
            </Label>
          </div>
          <Button style={{marginTop: 30}} color = "dark">Применить</Button>
        </div>

      </div>
    );
  }
}

class Tasks extends React.Component {

  render() {
    return (
      <div {...this.props}>
        {this.props.tasks.filter((task) => task.priority != 'deleted').map(task => <Link key={'_key' + task.id} to={`/task/${task.id}`}><Task className="task" task={task} /></Link>)}
      </div>
    );
  }
}

Tasks.defaultProps = {
  className: 'tasks'
}
//secondary primary success warning danger
//low medium high hot extra
const Task = props => <div {...props}>
<<<<<<< HEAD
    <Badge className="badges" color={
        props.task.priority == 'low' ? "secondary" :
        props.task.priority == 'medium' ? "primary" :
        props.task.priority == 'high' ? "success" :
        props.task.priority == 'hot' ? "warning" : "danger"
      }>{props.task.priority}</Badge>


  <span className="taskName">{props.task.title}</span>
=======
  <Badge className="badges" color="primary">Hello</Badge>
  <span className="taskName">{props.task.name}</span>
>>>>>>> 401d99a1d1b91555cfe7a5ff3fb26056e2f06f59
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

        <FiltersContainer>

        </FiltersContainer>
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
              <span className="tabName" style={{color: '#FFC107'}}>мои</span><br /><Badge pill>{this.state.tasks.filter((task) => task.status === 'my' && task.priority != 'deleted').length}</Badge>
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <span className="tabName" style={{color: '#DC3545'}}>доступные</span><br /><Badge pill>{this.state.tasks.filter((task) => task.status === 'available' && task.priority != 'deleted').length}</Badge>
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <span className="tabName" style={{color: '#28A745'}}>выполнено</span><br /><Badge pill>{this.state.tasks.filter((task) => task.status === 'completed' && task.priority != 'deleted').length}</Badge>
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
