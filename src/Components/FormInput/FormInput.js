import React, { Component } from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import "./FormInput.css";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, OutlinedInput } from "@mui/material";

export default class FormInput extends Component {
  state = {
    userInput: "",
  };

  handleSubmit = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div className="addForm">
        <FormControl variant="outlined" className="addForm" color="secondary">
          <InputLabel htmlFor="outlined-adornment-password">
            Enter Task{" "}
          </InputLabel>
          <OutlinedInput
            className="input"
            onChange={this.handleSubmit}
            value={this.state.userInput}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <InsertEmoticonIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    this.props.addTask(this.state.userInput);
                    this.setState({ userInput: "" });
                  }}
                  edge="end"
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
            label=" Insert task to add"
          />
        </FormControl>
      </div>
    );
  }
}
