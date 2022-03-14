import CitiesList from "./CitiesList";


const Content = ( {cities, handleDelete, handleCheck}) => {

 

  return (
    <main>
        {cities.length ? (
            <CitiesList 
                cities={cities}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
                        ) : (
    <p style={{marginTop: '2rem' }}>Your list is empty. Please add a city. </p>
            )}
    </main>
  )
}


export default Content;