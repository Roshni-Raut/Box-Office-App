import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'

const Home = () => {
    const [input,setInput]= useState('');
    const [results,setResults]=useState(null);
    const [searchOption, setSearch]=useState('shows')
    const isShowsSearch=searchOption==='shows';

    const onSearch=()=>{
        apiGet(`/search/${searchOption}?q=${input}`)
        .then(result=>{
            setResults(result)
        })
    }
    const onInputChange=ev=>{
        setInput(ev.target.value)
    }
    const onKeyDown=ev=>{
        if(ev.keyCode===13)
            onSearch()
    }
    const renderResults=()=>{
        if(results && results.length === 0){
            return <div> No result found </div>
        }
        if(results && results.length>0){
            return results[0].show ?
            results.map(item => (<div key={item.show.id}>{item.show.name}</div>)):
            results.map(item => (<div key={item.person.id}>{item.person.name}</div>))
        }
        return null;
    }
    const onRadioChange=(ev)=>{
        setSearch(ev.target.value)
    }
    return (
        <div>
            <MainPageLayout>
                <input type="text" 
                placeholder="Search for something"
                value={input} onChange={onInputChange} onKeyDown={onKeyDown}/>
                <div>
                    <label htmlFor="show-search">
                        shows<input id="show-search" 
                        checked={isShowsSearch}
                        type="radio" value="shows" onChange={onRadioChange}/>
                    </label>
                    <label htmlFor="actor-search">
                        actor<input id="actor-search" 
                        checked={!isShowsSearch}
                        type="radio" value="people" onChange={onRadioChange}/>
                    </label>
                </div>
                <button type="button" onClick={onSearch}>Search</button>
                {renderResults()}
            </MainPageLayout>
        </div>
    )
}

export default Home
