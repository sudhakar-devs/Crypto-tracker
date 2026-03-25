import React ,{useState}from 'react'
import axios from 'axios'
import Coincard from './Coincard';
export const Home = () => {

    const [search,setSearch]= useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handler=e=>{
        setSearch(e.target.value)
    }
    
    React.useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false')
        .then(res => {
            setData(res.data);
            setLoading(false)
        })
        .catch(err => {
            if (err.message === "Network Error") {
                alert("Network Error: Please check your internet or disable Ad-blockers.");
            }
            console.error("Full Error Object:", err);
        });
}, []);

const filteredData = data.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
);

  return (
   <div className="container mt-5">
            <h1 className="text-center mb-5 text-primary">Crypto Tracker</h1>
            
            <div className="row justify-content-center mb-5">
                <div className="col-md-6">
                    <input 
                        className="form-control form-control-lg shadow-sm" 
                        placeholder="Search for a coin..." 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {filteredData.map(coin => (
                    <Coincard key={coin.id} coin={coin} />
                ))}
            </div>
        </div>
  )
}

