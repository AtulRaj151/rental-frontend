import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from './SearchResult'
function SearchPage() {  

    return (
        <div className="searchPage">
            <div className="seatchPage__info">
                <p>62 stays . 26 augutst to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button
                variant="outlined"
                >Cancellation Flexibility
                </Button>
                <Button
                  variant="outlined"
                >Type of place</Button>
                 <Button
                  variant="outlined"
                >Price</Button>
                 <Button
                  variant="outlined"
                >Rooms and beds</Button>
                 <Button
                  variant="outlined"
                >More filters</Button>
            </div>
            <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1
            bedrom - 1 bed . 1.5 shared
            bathroom - wifi . kitchen. 
            Free parking . Washing Machine"
             star={4.73}
             price="$43 / night"
             total="$82 total"             
            />
              <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1
            bedrom - 1 bed . 1.5 shared
            bathroom - wifi . kitchen. 
            Free parking . Washing Machine"
             star={4.73}
             price="$43 / night"
             total="$82 total"             
            />
              <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1
            bedrom - 1 bed . 1.5 shared
            bathroom - wifi . kitchen. 
            Free parking . Washing Machine"
             star={4.73}
             price="$43 / night"
             total="$82 total"             
            />
              <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1
            bedrom - 1 bed . 1.5 shared
            bathroom - wifi . kitchen. 
            Free parking . Washing Machine"
             star={4.73}
             price="$43 / night"
             total="$82 total"             
            />
              <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1
            bedrom - 1 bed . 1.5 shared
            bathroom - wifi . kitchen. 
            Free parking . Washing Machine"
             star={4.73}
             price="$43 / night"
             total="$82 total"             
            />

        </div>
    );
}

export default SearchPage;