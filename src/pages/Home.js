import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
    const [input,setInput]= useState('')
    const onSearch=()=>{
        fetch(` https://api.tvmaze.com/search/shows?q=${input}`)
        .then(r=>r.json())
        .then(result=>{
            console.log(result)
        })
    }
    const onInputChange=ev=>{
        setInput(ev.target.value)
    }
    const onKeyDown=ev=>{
        if(ev.keyCode===13)
            onSearch()
    }
    return (
        <div>
            <MainPageLayout>
                <input type="text" value={input} onChange={onInputChange} onKeyDown={onKeyDown}/>
                <button type="button" onClick={onSearch}>Search</button>
                {input}
            </MainPageLayout>
        </div>
    )
}

export default Home
