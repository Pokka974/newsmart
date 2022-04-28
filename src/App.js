import React, { useEffect, useState } from 'react'
import api from './conf/apiConf'
import InputBox from './components/InputBox';
import Articles from './components/Articles';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [query, setQuery] = useState('')
  const [source, setSource] = useState('Tous')
  const [sourceParam, setSourceParam] = useState(null)
  const [result, setResult] = useState([])

  const getData = async () => {
    if(source.toLocaleLowerCase() === 'tous') {
      return window.alert(" 'Tous' pas encore disponible ")
    }
    setResult(null)
    // TODO: Prevent special char in the query and set a max length
    const q = query?.replace(/\s+/g, ' ').trim().split(' ').join('&')
    console.log(process.env.REACT_APP_API_URL);
    console.log(`PARAMS : ${sourceParam}/${q.toLocaleLowerCase()}`);

    await api.get(`${sourceParam}/${q.toLocaleLowerCase()}`)
      .then(res => setResult(res.data))
      .catch(err => console.log(err))

    setQuery('')
    setSource('Tous')
  }

  useEffect(() => {
    replaceSource()
  }, [source])

  const replaceSource = () => {
    switch (source.toLocaleLowerCase()) {

      case 'le monde' :
        setSourceParam('lemonde')
        break;

      case 'le figaro' : 
        setSourceParam('figaro')
        break;

      case 'la croix' : 
        setSourceParam('lacroix')
        break;

      case 'la tribune' : 
        setSourceParam('tribune')
        break;

      case 'les echos' : 
        setSourceParam('echos')
        break;

      case 'humanité' : 
        setSourceParam('humanite')
        break;

      case 'libération' : 
        setSourceParam('liberation')
        break;

      default:
        setSourceParam('');
        break;
    }
  }

  return (
    <>
      {/* Header */}
      <Header />

      <main className='flex flex-col items-center justify-center'>
        {/* InputBox */}
        <InputBox source={source} updateSource={(source) => setSource(source)} query={query} updateQuery={(query) => setQuery(query)} updateData={() => getData()} />
        
        {/* All articles */}
        <Articles result={result}/>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}


export default App;
