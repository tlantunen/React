const AddQuote = () => {
    return (
        <div>
            <h3>Add a quote</h3>
            <div>
                <div>
                    <label htmlFor="song">Quote: </label>
                    <input type="text" name="quote" id="quote" />
                </div>

            </div>
            <input type="button" value="Save" />
            
        </div>
    
    );
};


export default AddQuote;