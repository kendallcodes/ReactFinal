import React from 'react';
import useData from './useData';

const SearchCities = () => {

    const [data, query, setQuery, loading, error] = useData(
        "https://www.numbeo.com/api/city_prices?api_key=dl821rgbp26h17&query="
      );

    // Update query on input
      const handleQueryChange = event => {
        const params = {
          query: event.target.value || ""
        };
        setQuery(params);
      };


    return (
        <div>
          <input type="text" value={query.query} onChange={handleQueryChange} />
          {error && <div>`There was an error: ${error}`</div>}
          {loading && <div>Loading...</div>}
    <ul>
            {data.name["prices"].map(article => (
              <li>
                  <p>{article.average_price}</p>
                
              </li>
            ))}
          </ul>
        </div>
      );
    }
    export default SearchCities;










    
//         const [APIData, setAPIData] = useState([])
//         const [filteredResults, setFilteredResults] = useState([]);
//         const [searchInput, setSearchInput] = useState('');


//         useEffect(() => {
//             axios.get(`https://www.numbeo.com/api/city_prices?api_key=dl821rgbp26h17&query={query}`)
//                 .then((response) => {
//                     setAPIData(response.data);
//                 })
//         }, [])
    
//         const searchItems = (searchValue) => {
//             setSearchInput(searchValue)
//             if (searchInput !== '') {
//                 const filteredData = APIData.filter((item) => {
//                     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//                 })
//                 setFilteredResults(filteredData)
//             }
//             else{
//                 setFilteredResults(APIData)
//             }
//         }
    
//         return (
//             <div style={{ padding: 20 }}>
//                 <Input icon='search'
//                     placeholder='Search...'
//                     onChange={(e) => searchItems(e.target.value)}
//                 />
//                 <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
//                     {searchInput.length > 1 ? (
//                         filteredResults.map((item) => {
//                             return (
//                                 <Card>
//                                     <Card.Content>
//                                         <Card.Header>{item.name}</Card.Header>
//                                         <Card.Description>
//                                             {item.email}
//                                         </Card.Description>
//                                     </Card.Content>
//                                 </Card>
//                             )
//                         })
//                     ) : (
//                         APIData.map((item) => {
//                             return (
//                                 <Card>
//                                     <Card.Content>
//                                         <Card.Header>{item.name}</Card.Header>
//                                         <Card.Description>
//                                             {item.email}
//                                         </Card.Description>
//                                     </Card.Content>
//                                 </Card>
//                             )
//                         })
//                     )}
//                 </Card.Group>
//             </div>
//         )
//     }

//   return (
//     <div>
        
        
//     </div>
//   )
