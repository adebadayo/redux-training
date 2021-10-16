import React from "react";
import {AppBar, List, ListItem, ListItemText, Reboot, Toolbar, Typography} from "material-ui";
import {Button} from "material-ui";
import Input from "material-ui/TextField/TextField";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './TodoApp.css'

export default function TodoApp({task, tasks, inputTask, addTask}){
  return (
    <div>
      <Reboot />
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            TODO
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={ {padding : 16 }}>
        <Input type="text" onChange={(e) => inputTask(e.target.value)}/>
        <Button raised color="accent" onClick={() => addTask(task)}>add</Button>
        <List>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300}>
            {
              tasks.map(function(item, i){
                return (
                  <ListItem key={i}>
                    <ListItemText primary={`・${item}`} />
                  </ListItem>
                );
              })
            }
          </ReactCSSTransitionGroup>
        </List>
      </div>

    </div>
  )
}