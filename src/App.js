import { AppBar, Checkbox, IconButton, Box, Typography, Toolbar, FormGroup, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import "./index.css";

const App = () => {

  const [password, setPassword] = useState('');



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
        <div className="header">
          <h3 className="header">What would you like your password to contain?</h3>
        </div>
        <div className="form-group">
          <FormGroup>
            <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox style={{ color: '#9C2D41'}} />} label="Numbers" />
            <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox style={{ color: '#9C2D41'}} />} label="Uppercase Letters" />
            <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox style={{ color: '#9C2D41'}} />} label="Lowercase Letters" />
            <FormControlLabel sx={{ color: '#9C2D41' }} control={<Checkbox style={{ color: '#9C2D41'}} />} label="Characters" />
          </FormGroup>
        </div>
      </div>
    </div>
  )
}

export default App