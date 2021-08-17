import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Grid, TextField, Button } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  // ToDo: Component間のデータのの受け渡し方が適切か調査
  constructor(props){
    super(props);
    this.state = {tasks: [], value: ''};

    this.handleInput = this.handleInput.bind(this);
    this.send = this.send.bind(this);
  }

  componentDidMount() {
    axios
      .get('/tasks')
      .then(res => res.data)
      .then(tasks => {this.setState({ tasks })});
  }

  handleInput({ target: { value } }) {
    this.setState({
      value
    });
  }

  send() {
    const { value } = this.state;
    // ToDo: エラー時の処理
    axios
      .put('/tasks', {name: value})
      .then(res => res.data)
      .then(tasks => {this.setState({ tasks, value: ''})});
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          {/* ToDo: TextBoxとButtonを上下中央揃えする */}
        <TextField value={this.state.value} onChange={this.handleInput} size="small" id="outlined-basic" label="タスク名" variant="outlined" margin="normal"/>
        <Button onClick={this.send} variant="contained" color="primary" margin="normal">追加</Button>
        </Grid>
        <Grid item container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Content tasks={this.state.tasks}/>
          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
    );
  }
}

export default App;