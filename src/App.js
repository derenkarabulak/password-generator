import React, { useState } from "react";
import { toast } from "react-toastify";
import { AppBar, Checkbox, Button, IconButton, Box, Typography, Toolbar, FormGroup, FormControlLabel, TextField, Card, CardActions, CardContent } from "@mui/material";
import "./index.css";
import { lowercaseLetters, numbers, speacialCharacters, uppercaseLetters } from "./Character";
import { copySuccess, copyFail } from "./message";

const App = () => {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);

  const handleClick = () => {
    if (!includeNumbers && !includeUppercase && !includeLowercase && !includeCharacters) {
      notify("Pick at least one", true);
    } else {
      let characterList = ""
      if(includeNumbers) {
        characterList = characterList + numbers;
      }

      if(includeUppercase) {
        characterList = characterList + uppercaseLetters;
      }

      if(includeLowercase) {
        characterList = characterList + lowercaseLetters;
      }

      if(includeCharacters) {
        characterList = characterList + speacialCharacters;
      }

      setPassword(createPassword(characterList));
    }

  }

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length
    for (let i = 0; i < passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex)
    }
    return password;
  }

  const notify = (message, hasError = false) => {
    if(hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose:5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position:"top-center",
        autoClose:5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div>
      <div>
        <div>
          <Box sx={{ flexGrow: 1}}>
            <AppBar sx={{ bgcolor: '#9C2D41'}} position="static">
              <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                  Password Generator
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div className="contents">
          <div className="header">
            <h3 className="header">What would you like your password to contain?</h3>
          </div>
          <div className="form-group">
            <FormGroup>
              <TextField sx={{ color: '#9C2D41' }} id="outlined-number" label="Number" type="number" InputLabelProps={{shrink: true,}} defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)}/>
              <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} style={{ color: '#9C2D41'}} />} label="Numbers" />
              <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} style={{ color: '#9C2D41'}} />} label="Uppercase Letters" />
              <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} style={{ color: '#9C2D41'}} />} label="Lowercase Letters" />
              <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox checked={includeCharacters} onChange={(e) => setIncludeCharacters(e.target.checked)} style={{ color: '#9C2D41'}} />} label="Special Characters" />
              <button onClick={handleClick} className="btn">Generate</button>
            </FormGroup>
          </div>
          <div className="result">
            <Card sx= {{ minWidth: 250 }}>
              <CardContent>
                <Typography>Result: </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {password}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App