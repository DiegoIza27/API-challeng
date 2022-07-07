import React from 'react'
import {Heading,Box,Image,Flex,Text,Spacer,Tag,Button,Icon} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import * as API from './services/launches'
import {BsFillCalendarMonthFill} from "react-icons/bs";
const Home = () => {
const [launches,setLaunches]= useState([])
useEffect(()=>{
  API.getAllLaunches().then(setLaunches)
},[])
  return (
    <>
    <Heading as="h1" size="lg" margin="4">
      Datos API
    </Heading>
    <section>
      {
        launches.map(launch=>(
          <Box key ={launch.id} bg="gray.100" padding={4} margin={4} borderRadius='lg'>
          <Flex display="flex">   
          <Text fontSize="2xl">
            Nombre <strong>{launch.name}</strong> <br></br>Username({launch.username})
          </Text>
          <Spacer></Spacer>
          <Tag p={4} colorScheme={launch.email?"green":"red"}>
          {launch.address.city?"City":"City"}
          </Tag>
          </Flex>
           <Flex align="center">
            <Icon as={BsFillCalendarMonthFill} color="gray.500"></Icon>
            {""}
            <Text fontSize="sm" ml={1} color="gray.500"> 
            {launch.address.street}
            </Text>
           </Flex>
           <Button mt ={2} colorScheme="blue">
            More Details
           </Button>
          </Box>
        ))
        }
    </section>
    </>
  )
}
export default Home;
