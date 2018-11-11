import React from 'react';
import { Button, Progress } from 'reactstrap';
import './taskdetails.css';
import { 
  getTaskById,
  takeTask,
  returnTask,
  getUserTasks
} from '../../api';
import {Header} from '../../components/header';
import tempPic from './template.png';
import ownerLogo from './templogo.png';
import share from './share.png';
import tel from './tel.png';
import home from './home.png';
import time from './time.png';
import more from './more.png';
import back from './back.png';
import withAuth from '../withAuth';
import { Link } from 'react-router-dom';

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.takeTaskFunc = this.takeTaskFunc.bind(this);
    this.returnTask = this.returnTask.bind(this);
    this.isAssignedToCurrentUser = this.isAssignedToCurrentUser.bind(this);
    this.loadData = this.loadData.bind(this);
    this.state = {
      task: {},
      userTasks: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.loadData();
  }

  loadData() {
    Promise.all([
      getTaskById(this.props.match.params.id),
      getUserTasks()]
    ).then(([task, userTasks]) => {
      console.log('loading data');
      this.setState({
        task, userTasks
      })
    });
  }

  takeTaskFunc() {
    const id = this.state.task.id;
    takeTask(id)
      .then(() => {
        this.loadData();
      });
  }

  returnTask() {
    returnTask(this.state.task.id).then(() => {
     this.loadData();
    });
  }

  isAssignedToCurrentUser(task) {
    const taskIsOnCurrentUser = this.state.userTasks.find(userTask => userTask._id === task.id) >= 0;
    console.log('User tasks', this.state.userTasks.map(task => task._id));
    console.log('task is on Current user', taskIsOnCurrentUser);
    return taskIsOnCurrentUser;
  }

  render() {
    return (
      <div id="mainContainer">
        <Link to="/">
          <div id="back">
            <img alt="back" src={back} />
          </div>
        </Link>
        <Header />
        <div id="imgContainer">
          <img src={tempPic} alt="Задача" id="taskImage" />
          <div id="titleInfo">
            <span id="taskName">{this.state.task.title}</span><br />
            <div id="orgContainer">
              <img alt="Приют" id="ownerLogo" src={ownerLogo} />
              <span id="orgName">{this.state.task.ownerId}</span>
            </div>
          </div>
        </div>
        <div id="textContainer">
          <div id="descContainer">{this.state.task.description}</div>
          <hr />
          <img src={home} style={{width: 20, marginRight: 4}} alt="Адрес" /><div id="address">ул. Ленина, 10</div><br />
          <img src={tel} style={{width: 20, marginRight: 4}} alt="Позвонить" /><a id="tel" href="tel:+78005553535">+78005553535</a><br />

          <div style={{marginTop: 20}}>
            <img src={time} style={{width: 20, marginRight: 4}} alt="Время" />
            <div id="time">время</div>
          </div>
          <hr />
          <div style={{marginTop: 5}} className="text-center">Откликнулись 5/10</div>
          <Progress value={50} />
          <div id="btnsContainer" style={{marginTop: 20, marginBottom: 20}}>
            { this.state.task && this.state.task.status === 'available' &&
            <Button onClick={this.takeTaskFunc} type="button" color="success" id="takeTask">Взять задачу</Button>}
            { this.state.task && this.isAssignedToCurrentUser(this.state.task) &&
            <Button onClick={this.returnTask} type="button" color="success" id="releaseTask">Вернуть задачу</Button>}
            <a href={'https://vk.com/share.php?url=http://http://95.213.28.116:5000/task/' + this.state.task.id + '&title=Задача на happytails #' + this.state.task.id}>
              <div id="shareBtnContainer">
                <img alt="Поделиться" src={share} id="shareBtnSize" />
              </div>
            </a>
          </div>
        </div>
        {/*map*/}
    </div>
    );
  }
}

export default withAuth(TaskDetails);
