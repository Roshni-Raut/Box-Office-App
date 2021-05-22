import React,{useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config'
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {
    const [input,setInput]= useLastQuery('');
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
            return results[0].show ?<ShowGrid data={results}/>:<ActorGrid data={results}/>
        }
        return null;
    }
    const onRadioChange=(ev)=>{
        setSearch(ev.target.value)
    }
    return (
        <div>
            <MainPageLayout>
                <SearchInput type="text" 
                placeholder="Search for something"
                value={input} onChange={onInputChange} onKeyDown={onKeyDown}/>
                <RadioInputsWrapper>
                    <div>
                        <CustomRadio 
                            label="Shows"
                            id="show-search" 
                            value="shows" 
                            checked={isShowsSearch}
                            onChange={onRadioChange}/>
                    </div>
                    <div>
                        <CustomRadio 
                        label="Actors"
                        id="actor-search" 
                        value="people" 
                        checked={!isShowsSearch}
                        onChange={onRadioChange}/>
                    </div>
                </RadioInputsWrapper>
                <SearchButtonWrapper>
                <button type="button" onClick={onSearch}>Search</button>
                </SearchButtonWrapper>
                {renderResults()}
            </MainPageLayout>
        </div>
    )
}

export default Home
