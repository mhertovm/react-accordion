function Pagination({totalCountries, contriesPerPage, paginate}){
    const pageNumbers=[]
    for (let i=1; i < Math.ceil(totalCountries/ contriesPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <>
        {pageNumbers.map((value)=> {
            return(
                <button key={value} onClick={()=>paginate(value)}>{value}</button>
            )
        })
        }
        </>
    )
    
}

export default Pagination