import React, { useState } from 'react'
import {Table, TableCaption, TableContainer, Td, Thead, Tr } from '@chakra-ui/react'
import "./t.css"
export const Ticatactoe = () => {

const [box,setbox]=useState(Array(9).fill(""))
const [move,setmove]=useState("X");

const touch=(n)=>{
    let square=[...box]
    if(box[n]!==""){
        alert("Already Clcked");
        return;

    }
    square[n]=move;
    setbox(square);
    if(move==="X"){
        setmove("O")
    }else{
        setmove("X")
    }

    if(win(square)){
        alert("Winner Winner Chicken Dinner");
        square.fill("");
        setbox(square)

    }
    if(draw(square)){
        alert("No Chicken No Dinner");
        square.fill("");
        setbox(square)
    }
}
const draw =(box)=>{
    let c=0;
    box.forEach(element => {
        if(element!==""){
            c++
        }
        
    });
    if(c>=9){
        return true;
    }else{
        return false;
    }
}
const win =(box)=>{
    const condition=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let flag=false;
    condition.forEach(element=>{
        if(box[element[0]]!==""&&box[element[1]]!==""&&box[element[2]]!==""){
            if(box[element[0]]===box[element[1]]&&box[element[1]]===box[element[2]]){
                flag=true
            }
        }
    });
    return flag;
}
  return (
   
        <TableContainer bg="black">
         <Table>
            <TableCaption>Tic Tac Toe</TableCaption>
            <Thead>
                <Tr>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink"
                     onClick={()=>{touch(0)}}>{box[0]}</Td>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(1)}}>{box[1]}</Td>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(2)}}>{box[2]}</Td>
                </Tr>
                <Tr>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(3)}}>{box[3]}</Td>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(4)}}>{box[4]}</Td>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(5)}}>{box[5]}</Td>
                </Tr>
                <Tr>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(6)}}>{box[6]}</Td>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(7)}}>{box[7]}</Td>
                    <Td height="150px" width="150px" border="1px solid lightblew" textAlign="center" fontSize="90px" color="pink" onClick={()=>{touch(8)}}>{box[8]}</Td>
                </Tr>
            </Thead>
            </Table>   
        </TableContainer>
  )
}
