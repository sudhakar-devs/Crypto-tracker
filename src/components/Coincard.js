import React from 'react'

const Coincard = ({coin}) => {

  const isPositive = coin.price_change_percentage_24h > 0;

    const change = coin.price_change_percentage_24h 
    ? coin.price_change_percentage_24h.toFixed(2) 
    : "0.00";

 
    const price = coin.current_price 
    ? coin.current_price.toLocaleString() 
    : "Price Hidden";

  return (
   <div className="col">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
                <div className="card-body">
                    <img 
                        src={coin.image} 
                        alt={coin.name} 
                        style={{ width: '50px' }} 
                        className="mb-3" 
                    />
                    <h5 className="card-title fw-bold">{coin.name}</h5>
                    <p className="text-muted small mb-3">{coin.symbol.toUpperCase()}</p>
                    
                    <h4 className="mb-2">${coin.current_price.toLocaleString()}</h4>
                    
                    <p className={`fw-bold ${isPositive ? 'text-success' : 'text-danger'}`}>
                        {isPositive ? '▲' : '▼'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Coincard