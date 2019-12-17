import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    const [terms, setTerms] = useState([]);
    const [results, setResults] = useState([]);
    const [content, setContent] = useState([]);
    let [i] = useState([]);

    useEffect(() => {
        async function loadTerms() {
            const response = JSON.parse(localStorage.getItem('data'))
            const data = JSON.parse(response.data)
            console.log(data)
            setTerms(data.sentences[0].keywords)
            setResults(data.sentences[0].text)
            setContent(data.sentences)
        }
        loadTerms();
    }, []);

    return (
        <>
            <h2>Meaning</h2>
            <span>{results}</span>
            <h2>Terms</h2>
            <ol className="data-list">
                {terms ? terms.map(item => (
                    <li key={i++}>
                        {item}
                    </li>
                )) : 'Loading...'}
            </ol>
            <h2>Brief Explanation</h2>
            <span>{content ? content.map(sentence => (
                sentence.text.indexOf('.') !==-1? sentence.text+' ' : sentence.text +'. '
            )):'Loading...'}</span>
            <Link to="/">
                <button className="btn">New search</button>
            </Link>
        </>
    );
}