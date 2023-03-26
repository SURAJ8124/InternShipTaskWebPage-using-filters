import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Sorted from './Sorted';
import Atfilter from './Atfilter';
import LikeFilter from './LikeFilter';
import ReplayFilter from './Replayfilter';
import Pagination from './Pagination';
import SelctorofPagination from './SelctorofPagination';


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [foundNames, setFoundNames] = useState([]);
  const[data,setData]=useState([])
// aascending descending
  const [sortedData, setSortedData] = useState([]);
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);
useEffect(() => {
  const fetchData =  () => {
      fetch("https://dev.ylytic.com/ylytic/test")
      .then(response=>response.json())
      .then(json=>
        {setData(json.comments)
      setFoundNames(json.comments)
      setSortedData(json.comments)
    })
        .catch(e=>{
          console.log("error",e)
        })
    
  };

  fetchData();
}, []);

const handleSearch = (e) => {
  if(e.target.value===''){
    setData(foundNames)
  }
  else{
    const filterResult= foundNames.filter(item=> item.at.toLowerCase().includes(e.target.value.toLowerCase())||  item.author.toLowerCase().includes(e.target.value.toLowerCase())
     ||item.text.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setData(filterResult)   
  }
  setSearchValue(e.target.value)
};
console.log(data,"data")


function AssecdingOrderAt() {
  let data = [...sortedData]
  if(data.length>0){
   let result= data.sort((a,b)=> a.author.localeCompare(b.author))
   setData(result)
  }
}
function DescendingOrder(){
  let data = [...sortedData]
  if(data.length>0){
   let result= data.sort((a,b)=> b.author.localeCompare(a.author))
   setData(result)
  }
}

function AssecdingOrdertext() {
  let data = [...sortedData]
  if(data.length>0){
   let result= data.sort((a,b)=> a.text.localeCompare(b.text))
   setData(result)
  }
}
function DescendingOrdertext(){
  let data = [...sortedData]
  if(data.length>0){
   let result= data.sort((a,b)=> b.text.localeCompare(a.text))
   setData(result)
  }
}


function handleSort(order){
  let data = [...sortedData]
  if(data.length>0){
    let result= data.sort((a,b)=> {
      const dateA = new Date(a.at);
      const dateB = new Date(b.at);
      if (dateA < dateB) return order === "asc" ? -1 : 1;
      if (dateA > dateB) return order === "asc" ? 1 : -1;
      return 0;
    })
    setData(result)
   }

}

function LikeFilter1(order){
  let data = [...sortedData]
  if(data.length>0){
    let result= data.sort((a,b)=> {
      const valueA = parseFloat(a.like);
    const valueB = parseFloat(b.like);
    if (valueA < valueB) return order === "asc" ? -1 : 1;
    if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    })
    setData(result)
   }

}
function ReplayFilter1(order){
  let data = [...sortedData]
  if(data.length>0){
    let result= data.sort((a,b)=> {
      const valueA = parseFloat(a.reply);
    const valueB = parseFloat(b.reply);
    if (valueA < valueB) return order === "asc" ? -1 : 1;
    if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    })
    setData(result)
   }

}
// pagination
// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  //pagination of selector
  const SelctorofPaginationChange=(e)=>{
    setPostsPerPage(e.target.value)
  }


  const arr = [3, 'apple', '@', 'banana', 2, 'cat', 'dog', '!', 'image.png'];
const symbolsAndImages = arr.filter(element => typeof element === 'string' && element.match(/[^\w\s]/));
const nonSymbolsAndImages = arr.filter(element => !symbolsAndImages.includes(element));
const sortedNonSymbolsAndImages = nonSymbolsAndImages.sort();
const sortedArr = [...sortedNonSymbolsAndImages, ...symbolsAndImages];

console.log(sortedArr,"sortedArr");

  
  return (
    
    <div className='backgroundImage'>
      <h4 className='heading4'>Sorry for css</h4>
        <h3 className='heading'>This is web page of showing a list of comments</h3>
     <div className='container'><SelctorofPagination onChange={SelctorofPaginationChange}/></div>
  <div>
     <input className='new' type="search" placeholder='Search' value={searchValue}onChange={handleSearch}></input>
        <ul >
        <table id="customers">
          <thead>
    <tr className='heading2'>
    <th className='paddingofheading2'>at<Atfilter handleSort={handleSort}/></th>
    <th>author<Sorted DescendingOrder={DescendingOrder} AssecdingOrderAt={AssecdingOrderAt}/></th>
    <th>like<LikeFilter handleSort={LikeFilter1}/></th>
    <th>reply<ReplayFilter handleSort={ReplayFilter1}/></th>
    <th>text<Sorted DescendingOrder={DescendingOrdertext} AssecdingOrderAt={AssecdingOrdertext}/></th>
  </tr>
  </thead>
  </table>
        {
          currentPosts?currentPosts.map((item,i)=>{
       return(
        <Card key={i} list={item}/>
       )
         }):"No Data"
        }
        </ul>
    </div>
  <Pagination
  postsPerPage={postsPerPage}
  totalPosts={data.length}
  paginate={paginate}/> 
  
    </div>
    
  );
}

export default App;
