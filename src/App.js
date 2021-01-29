import React from 'react'

import logo from './logo.svg';

import './App.css';

import { Table } from './components/rushing-table.component'

import { rushingData } from './rushing-data'

import {cleanRushingData } from './utils'


const data = cleanRushingData(rushingData)


const  columns = [
    {
        Header: 'Player',
        accessor: 'Player',
        disableSortBy: true,
        filter: 'text'
    },
    {
        Header: 'Team',
        accessor: 'Team',
        disableFilters: true,
        disableSortBy: true
        
    },
    {
        Header: 'Pos',
        accessor: 'Pos',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Att',
        accessor: 'Att',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Att/G',
        accessor: 'Att/G',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Yds', // Total Rushing Yards
        accessor: 'Yds',
        disableFilters: true,
        sortType: 'basic'
    },
    {
        Header: 'Avg', // Rushing Average Yards Per Attempt
        accessor: 'Avg',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Yds/G',
        accessor: 'Yds/G',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'TD', //Total Rushing touchdowns
        accessor: 'TD',
        sortType: 'basic',
        disableFilters: true,
    },
    {
        Header: 'Lng', // Longest Rush -- a T represents a touchdown occurred
        accessor: 'Lng',
        //sortType: 'basic',
        disableFilters: true,
        // sortMethod: (rowA, rowB, desc) => {
        //   console.log(rowA);

        //   const a = parseInt(rowA.toString().replace('T', ''))
          
        //   const b = parseInt(rowB.toString().replace('T', ''))
          
        //   if (a > b) 
        //       return 1
          
        //   if (b > a) 
        //       return -1
          
        //   return 0
        //   }
    },
    {
        Header: '1st',
        accessor: '1st',
        disableSortBy: true,
        disableFilters: true,
    },
    {
        Header: '1st%',
        accessor: '1st%',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: '20+',
        accessor: '20+',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: '40+',
        accessor: '40+',
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'FUM',
        accessor: 'FUM',
        disableFilters: true,
        disableSortBy: true
    },


];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        NFL Rushing
      </header>
      <div>
        <Table data={data} columns = {columns} />
      </div>
    </div>
  );
}

export default App;
