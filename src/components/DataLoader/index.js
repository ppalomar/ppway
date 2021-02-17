import React from 'react';
import Button from '@material-ui/core/Button';

import './index.css';

const DataFileLoader = ({ callback }) => {
  const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      callback(text);
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <Button
        variant="contained"
        component="label"
    >
        Select data source
        <input
            type="file"
            hidden
            onChange={(e) => showFile(e)}
        />
    </Button>
  )
}

export default DataFileLoader;