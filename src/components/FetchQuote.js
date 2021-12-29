const FetchQuote = ({quotes}) => {

    const deleteQuote = (quotes) => {
        console.log("quote deleted")
      
        //tähän pyssäs tekeminen, en saanut millään toimimaan
        
      }
    
      const addQuote = () => {
        console.log("quote added")
      
       
        
      }

    return (
        <div>

            <input onClick={addQuote} type="button" value="Add a quote" />
            <input onClick={deleteQuote} type="button" value="Delete all quotes" />
            
        </div>
    
    );
};

 
export default FetchQuote;