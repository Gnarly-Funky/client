import React, { useState }from 'react'
import Tile from "./Tile"






const WorldMap = ({ columns = 9, player, worldArray }) => {
  console.log(worldArray)
    let x0 = player.x - 4
    let y0 = player.y - 4
  let display = []
  console.log("reading worldArray")
    for (let row = y0; row < y0 + columns; row++) {
      for (let col = x0; col < x0 + columns; col++) {
        if (worldArray[col][row] == null) {
          display.push('blank')
        } else {
          let tilename = ""
          if (worldArray[col][row].north == true) {
            tilename.concat("N")
          }
          if (worldArray[col][row].south == true) {
            tilename.concat("S")
          }
          if (worldArray[col][row].east == true) {
            tilename.concat("E")
          }
          if (worldArray[col][row].west == true) {
            tilename.concat("W")
          }

          console.log(tilename)
          display.push(tilename)
          tilename = ''
          
        }
      }
    }
  
  
  
    return (
        <div className="world-map">
        {display.map((tile, index) => <Tile className="world-map-tile" icon={tile[index]} />)}
          
        </div>
    )
  } 
      

export default WorldMap
